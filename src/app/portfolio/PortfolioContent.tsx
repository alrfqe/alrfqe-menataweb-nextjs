'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';
import FinalCTA from '@/components/sections/FinalCTA';
import type { PortfolioItem } from '@/data/portfolio';
import { categoryLabels } from '@/data/portfolio';

function PortfolioCard({ item, t }: { item: PortfolioItem; t: (id: string, en: string) => string }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-preview">
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          width={600}
          height={400}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span className={`pf-cat-badge pf-cat-badge--${item.type}`}>
          {item.type === 'desain' ? t('Desain', 'Design') : t('Klien', 'Client')}
        </span>
      </div>
      <div className="portfolio-info">
        {item.client && <span className="portfolio-client">{item.client}</span>}
        <h4>{item.title}</h4>
        {item.impact && <p className="portfolio-impact">{t(item.impact.id, item.impact.en)}</p>}
        {!item.impact && item.description && (
          <p className="portfolio-impact">{t(item.description.id, item.description.en)}</p>
        )}
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="portfolio-visit-btn">
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
  );
}

export default function PortfolioContent({ items }: { items: PortfolioItem[] }) {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const [activeCategory, setActiveCategory] = useState<string>('semua');

  // Collect only categories that have items
  const availableCategories = useMemo(() => {
    const cats = Array.from(new Set(items.map((i) => i.category)));
    return cats.sort();
  }, [items]);

  const portfolioItems = items.filter((i) => i.type === 'portfolio');
  const desainItems    = items.filter((i) => i.type === 'desain');

  const filteredPortfolio = activeCategory === 'semua'
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory);

  const filteredDesain = activeCategory === 'semua'
    ? desainItems
    : desainItems.filter((i) => i.category === activeCategory);

  const getCatLabel = (slug: string) =>
    categoryLabels[slug] ? t(categoryLabels[slug].id, categoryLabels[slug].en) : slug;

  return (
    <>
      <section className="section pf-page" ref={ref}>
        <div className="container">

          {/* ── Header ── */}
          <div className={`pf-page-header fade-up${vis ? ' visible' : ''}`}>
            <div className="section-label">{t('Portofolio', 'Portfolio')}</div>
            <h1 className="text-h1">
              {t('Karya ', 'Our ')}
              <span className="text-gradient">{t('Nyata Kami', 'Real Work')}</span>
            </h1>
            <p className="hero-desc" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
              {t(
                'Dari website klien nyata hingga inspirasi desain per industri — semuanya ada di sini.',
                'From real client websites to industry design inspiration — all in one place.'
              )}
            </p>
          </div>

          {/* ── Category Filter ── */}
          {availableCategories.length > 0 && (
            <div className={`portfolio-filter-tabs fade-up${vis ? ' visible' : ''}`}>
              <button
                className={`portfolio-filter-btn${activeCategory === 'semua' ? ' active' : ''}`}
                onClick={() => setActiveCategory('semua')}
              >
                {t('Semua', 'All')}
                <span className="portfolio-filter-count">{items.length}</span>
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  className={`portfolio-filter-btn${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {getCatLabel(cat)}
                  <span className="portfolio-filter-count">{items.filter((i) => i.category === cat).length}</span>
                </button>
              ))}
            </div>
          )}

          {/* ══════════════════════════════════
              SECTION 1 — PORTOFOLIO KLIEN
          ══════════════════════════════════ */}
          <div className={`pf-section fade-up${vis ? ' visible' : ''}`}>
            <div className="pf-section-header">
              <div className="pf-section-icon pf-section-icon--portfolio">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h2 className="pf-section-title">{t('Portofolio Klien', 'Client Portfolio')}</h2>
                <p className="pf-section-desc">{t('Website yang sudah kami bangun untuk klien nyata.', 'Websites we have built for real clients.')}</p>
              </div>
            </div>

            {filteredPortfolio.length > 0 ? (
              <div className="portfolio-grid">
                {filteredPortfolio.map((p, i) => (
                  <PortfolioCard key={p.id ?? i} item={p} t={t} />
                ))}
              </div>
            ) : (
              <div className="pf-empty">
                <div className="pf-empty-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                </div>
                <p className="pf-empty-title">{t('Belum ada klien di kategori ini', 'No clients in this category yet')}</p>
                <p className="pf-empty-sub">
                  {t('Lihat inspirasi desainnya di bawah 👇', 'Check the design inspiration below 👇')}
                </p>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════
              SECTION 2 — INSPIRASI DESAIN
          ══════════════════════════════════ */}
          <div className={`pf-section pf-section--desain fade-up${vis ? ' visible' : ''}`}>
            <div className="pf-section-header">
              <div className="pf-section-icon pf-section-icon--desain">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                </svg>
              </div>
              <div>
                <h2 className="pf-section-title">{t('Inspirasi Desain', 'Design Inspiration')}</h2>
                <p className="pf-section-desc">
                  {t(
                    'Belum punya klien di industri Anda? Ini contoh desain yang bisa kami buat.',
                    "Don't have a client in your industry yet? Here are design examples we can make."
                  )}
                </p>
              </div>
            </div>

            {filteredDesain.length > 0 ? (
              <div className="portfolio-grid">
                {filteredDesain.map((p, i) => (
                  <PortfolioCard key={p.id ?? i} item={p} t={t} />
                ))}
              </div>
            ) : (
              <div className="pf-empty pf-empty--soft">
                <p className="pf-empty-title">
                  {activeCategory === 'semua'
                    ? t('Inspirasi desain segera hadir.', 'Design inspiration coming soon.')
                    : t('Belum ada desain di kategori ini.', 'No designs in this category yet.')}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
      <FinalCTA />
    </>
  );
}
