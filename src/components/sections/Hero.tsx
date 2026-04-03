'use client';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

export default function Hero() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid" ref={ref}>
          <div className="hero-content">
            <div className={`section-label fade-up${vis ? ' visible' : ''}`}>
              <span className="label-dot"></span>
              {t('The next level digital experience', 'The next level digital experience')}
            </div>
            <h1 className={`text-h1 fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.05s' }}>
              {t('Website profesional yang ', 'A professional website that ')}
              <span className="text-gradient">{t('benar-benar bekerja', 'truly works')}</span>
              {t(' untuk bisnis Anda.', ' for your business.')}
            </h1>
            <p className={`hero-desc fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.1s' }}>
              {t(
                'Website profesional yang bekerja untuk bisnis Anda. UI/UX modern, teknologi terbaru, dan sistem custom untuk meningkatkan visibilitas dan menghasilkan pelanggan. Cepat. SEO-ready. Fokus pada hasil.',
                'A professional website that works for your business. Modern UI/UX, up-to-date technology, and custom systems built to increase visibility and generate customers. Fast. SEO-ready. Focused on results.'
              )}
            </p>
            <div className={`hero-cta-group fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.15s' }}>
              <Link href="/kontak" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                {t('Konsultasi Gratis', 'Free Consultation')}
              </Link>
              <a href="#pricing" className="btn btn-outline btn-lg">{t('Lihat Paket', 'View Packages')}</a>
            </div>
            {/* Social Proof */}
            <div className={`hero-social-proof fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.2s' }}>
              <div className="hero-avatars">
                <div className="avatar" style={{ background: 'var(--gradient-primary)', color: '#fff' }}>S</div>
                <div className="avatar" style={{ background: '#177AF4', color: '#fff' }}>C</div>
                <div className="avatar" style={{ background: '#1821F5', color: '#fff' }}>A</div>
                <div className="avatar" style={{ background: '#177AF4', color: '#fff' }}>K</div>
              </div>
              <div className="hero-social-text">
                <div className="hero-rating">{t('Custom-Built', 'Custom-Built')} <strong>{t('+ SEO-Ready', '+ SEO-Ready')}</strong></div>
                <span>{t('untuk bisnis yang ingin tampil lebih kuat, kredibel, dan siap berkembang', 'for businesses that need stronger presence, credibility, and growth readiness')}</span>
              </div>
            </div>
            {/* Trust Badges */}
            <div className={`hero-trust-badges fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.25s' }}>
              {[
                [t('Gratis Konsultasi', 'Free Consultation')],
                [t('Tanpa Biaya Tersembunyi', 'No Hidden Fees')],
                [t('Garansi Revisi', 'Revision Guarantee')],
              ].map(([label], i) => (
                <span className="trust-badge" key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
          {/* Hero Visual - Browser Mockup */}
          <div className={`hero-visual fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.25s' }}>
            <div className="hero-browser-mockup">
              <div className="browser-toolbar">
                <div className="browser-dots"><span className="dot-red"></span><span className="dot-yellow"></span><span className="dot-green"></span></div>
                <div className="browser-address-bar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>bisnisanda.com</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="mock-nav"><div className="mock-logo"></div><div className="mock-nav-links"><span></span><span></span><span></span></div></div>
                <div className="mock-hero">
                  <div className="mock-hero-text">
                    <div className="mock-badge"></div><div className="mock-heading"></div><div className="mock-heading short"></div>
                    <div className="mock-desc"></div><div className="mock-desc short"></div>
                    <div className="mock-btns"><div className="mock-btn-primary"></div><div className="mock-btn-outline"></div></div>
                  </div>
                  <div className="mock-hero-img"></div>
                </div>
                <div className="mock-stats-row"><div className="mock-stat"></div><div className="mock-stat"></div><div className="mock-stat"></div></div>
              </div>
            </div>
            {/* Floating Stat Cards */}
            {[
              { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>, num: '50+', label: t('Project Website', 'Website Projects') },
              { icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />, num: '1x24', label: t('Respon Awal', 'Initial Response') },
              { icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>, num: t('14 Hari', '14 Days'), label: t('Rata-rata Selesai', 'Avg. Completion') },
            ].map((s, i) => (
              <div className="hero-float-card hero-stat-card" key={i}>
                <div className="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg></div>
                <div className="stat-content"><span className="stat-number">{s.num}</span><span className="stat-label">{s.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
