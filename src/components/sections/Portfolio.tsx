'use client';
import Image from 'next/image';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const projects = [
  { img: '/assets/images/portfolio_kawidasri.png', cat: ['Pariwisata','Tourism'], name: 'Desa Wisata Kawidasri', impact: ['+300% reservasi online, 15.000+ pengunjung/bulan','+300% online reservations, 15,000+ visitors/month'], url: 'https://kawidasri.com' },
  { img: '/assets/images/portfolio_clavin.png', cat: ['B2B','B2B'], name: 'Clavin Jaya Abadi', impact: ['2x lipat inquiry, ekspansi pasar internasional','2x inquiry increase, international market expansion'], url: 'https://clavinjayaabadi.id' },
  { img: '/assets/images/portfolio_armada.png', cat: ['Transportasi','Transportation'], name: 'Armada Antar Lintas Nusa', impact: ['+40% omzet, brand terlihat lebih terpercaya','+40% revenue, brand looks more trustworthy'], url: 'https://armadaantarlintasnusa.id' },
];

export default function Portfolio() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section section-alt" id="portfolio" ref={ref}>
      <div className="container">
        <div className={`portfolio-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Portofolio','Portfolio')}</div>
          <h2 className="text-h2">{t('Website yang Sudah Kami Bangun',"Websites We've Built")}</h2>
          <p className="text-muted" style={{ marginTop: '1rem' }}>{t('Beberapa contoh hasil kerja kami untuk klien dari berbagai industri.','Some examples of our work for clients from various industries.')}</p>
        </div>
        <div className={`portfolio-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
          {projects.map((p, i) => (
            <div className="portfolio-card" key={i}>
              <div className="portfolio-preview">
                <Image src={p.img} alt={`${p.name} website`} width={600} height={400} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{t(p.cat[0], p.cat[1])}</span>
                <h4>{p.name}</h4>
                <p className="portfolio-impact">{t(p.impact[0], p.impact[1])}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-visit-btn">
                  {t('Lihat Website','Visit Website')}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
