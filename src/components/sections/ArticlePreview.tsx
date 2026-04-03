'use client';
import Link from 'next/link';
import type { ArticleSummary } from '@/data/articles';
import { ArticleCardVisual } from '@/components/articles/ArticleVisual';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

export default function ArticlePreview({ articles }: { articles: ArticleSummary[] }) {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="artikel-preview" ref={ref}>
      <div className="container">
        <div className="artikel-preview-header">
          <div className={`section-label fade-up${vis ? ' visible' : ''}`}><span className="label-dot"></span>Blog &amp; Tips</div>
          <h2 className={`text-h2 fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.05s' }}>{t('Artikel Terbaru','Latest Articles')}</h2>
        </div>
        <div className={`artikel-preview-grid fade-up${vis ? ' visible' : ''}`}>
          {articles.map((article) => (
            <Link href={article.route} key={article.slug} className="artikel-preview-card">
              <div className="artikel-preview-card-visual">
                <ArticleCardVisual visual={article.visual} />
                <span className="artikel-card-category">{t(article.category.id, article.category.en)}</span>
              </div>
              <div className="artikel-preview-card-body">
                <div className="artikel-card-meta">
                  <span className="artikel-card-date">{t(article.date.id, article.date.en)}</span>
                  <span className="artikel-card-read-time">{t(article.readTime.id, article.readTime.en)}</span>
                </div>
                <h3>{t(article.title.id, article.title.en)}</h3>
                <p>{t(article.homeExcerpt?.id ?? article.excerpt.id, article.homeExcerpt?.en ?? article.excerpt.en)}</p>
                <span className="artikel-card-link">{t('Baca Artikel →', 'Read Article →')}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={`artikel-preview-cta fade-up${vis ? ' visible' : ''}`}>
          <Link href="/artikel" className="btn btn-outline btn-lg">{t('Lihat Semua Artikel →','View All Articles →')}</Link>
        </div>
      </div>
    </section>
  );
}
