'use client';

import Link from 'next/link';
import Portfolio from '@/components/sections/Portfolio';
import FinalCTA from '@/components/sections/FinalCTA';
import { useLang } from '@/hooks/useLanguage';

const featureCards = [
  {
    title: ['SEO Ready', 'SEO Ready'],
    desc: ['Optimasi agar website mudah ditemukan di Google', 'Optimization that helps your website get found on Google'],
    icon: (
      <>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </>
    ),
  },
  {
    title: ['WhatsApp', 'WhatsApp'],
    desc: ['Integrasi langsung dengan WhatsApp Business', 'Direct integration with WhatsApp Business'],
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>,
  },
  {
    title: ['Responsive', 'Responsive'],
    desc: ['Tampilan sempurna di semua ukuran layar', 'A polished experience across all screen sizes'],
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </>
    ),
  },
  {
    title: ['Performa Cepat', 'Fast Performance'],
    desc: ['Loading super cepat untuk pengalaman terbaik', 'Fast loading for a better user experience'],
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>,
  },
  {
    title: ['SSL Security', 'SSL Security'],
    desc: ['Sertifikat SSL gratis untuk keamanan data', 'Free SSL certificate for better data security'],
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
  },
  {
    title: ['Analytics', 'Analytics'],
    desc: ['Pantau performa website dengan Google Analytics', 'Track website performance with Google Analytics'],
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>,
  },
];

export default function KeunggulanContent() {
  const { t } = useLang();

  return (
    <>
      <section className="section keunggulan-hero">
        <div className="container">
          <div className="fade-up visible" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="section-label">{t('Mengapa Menata Web', 'Why Menata Web')}</div>
            <h1 className="text-h1">
              {t('Bukan Sekadar Vendor.', 'Not Just a Vendor.')}
              <br />
              <span className="text-gradient">{t('Kami Partner Digital Anda.', 'We Are Your Digital Partner.')}</span>
            </h1>
            <p className="hero-desc" style={{ marginTop: '1.25rem' }}>
              {t(
                'Kami mengedepankan desain berkualitas, fitur lengkap, dan proses yang jelas. Fokus kami bukan hanya website yang terlihat bagus, tetapi aset digital yang benar-benar membantu bisnis Anda tumbuh.',
                'We focus on quality design, complete features, and a clear process. Our goal is not just a good-looking website, but a digital asset that genuinely helps your business grow.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container">
          <div className="keunggulan-stats fade-up visible">
            {[
              ['50+', 'Bisnis Terbantu', 'Businesses Supported'],
              ['1x24', 'Respon Awal', 'Initial Response'],
              ['7+', 'Industri Dilayani', 'Industries Served'],
              ['14', 'Hari Rata-rata Selesai', 'Average Delivery Days'],
            ].map(([num, idLabel, enLabel]) => (
              <div className="keunggulan-stat" key={idLabel}>
                <span className="keunggulan-stat-number">{num}</span>
                <span className="keunggulan-stat-label">{t(idLabel, enLabel)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-block fade-up visible">
            <div className="feature-block-text">
              <div className="section-label">{t('Desain Premium', 'Premium Design')}</div>
              <h2 className="text-h2">
                {t('Desain yang Membuat Bisnis Anda Terlihat ', 'Design That Makes Your Business Look ')}
                <span className="text-gradient">{t('Profesional & Terpercaya', 'Professional & Trustworthy')}</span>
              </h2>
              <p>
                {t(
                  'Kami tidak menggunakan template murahan. Setiap website dirancang custom mengikuti karakter brand Anda: modern, bersih, dan relevan. Pengunjung langsung menangkap kesan profesional sejak kunjungan pertama.',
                  'We do not rely on cheap templates. Every website is custom-designed around your brand character: modern, clean, and relevant. Visitors immediately get a professional first impression.'
                )}
              </p>
              <ul className="feature-checklist">
                {[
                  ['Desain custom, bukan template', 'Custom design, not a template'],
                  ['Responsive di semua device', 'Responsive across all devices'],
                  ['Loading cepat dan struktur rapi', 'Fast loading with clean structure'],
                  ['Visual yang mendukung kepercayaan brand', 'Visual direction that supports brand trust'],
                ].map(([idText, enText]) => (
                  <li key={idText}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {t(idText, enText)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-block-images">
              <div className="illust-browser" style={{ animation: 'float-gentle 6s ease-in-out infinite' }}>
                <div className="browser-toolbar">
                  <div className="browser-dots">
                    <span className="dot-red"></span>
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                  </div>
                  <div className="browser-address-bar">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span>bisnisanda.com</span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="mock-nav">
                    <div className="mock-logo"></div>
                    <div className="mock-nav-links">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mock-hero">
                    <div className="mock-hero-text">
                      <div className="mock-heading"></div>
                      <div className="mock-heading short"></div>
                      <div className="mock-desc"></div>
                      <div className="mock-desc short"></div>
                      <div className="mock-btns">
                        <div className="mock-btn-primary"></div>
                        <div className="mock-btn-outline"></div>
                      </div>
                    </div>
                    <div className="mock-hero-img"></div>
                  </div>
                  <div className="mock-stats-row">
                    <div className="mock-stat"></div>
                    <div className="mock-stat"></div>
                    <div className="mock-stat"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="feature-block feature-block-reverse fade-up visible">
            <div className="feature-block-text">
              <div className="section-label">{t('Fitur Lengkap', 'Complete Features')}</div>
              <h2 className="text-h2">
                {t('Semua Fitur yang Bisnis Anda Butuhkan, ', 'Everything Your Business Needs, ')}
                <span className="text-gradient">{t('Sudah Termasuk', 'Already Included')}</span>
              </h2>
              <p>
                {t(
                  'Tidak perlu biaya tambahan untuk elemen penting. Dari SEO dasar, integrasi WhatsApp, sampai analytics dan struktur responsive, semuanya disiapkan agar website bekerja sebagai alat bisnis, bukan sekadar pajangan.',
                  'You do not need extra fees for essential elements. From basic SEO and WhatsApp integration to analytics and responsive structure, everything is prepared so the website works as a business tool, not just a display.'
                )}
              </p>
              <div className="feature-grid-mini">
                {featureCards.map((feature) => (
                  <div className="feature-mini-card" key={feature.title[0]}>
                    <div className="feature-mini-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {feature.icon}
                      </svg>
                    </div>
                    <h5>{t(feature.title[0], feature.title[1])}</h5>
                    <p>{t(feature.desc[0], feature.desc[1])}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-block-images">
              <div className="illust-devices" style={{ animation: 'float-gentle 6s ease-in-out infinite', animationDelay: '-2s' }}>
                <div className="illust-laptop">
                  <div className="illust-laptop-screen">
                    <div className="mock-nav" style={{ marginBottom: '0.75rem' }}>
                      <div className="mock-logo"></div>
                      <div className="mock-nav-links">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <div style={{ flex: 1, height: 40, borderRadius: 6, background: 'linear-gradient(135deg, rgba(24,33,245,0.06), rgba(23,122,244,0.1))' }}></div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <div style={{ height: 8, borderRadius: 3, background: 'var(--color-bg-dark)', width: '90%' }}></div>
                        <div style={{ height: 6, borderRadius: 3, background: 'var(--color-border)', width: '100%' }}></div>
                        <div style={{ height: 6, borderRadius: 3, background: 'var(--color-border)', width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="illust-laptop-base"></div>
                </div>
                <div className="illust-phone">
                  <div className="illust-phone-notch"></div>
                  <div style={{ padding: 6 }}>
                    <div style={{ height: 30, borderRadius: 4, background: 'linear-gradient(135deg, rgba(24,33,245,0.08), rgba(23,122,244,0.12))', marginBottom: 6 }}></div>
                    <div style={{ height: 5, borderRadius: 2, background: 'var(--color-bg-dark)', width: '80%', marginBottom: 4 }}></div>
                    <div style={{ height: 4, borderRadius: 2, background: 'var(--color-border)', width: '90%', marginBottom: 3 }}></div>
                    <div style={{ height: 4, borderRadius: 2, background: 'var(--color-border)', width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-block fade-up visible">
            <div className="feature-block-text">
              <div className="section-label">{t('Harga Terjangkau', 'Accessible Pricing')}</div>
              <h2 className="text-h2">
                {t('Website Profesional Tidak Harus Mahal.', 'A Professional Website Does Not Have to Be Expensive.')}
                <br />
                <span className="text-gradient">{t('Mulai dari Rp 750.000', 'Starting from Rp 750,000')}</span>
              </h2>
              <p>
                {t(
                  'Kami percaya bisnis yang serius butuh website berkualitas tanpa proses yang rumit dan biaya yang tidak jelas. Harga kami transparan, scope dibahas di awal, dan komunikasi berlangsung langsung.',
                  'We believe serious businesses need quality websites without complicated processes or vague pricing. Our pricing is transparent, scope is discussed up front, and communication stays direct.'
                )}
              </p>
              <div className="price-compare-cards">
                <div className="price-compare-card price-compare-other">
                  <h5>{t('Agency Besar', 'Large Agency')}</h5>
                  <span className="price-compare-amount">Rp 5–50 Juta</span>
                  <ul>
                    <li>{t('Timeline 1-3 bulan', 'Timeline 1-3 months')}</li>
                    <li>{t('Biaya revisi tambahan', 'Extra revision costs')}</li>
                    <li>{t('Komunikasi formal & lambat', 'Formal and slower communication')}</li>
                  </ul>
                </div>
                <div className="price-compare-card price-compare-us">
                  <div className="price-compare-badge">Menata Web</div>
                  <span className="price-compare-amount">Rp 750rb–8 Juta</span>
                  <ul>
                    <li>{t('Selesai 7-14 hari', 'Delivered in 7-14 days')}</li>
                    <li>{t('Sesi revisi sesuai scope proyek', 'Revision rounds within project scope')}</li>
                    <li>{t('Komunikasi langsung via WA', 'Direct communication via WhatsApp')}</li>
                  </ul>
                </div>
              </div>
              <Link href="/pricing" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                {t('Lihat Paket Harga →', 'See Pricing Packages →')}
              </Link>
            </div>
            <div className="feature-block-images">
              <div className="illust-pricing-visual" style={{ animation: 'float-gentle 6s ease-in-out infinite', animationDelay: '-4s' }}>
                <div className="illust-price-card">
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
                    {t('Bisnis Friendly', 'Business Friendly')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 28, fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      750rb
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{t('/paket', '/package')}</span>
                  </div>
                </div>
                <div className="illust-chart">
                  <div className="illust-chart-bar" style={{ height: '30%' }}></div>
                  <div className="illust-chart-bar" style={{ height: '50%' }}></div>
                  <div className="illust-chart-bar" style={{ height: '70%' }}></div>
                  <div className="illust-chart-bar illust-chart-bar-active" style={{ height: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="feature-block feature-block-reverse fade-up visible">
            <div className="feature-block-text">
              <div className="section-label">{t('Partner Jangka Panjang', 'Long-Term Partnership')}</div>
              <h2 className="text-h2">
                {t('Kami Tidak Selesai Setelah Website Jadi.', 'We Do Not Stop Once the Website Goes Live.')}
                <br />
                <span className="text-gradient">{t('Kami Tumbuh Bersama Anda.', 'We Grow Alongside You.')}</span>
              </h2>
              <p>
                {t(
                  'Setelah website live, kami tetap bisa membantu maintenance, update konten, optimasi performa, dan konsultasi digital. Tujuannya bukan hanya launch cepat, tetapi menjaga website tetap relevan saat bisnis Anda berkembang.',
                  'After launch, we can still help with maintenance, content updates, performance optimization, and digital consultation. The goal is not just a fast launch, but keeping the website relevant as your business evolves.'
                )}
              </p>
              <div className="partner-timeline">
                {[
                  ['Bulan 1: Launch', 'Bulan 1: Launch', 'Website jadi dan live. Training admin untuk kelola konten sendiri.', 'Website is completed and live. Admin training is provided for self-managed updates.'],
                  ['Bulan 2-6: Growth', 'Month 2-6: Growth', 'Monitoring performa, optimasi SEO, dan update konten berkala.', 'Performance monitoring, SEO optimization, and periodic content updates.'],
                  ['Bulan 6+: Scale', 'Month 6+: Scale', 'Ekspansi fitur, integrasi tools baru, dan konsultasi strategi digital.', 'Feature expansion, new tool integrations, and digital strategy consultation.'],
                ].map(([idTitle, enTitle, idDesc, enDesc]) => (
                  <div className="partner-step" key={idTitle}>
                    <div className="partner-step-dot"></div>
                    <div className="partner-step-content">
                      <h5>{t(idTitle, enTitle)}</h5>
                      <p>{t(idDesc, enDesc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-block-images">
              <div className="illust-dashboard" style={{ animation: 'float-gentle 6s ease-in-out infinite', animationDelay: '-3s' }}>
                <div className="illust-dash-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA41' }}></div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-primary)' }}>{t('Website Live', 'Website Live')}</span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>24/7 Active</div>
                </div>
                <div className="illust-dash-content">
                  <div className="illust-dash-chart"></div>
                  <div className="illust-dash-stats">
                    <div className="illust-dash-stat"></div>
                    <div className="illust-dash-stat"></div>
                    <div className="illust-dash-stat"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <FinalCTA />
    </>
  );
}
