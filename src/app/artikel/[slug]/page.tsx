import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import ArticleDetailContent from './ArticleDetailContent';
import { absoluteUrl, siteConfig } from '@/site/config';
import { buildPageMetadata } from '@/site/metadata';
import { getAllArticles, getArticleBySlug, getArticleDetailBySlug, getStaticArticleSlugs } from '@/lib/content';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getStaticArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const title = `${article.title.id} | Menata Web`;

  return buildPageMetadata({
    title,
    description: article.excerpt.id,
    path: article.route,
    type: 'article',
  });
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = await getArticleDetailBySlug(slug);

  if (!detail) {
    notFound();
  }

  const { article, bodyHtmlId = '', bodyHtmlEn = '', bodyPortableId, bodyPortableEn } = detail;
  const allArticles = await getAllArticles();

  const relatedArticles = [
    ...allArticles.filter(
      (candidate) => candidate.slug !== article.slug && candidate.category.slug === article.category.slug
    ),
    ...allArticles.filter(
      (candidate) => candidate.slug !== article.slug && candidate.category.slug !== article.category.slug
    ),
  ].slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title.id,
    datePublished: article.date.iso,
    dateModified: article.date.iso,
    author: {
      '@type': 'Organization',
      name: 'Menata Web',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo/logo_new_main.png'),
      },
    },
    mainEntityOfPage: absoluteUrl(article.route),
    inLanguage: 'id-ID',
  };

  return (
    <>
      <Script
        id={`article-json-ld-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleDetailContent
        article={article}
        relatedArticles={relatedArticles}
        contentHtmlId={bodyHtmlId}
        contentHtmlEn={bodyHtmlEn}
        contentPortableId={bodyPortableId}
        contentPortableEn={bodyPortableEn}
      />
    </>
  );
}
