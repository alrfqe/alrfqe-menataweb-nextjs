import {
  articleBySlug,
  articles,
  featuredArticle as fallbackFeaturedArticle,
  type ArticleSummary,
  type ArticleVisual,
  type LocalizedText,
} from '@/data/articles';
import { articleContentBySlug, articleContentEnBySlug } from '@/data/article-content';
import { pricingPackages, type PricingPackage } from '@/data/pricing';
import { portfolioItems, type PortfolioItem, type PortfolioCategory } from '@/data/portfolio';
import { productSolutions, type ProductImage, type ProductSolution, type ProductVisual } from '@/data/products';
import { sanityFetch } from '@/lib/sanity/client';
import { isSanityConfigured } from '@/lib/sanity/env';
import { articleDetailBySlugQuery, articleListQuery, pricingPackagesQuery, portfolioItemsQuery, productSolutionsQuery } from '@/lib/sanity/queries';
import type { PortableTextBlock } from '@portabletext/types';

type CategorySlug = ArticleSummary['category']['slug'];

type CmsArticleRecord = {
  slug: string;
  featured?: boolean;
  showOnHome?: boolean;
  category?: CategorySlug;
  publishedAt?: string;
  readTime?: LocalizedText;
  title?: LocalizedText;
  excerpt?: LocalizedText;
  homeExcerpt?: LocalizedText;
  visual?: ArticleVisual;
  body?: {
    id?: PortableTextBlock[];
    en?: PortableTextBlock[];
  };
};

type CmsPricingRecord = {
  order?: number;
  name?: string;
  price?: string;
  originalPrice?: string;
  priceFix?: boolean;
  featured?: boolean;
  description?: LocalizedText;
  features?: Array<LocalizedText | null>;
  whatsappUrl?: string;
};

type CmsPortfolioRecord = {
  order?: number;
  featured?: boolean;
  title?: string;
  type?: string;
  category?: string;
  client?: string;
  image?: { url: string; alt?: string } | null;
  description?: LocalizedText;
  impact?: LocalizedText;
  url?: string;
};

type CmsProductRecord = {
  order?: number;
  slug?: string;
  featured?: boolean;
  category?: LocalizedText;
  title?: LocalizedText;
  summary?: LocalizedText;
  idealFor?: LocalizedText;
  features?: Array<LocalizedText | null>;
  visual?: ProductVisual;
  image?: ProductImage | null;
  ctaUrl?: string;
};

export type ArticleDetailContent = {
  article: ArticleSummary;
  bodyHtmlId?: string;
  bodyHtmlEn?: string;
  bodyPortableId?: PortableTextBlock[];
  bodyPortableEn?: PortableTextBlock[];
};

const categoryLabels: Record<CategorySlug, { id: string; en: string }> = {
  website: { id: 'Website', en: 'Website' },
  seo: { id: 'SEO', en: 'SEO' },
  bisnis: { id: 'Bisnis', en: 'Business' },
  tips: { id: 'Tips', en: 'Tips' },
};

function formatDatePair(iso: string) {
  const date = new Date(iso);
  return {
    iso,
    id: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date),
    en: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date),
  };
}

function normalizeArticle(record: CmsArticleRecord): ArticleSummary | null {
  if (!record.slug || !record.category || !record.title?.id || !record.title.en || !record.excerpt?.id || !record.excerpt.en) {
    return null;
  }

  const publishedAt = record.publishedAt ?? new Date().toISOString();

  return {
    slug: record.slug,
    route: `/artikel/${record.slug}`,
    featured: Boolean(record.featured),
    showOnHome: Boolean(record.showOnHome),
    category: {
      slug: record.category,
      id: categoryLabels[record.category].id,
      en: categoryLabels[record.category].en,
    },
    date: formatDatePair(publishedAt),
    readTime: record.readTime ?? { id: '5 min baca', en: '5 min read' },
    title: record.title,
    excerpt: record.excerpt,
    homeExcerpt: record.homeExcerpt,
    visual: record.visual ?? 'website',
  };
}

function normalizePricing(record: CmsPricingRecord, index: number): PricingPackage | null {
  if (!record.name || !record.price || !record.description?.id || !record.description.en) {
    return null;
  }

  const num = String(record.order ?? index + 1).padStart(2, '0');
  const normalizedName = record.name;

  return {
    num,
    name: normalizedName,
    price: record.price,
    originalPrice: record.originalPrice,
    priceFix: record.priceFix ?? true,
    desc: record.description,
    featured: Boolean(record.featured),
    features: (record.features ?? []).filter(Boolean) as LocalizedText[],
    wa:
      record.whatsappUrl ??
      `https://wa.me/6285726061384?text=${encodeURIComponent(`Halo Menata Web, saya tertarik dengan paket ${normalizedName}.`)}`,
  };
}

export async function getAllArticles() {
  if (!isSanityConfigured()) return articles;

  try {
    const cmsArticles = await sanityFetch<CmsArticleRecord[]>(articleListQuery);
    const normalized = (cmsArticles ?? []).map(normalizeArticle).filter(Boolean) as ArticleSummary[];
    return normalized.length > 0 ? normalized : articles;
  } catch {
    return articles;
  }
}

export async function getHomeArticles() {
  const allArticles = await getAllArticles();
  return allArticles.filter((article) => article.showOnHome);
}

export async function getFeaturedArticle() {
  const allArticles = await getAllArticles();
  return allArticles.find((article) => article.featured) ?? allArticles[0] ?? fallbackFeaturedArticle;
}

export async function getArticleBySlug(slug: string) {
  if (!isSanityConfigured()) return articleBySlug[slug] ?? null;

  try {
    const article = await sanityFetch<CmsArticleRecord>(articleDetailBySlugQuery, { slug });
    return article ? normalizeArticle(article) : null;
  } catch {
    return articleBySlug[slug] ?? null;
  }
}

export async function getArticleDetailBySlug(slug: string): Promise<ArticleDetailContent | null> {
  if (!isSanityConfigured()) {
    const article = articleBySlug[slug];
    if (!article) return null;
    return {
      article,
      bodyHtmlId: articleContentBySlug[slug as keyof typeof articleContentBySlug],
      bodyHtmlEn: articleContentEnBySlug[slug as keyof typeof articleContentEnBySlug],
    };
  }

  try {
    const article = await sanityFetch<CmsArticleRecord>(articleDetailBySlugQuery, { slug });
    const normalized = article ? normalizeArticle(article) : null;

    if (!normalized) {
      return null;
    }

    return {
      article: normalized,
      bodyPortableId: article?.body?.id ?? [],
      bodyPortableEn: article?.body?.en ?? [],
    };
  } catch {
    const article = articleBySlug[slug];
    if (!article) return null;
    return {
      article,
      bodyHtmlId: articleContentBySlug[slug as keyof typeof articleContentBySlug],
      bodyHtmlEn: articleContentEnBySlug[slug as keyof typeof articleContentEnBySlug],
    };
  }
}

export async function getPricingPackages() {
  if (!isSanityConfigured()) return pricingPackages;

  try {
    const cmsPackages = await sanityFetch<CmsPricingRecord[]>(pricingPackagesQuery);
    const normalized = (cmsPackages ?? []).map(normalizePricing).filter(Boolean) as PricingPackage[];
    return normalized.length > 0 ? normalized : pricingPackages;
  } catch {
    return pricingPackages;
  }
}

function normalizePortfolioItem(record: CmsPortfolioRecord, index: number): PortfolioItem | null {
  if (!record.title || !record.type || !record.category || !record.image?.url) return null;
  return {
    id: `cms-${index}`,
    order: record.order ?? index + 1,
    featured: Boolean(record.featured),
    type: record.type as PortfolioItem['type'],
    category: record.category,
    title: record.title,
    client: record.client,
    image: record.image.url,
    imageAlt: record.image.alt,
    description: record.description,
    impact: record.impact,
    url: record.url,
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (!isSanityConfigured()) return portfolioItems;
  try {
    const cmsItems = await sanityFetch<CmsPortfolioRecord[]>(portfolioItemsQuery);
    const normalized = (cmsItems ?? []).map(normalizePortfolioItem).filter(Boolean) as PortfolioItem[];
    return normalized.length > 0 ? normalized : portfolioItems;
  } catch {
    return portfolioItems;
  }
}

function normalizeProduct(record: CmsProductRecord, index: number): ProductSolution | null {
  if (!record.slug || !record.category?.id || !record.category.en || !record.title?.id || !record.title.en || !record.summary?.id || !record.summary.en || !record.idealFor?.id || !record.idealFor.en || !record.visual) {
    return null;
  }

  return {
    slug: record.slug,
    order: record.order ?? index + 1,
    featured: Boolean(record.featured),
    category: record.category,
    title: record.title,
    summary: record.summary,
    idealFor: record.idealFor,
    features: (record.features ?? []).filter(Boolean) as LocalizedText[],
    visual: record.visual,
    image: record.image ?? undefined,
    ctaUrl:
      record.ctaUrl ??
      `https://wa.me/6285726061384?text=${encodeURIComponent(`Halo Menata Web, saya ingin diskusi soal ${record.title.id}.`)}`,
  };
}

export async function getProductSolutions() {
  if (!isSanityConfigured()) return productSolutions;

  try {
    const cmsProducts = await sanityFetch<CmsProductRecord[]>(productSolutionsQuery);
    const normalized = (cmsProducts ?? []).map(normalizeProduct).filter(Boolean) as ProductSolution[];
    return normalized.length > 0 ? normalized : productSolutions;
  } catch {
    return productSolutions;
  }
}

export function getStaticArticleSlugs() {
  return articles.map((article) => article.slug);
}

export function getCmsFeatureMatrix() {
  return {
    implemented: ['artikel', 'isi artikel', 'featured article', 'article homepage preview', 'pricing packages', 'product solutions'],
    recommendedNext: ['faq', 'testimonial', 'portfolio'],
    keepStatic: ['hero copy', 'legal boilerplate', 'header/footer navigation'],
  };
}
