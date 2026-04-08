'use client';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';
import FinalCTA from '@/components/sections/FinalCTA';
import type { PricingPackage } from '@/data/pricing';

export default function PricingContent({ packages }: { packages: PricingPackage[] }) {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <>
      <section className="section pricing-page-hero" ref={ref}>
        <div className="container">
          <div className={`fade-up${vis ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div className="section-label">{t('Paket Harga', 'Pricing Packages')}</div>
            <h1 className="text-h1">{t('Investasi yang Tepat untuk ', 'The Right Investment for ')}<span className="text-gradient">{t('Bisnis Anda', 'Your Business')}</span></h1>
            <p className="hero-desc" style={{ maxWidth: 600, margin: '1rem auto 0' }}>{t('Pilih paket yang sesuai kebutuhan. Semua paket disusun dengan biaya transparan dan sesi revisi sesuai scope pengerjaan.', 'Choose the package that fits your needs. Every package is structured with transparent pricing and revision sessions based on the project scope.')}</p>
          </div>
          <div className={`pricing-comparison fade-up${vis ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="comparison-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span dangerouslySetInnerHTML={{ __html: t('Lebih hemat hingga <strong>70%</strong> dibanding jasa agency besar', 'Save up to <strong>70%</strong> compared to big agency services') }} />
            </div>
          </div>
          <div className={`intro-pricing-banner fade-up${vis ? ' visible' : ''}`}>
            <div className="intro-pricing-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div className="intro-pricing-body">
              <span className="intro-pricing-title">{t('Harga Intro Terbatas', 'Limited Intro Pricing')}</span>
              <p className="intro-pricing-desc">{t('Berlaku untuk 5 klien pertama per paket. Setelah slot penuh, harga kembali normal.', 'Valid for the first 5 clients per package. Once slots are full, prices return to normal.')}</p>
              <div className="intro-pricing-slots">
                <div className="slot-bar">
                  <div className="slot-bar-fill" style={{ width: '57%' }}></div>
                </div>
                <span className="slot-text">{t('4 dari 7 slot terisi', '4 of 7 slots filled')}</span>
              </div>
            </div>
          </div>
          <div className={`pricing-grid${vis ? ' visible' : ''}`}>
            {packages.map((pkg, i) => (
              <div className={`pricing-card fade-up${vis ? ' visible' : ''}${pkg.featured ? ' is-featured' : ''}`} key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                {pkg.featured && <span className="card-badge">POPULAR</span>}
                <span className="card-number">{pkg.num}</span>
                <h3 className="card-title">{pkg.name}</h3>
                <div className="card-price">
                  {pkg.price}
                  {pkg.originalPrice && <span className="card-original-price">{pkg.originalPrice}</span>}
                </div>
                <span className="card-price-fix">{pkg.priceFix ? t('Harga Fix', 'Fixed Price') : 'Custom Scope'}</span>
                <p className="card-desc">{t(pkg.desc.id, pkg.desc.en)}</p>
                <ul className="card-features">
                  {pkg.features.map((f, j) => <li key={j}>{t(f.id, f.en)}</li>)}
                </ul>
                <div className="card-actions">
                  <a href={pkg.wa} className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>{t('Pilih Paket', 'Choose Plan')}</a>
                </div>
              </div>
            ))}
          </div>
          <div className={`guarantee-badge fade-up${vis ? ' visible' : ''}`} style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <div className="guarantee-card">
              <div className="guarantee-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <div className="guarantee-text">
                <strong>{t('Proses Revisi yang Jelas', 'Clear Revision Process')}</strong>
                <p>{t('Setiap paket mencakup sesi revisi pada tahap desain dan penyempurnaan konten sesuai scope proyek.', 'Each package includes revision sessions for design and content refinement according to the project scope.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
