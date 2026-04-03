'use client';

import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { ArticleCardVisual } from '@/components/articles/ArticleVisual';
import { useLang } from '@/hooks/useLanguage';
import type { ArticleSummary } from '@/data/articles';

type Props = {
  article: ArticleSummary;
  relatedArticles: ArticleSummary[];
  contentHtmlId: string;
  contentHtmlEn: string;
  contentPortableId?: PortableTextBlock[];
  contentPortableEn?: PortableTextBlock[];
};

export default function ArticleDetailContent({
  article,
  relatedArticles,
  contentHtmlId,
  contentHtmlEn,
  contentPortableId,
  contentPortableEn,
}: Props) {
  const { t, lang } = useLang();
  const contentHtml = lang === 'id' ? contentHtmlId : contentHtmlEn;
  const contentPortable = lang === 'id' ? contentPortableId : contentPortableEn;

  return (
    <main className="article-shell">
      <div className="container">
        <article className="article-card">
          <div className="section-label">{t(article.category.id, article.category.en)}</div>
          <h1 className="text-h1">{t(article.title.id, article.title.en)}</h1>
          <div className="article-meta">
            <span>{t(article.date.id, article.date.en)}</span>
            <span>{t(article.readTime.id, article.readTime.en)}</span>
            <span>Menata Web</span>
          </div>
          <div className="article-content">
            {contentPortable && contentPortable.length > 0 ? (
              <PortableText value={contentPortable} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            )}
          </div>
        </article>
        <section className="article-related">
          <div className="article-related-header">
            <div className="section-label">{t('Rekomendasi', 'Recommended')}</div>
            <h2 className="text-h3">{t('Artikel Lainnya yang Mungkin Relevan', 'Other Articles You May Find Relevant')}</h2>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((related) => (
              <Link href={related.route} key={related.slug} className="article-related-card">
                <div className="article-related-visual">
                  <ArticleCardVisual visual={related.visual} />
                  <span className="article-related-category">{t(related.category.id, related.category.en)}</span>
                </div>
                <div className="article-related-body">
                  <div className="article-related-meta">
                    <span>{t(related.date.id, related.date.en)}</span>
                    <span>{t(related.readTime.id, related.readTime.en)}</span>
                  </div>
                  <h3>{t(related.title.id, related.title.en)}</h3>
                  <p>{t(related.homeExcerpt?.id ?? related.excerpt.id, related.homeExcerpt?.en ?? related.excerpt.en)}</p>
                  <span className="article-related-link">{t('Baca Artikel →', 'Read Article →')}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="article-footer-links">
          <Link href="/artikel" className="btn btn-outline">
            {t('Artikel Lainnya', 'More Articles')}
          </Link>
          <Link href="/kontak" className="btn btn-primary">
            {t('Konsultasi', 'Consultation')}
          </Link>
        </div>
      </div>
    </main>
  );
}
