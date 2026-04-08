'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';
import type { PortfolioItem } from '@/data/portfolio';

interface PortfolioProps {
  items?: PortfolioItem[];
}

export default function Portfolio({ items = [] }: PortfolioProps) {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();

  const realWork = items.filter((p) => p.type === 'portfolio');
  const featured = realWork.filter((p) => p.featured).slice(0, 3);
  const display = featured.length > 0 ? featured : realWork.slice(0, 3);

  return (
    <section className="section section-alt" id="portfolio" ref={ref}>
      <div className="container">
        <div className={`portfolio-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Portofolio', 'Portfolio')}</div>
          <h2 className="text-h2">{t('Website yang Sudah Kami Bangun', "Websites We've Built")}</h2>
          <p className="text-muted" style={{ marginTop: '1rem' }}>{t('Beberapa contoh hasil kerja kami untuk klien dari berbagai industri.', 'Some examples of our work for clients from various industries.')}</p>
        </div>
        <div className={`portfolio-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
          {display.map((p, i) => (
            <div className="portfolio-card" key={p.id ?? i}>
              <div className="portfolio-preview">
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? `${p.title} - ${p.category}`}
                  width={600}
                  height={400}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{p.category === 'desain' ? t('Desain', 'Design') : t(p.category, p.category)}</span>
                <h4>{p.title}</h4>
                {p.impact && <p className="portfolio-impact">{t(p.impact.id, p.impact.en)}</p>}
                {p.description && !p.impact && <p className="portfolio-impact">{t(p.description.id, p.description.en)}</p>}
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-visit-btn">
                    {t('Lihat Website', 'Visit Website')}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`portfolio-cta-row fade-up${vis ? ' visible' : ''}`}>
          <Link href="/portfolio" className="btn btn-outline">
            {t('Lihat Semua Portofolio →', 'View All Portfolio →')}
          </Link>
        </div>
      </div>
    </section>
  );
}
