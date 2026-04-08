'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';
import FinalCTA from '@/components/sections/FinalCTA';
import type { PortfolioItem, PortfolioCategory } from '@/data/portfolio';

type FilterTab = 'semua' | PortfolioCategory;

const tabs: { key: FilterTab; id: string; en: string }[] = [
  { key: 'semua', id: 'Semua', en: 'All' },
  { key: 'website', id: 'Website', en: 'Website' },
  { key: 'desain', id: 'Desain', en: 'Design' },
];

export default function PortfolioContent({ items }: { items: PortfolioItem[] }) {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const [active, setActive] = useState<FilterTab>('semua');

  const filtered = active === 'semua' ? items : items.filter((p) => p.category === active);

  return (
    <>
      <section className="section pricing-page-hero" ref={ref}>
        <div className="container">

          {/* Header */}
          <div className={`fade-up${vis ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-label">{t('Portofolio', 'Portfolio')}</div>
            <h1 className="text-h1">
              {t('Hasil Kerja ', 'Our ')}
              <span className="text-gradient">{t('Nyata', 'Real Work')}</span>
            </h1>
            <p className="hero-desc" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
              {t(
                'Dari website bisnis hingga desain branding — semua dikerjakan dengan standar profesional.',
                'From business websites to branding design — all crafted to professional standards.'
              )}
            </p>
          </div>

          {/* Category Tabs */}
          <div className={`portfolio-filter-tabs fade-up${vis ? ' visible' : ''}`}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`portfolio-filter-btn${active === tab.key ? ' active' : ''}`}
                onClick={() => setActive(tab.key)}
              >
                {t(tab.id, tab.en)}
                <span className="portfolio-filter-count">
                  {tab.key === 'semua' ? items.length : items.filter((p) => p.category === tab.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className={`portfolio-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
              {filtered.map((p, i) => (
                <div
                  className={`portfolio-card portfolio-card--${p.category}`}
                  key={p.id ?? i}
                >
                  <div className="portfolio-preview">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? `${p.title} - ${p.category}`}
                      width={600}
                      height={p.category === 'desain' ? 600 : 400}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                    />
                    <span className={`portfolio-category-badge portfolio-category-badge--${p.category}`}>
                      {p.category === 'desain' ? t('Desain', 'Design') : 'Website'}
                    </span>
                  </div>
                  <div className="portfolio-info">
                    {p.client && <span className="portfolio-client">{p.client}</span>}
                    <h4>{p.title}</h4>
                    {p.impact && <p className="portfolio-impact">{t(p.impact.id, p.impact.en)}</p>}
                    {p.description && !p.impact && <p className="portfolio-impact">{t(p.description.id, p.description.en)}</p>}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-visit-btn">
                        {t('Lihat Website', 'Visit Website')}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty">
              <p>{t('Belum ada item di kategori ini.', 'No items in this category yet.')}</p>
            </div>
          )}

        </div>
      </section>
      <FinalCTA />
    </>
  );
}
