'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ArticleSummary } from '@/data/articles';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';
import { ArticleCardVisual, FeaturedArticleVisual } from '@/components/articles/ArticleVisual';

type Filter = 'all' | 'website' | 'seo' | 'bisnis' | 'tips';

const filters: { key: Filter; id: string; en: string }[] = [
  { key: 'all', id: 'Semua', en: 'All' },
  { key: 'website', id: 'Website', en: 'Website' },
  { key: 'seo', id: 'SEO', en: 'SEO' },
  { key: 'bisnis', id: 'Bisnis', en: 'Business' },
  { key: 'tips', id: 'Tips', en: 'Tips' },
];

type Props = {
  articles: ArticleSummary[];
  featuredArticle: ArticleSummary;
};

export default function ArtikelContent({ articles, featuredArticle }: Props) {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [ref, visible] = useFadeUp<HTMLElement>();

  const filteredArticles = articles.filter((article) => !article.featured).filter((article) => {
    if (activeFilter === 'all') return true;
    return article.category.slug === activeFilter;
  });

  return (
    <>
      <section className="artikel-hero" ref={ref}>
        <div className="container">
          <div className={`section-label fade-up${visible ? ' visible' : ''}`}>
            <span className="label-dot"></span>
            {t('Blog & Tips', 'Blog & Tips')}
          </div>
          <h1 className={`text-h1 fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: '.05s' }}>
            {t('Panduan Digital untuk', 'Digital Guides for')}
            <br />
            <span className="text-gradient">{t('Bisnis Modern', 'Modern Businesses')}</span>
          </h1>
          <p className={`artikel-hero-desc fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: '.1s' }}>
            {t(
              'Tips praktis, insight, dan panduan lengkap untuk membangun kehadiran digital yang kuat.',
              'Practical tips, insights, and comprehensive guides to build a strong digital presence.'
            )}
          </p>
        </div>
      </section>

      <section className="artikel-filter">
        <div className="container">
          <div className={`filter-tabs fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: '.15s' }}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`filter-tab${activeFilter === filter.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {t(filter.id, filter.en)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="artikel-featured">
        <div className="container">
          <div className="featured-card fade-up visible">
            <div className="featured-image">
              <FeaturedArticleVisual />
            </div>
            <div className="featured-content">
              <div className="artikel-meta">
                <span className="artikel-category">{t(featuredArticle.category.id, featuredArticle.category.en)}</span>
                <span className="artikel-date">{t(featuredArticle.date.id, featuredArticle.date.en)}</span>
                <span className="artikel-read">{t(featuredArticle.readTime.id, featuredArticle.readTime.en)}</span>
              </div>
              <h2 className="artikel-title">{t(featuredArticle.title.id, featuredArticle.title.en)}</h2>
              <p className="artikel-excerpt">{t(featuredArticle.excerpt.id, featuredArticle.excerpt.en)}</p>
              <Link href={featuredArticle.route} className="artikel-read-more">
                {t('Baca Selengkapnya →', 'Read More →')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="artikel-grid-section">
        <div className="container">
          <div className="artikel-grid">
            {filteredArticles.map((article, index) => (
              <article className="artikel-card fade-up visible" key={article.slug} style={{ transitionDelay: `${index * 0.05}s` }}>
                <Link href={article.route}>
                  <div className="artikel-card-image">
                    <ArticleCardVisual visual={article.visual} />
                  </div>
                  <div className="artikel-card-body">
                    <div className="artikel-meta">
                      <span className="artikel-category">{t(article.category.id, article.category.en)}</span>
                      <span className="artikel-date">{t(article.date.id, article.date.en)}</span>
                    </div>
                    <h3 className="artikel-card-title">{t(article.title.id, article.title.en)}</h3>
                    <p className="artikel-card-excerpt">{t(article.excerpt.id, article.excerpt.en)}</p>
                    <span className="artikel-read-more">{t('Baca →', 'Read →')}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="artikel-newsletter">
        <div className="container">
          <div className="newsletter-card fade-up visible">
            <div className="newsletter-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2>{t('Butuh Panduan yang Lebih Spesifik?', 'Need More Specific Guidance?')}</h2>
            <p>
              {t(
                'Jika Anda ingin membahas website bisnis secara langsung, tim kami siap membantu memberi rekomendasi yang lebih relevan dengan kondisi usaha Anda.',
                'If you want to discuss your business website directly, our team is ready to provide recommendations tailored to your business condition.'
              )}
            </p>
            <div className="newsletter-form">
              <Link href="/kontak" className="btn btn-primary">
                {t('Konsultasi Website', 'Website Consultation')}
              </Link>
              <a href="https://wa.me/6285726061384" className="btn btn-outline">
                {t('Chat WhatsApp', 'WhatsApp Chat')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
