import type { PortableTextBlock } from '@portabletext/types';
import { getCliClient } from 'sanity/cli';
import { articles } from '../src/data/articles';
import { articleContentBySlug, articleContentEnBySlug } from '../src/data/article-content';
import { pricingPackages } from '../src/data/pricing';
import { productSolutions } from '../src/data/products';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ubwoe1c4';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = getCliClient({
  apiVersion: '2025-08-15',
  projectId,
  dataset,
  useCdn: false,
});

function decodeEntities(text: string) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&rsquo;|&lsquo;/g, "'");
}

function randomKey() {
  return Math.random().toString(36).slice(2, 11);
}

function stripTags(input: string) {
  return decodeEntities(input.replace(/<[^>]+>/g, '').trim());
}

function textBlock(text: string, style: PortableTextBlock['style'] = 'normal', extras: Partial<PortableTextBlock> = {}): PortableTextBlock {
  return {
    _type: 'block',
    _key: randomKey(),
    style,
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: randomKey(),
        text,
        marks: [],
      },
    ],
    ...extras,
  };
}

function htmlToPortableText(html: string): PortableTextBlock[] {
  const blocks: PortableTextBlock[] = [];
  const tagPattern = /<(p|h2|h3|ul|ol)>([\s\S]*?)<\/\1>/g;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(html)) !== null) {
    const [, tag, content] = match;

    if (tag === 'p') {
      const text = stripTags(content);
      if (text) blocks.push(textBlock(text));
      continue;
    }

    if (tag === 'h2' || tag === 'h3') {
      const text = stripTags(content);
      if (text) blocks.push(textBlock(text, tag));
      continue;
    }

    if (tag === 'ul' || tag === 'ol') {
      const listItemPattern = /<li>([\s\S]*?)<\/li>/g;
      let itemMatch: RegExpExecArray | null;
      while ((itemMatch = listItemPattern.exec(content)) !== null) {
        const text = stripTags(itemMatch[1]);
        if (!text) continue;
        blocks.push(
          textBlock(text, 'normal', {
            listItem: tag === 'ol' ? 'number' : 'bullet',
            level: 1,
          })
        );
      }
    }
  }

  return blocks;
}

async function seedArticles() {
  for (const article of articles) {
    const bodyId = articleContentBySlug[article.slug as keyof typeof articleContentBySlug];
    const bodyEn = articleContentEnBySlug[article.slug as keyof typeof articleContentEnBySlug];

    await client.createOrReplace({
      _id: `article.${article.slug}`,
      _type: 'article',
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      category: article.category.slug,
      excerpt: article.excerpt,
      homeExcerpt: article.homeExcerpt,
      readTime: article.readTime,
      visual: article.visual,
      publishedAt: `${article.date.iso}T00:00:00.000Z`,
      featured: Boolean(article.featured),
      showOnHome: Boolean(article.showOnHome),
      body: {
        _type: 'localizedPortableText',
        id: htmlToPortableText(bodyId),
        en: htmlToPortableText(bodyEn),
      },
    });
  }
}

async function seedPricing() {
  for (const pkg of pricingPackages) {
    await client.createOrReplace({
      _id: `pricingPackage.${pkg.name.toLowerCase()}`,
      _type: 'pricingPackage',
      order: Number(pkg.num),
      name: pkg.name,
      price: pkg.price,
      priceFix: pkg.priceFix,
      featured: pkg.featured,
      description: pkg.desc,
      features: pkg.features.map((feature) => ({
        _type: 'localizedString',
        _key: randomKey(),
        id: feature.id,
        en: feature.en,
      })),
      whatsappUrl: pkg.wa,
    });
  }
}

async function seedProducts() {
  for (const product of productSolutions) {
    await client.createOrReplace({
      _id: `productSolution.${product.slug}`,
      _type: 'productSolution',
      order: product.order,
      slug: { _type: 'slug', current: product.slug },
      featured: Boolean(product.featured),
      category: product.category,
      title: product.title,
      summary: product.summary,
      idealFor: product.idealFor,
      features: product.features.map((feature) => ({
        _type: 'localizedString',
        _key: randomKey(),
        id: feature.id,
        en: feature.en,
      })),
      visual: product.visual,
      ctaUrl: product.ctaUrl,
    });
  }
}

async function main() {
  await seedArticles();
  await seedPricing();
  await seedProducts();
  console.log(`Seed completed for project ${projectId}/${dataset}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
