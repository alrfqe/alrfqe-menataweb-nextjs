'use client';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

export default function Investment() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const features = [
    t('Harga fix','Fixed price'), t('Revisi sesuai scope','Scope-based revisions'),
    t('Gratis hosting & domain','Free hosting & domain'), t('Selesai 14 hari','Done in 14 days'),
  ];
  return (
    <section className="section" id="pricing" ref={ref}>
      <div className="container">
        <div className={`investment-banner fade-up${vis ? ' visible' : ''}`}>
          <div className="investment-content">
            <div className="section-label">{t('Investasi Terjangkau','Affordable Investment')}</div>
            <h2 className="text-h2">{t('Cukup ','Just ')}<span className="text-gradient">Rp 1.000.000</span>{t(' untuk Memulai Bisnis Online Anda',' to Start Your Online Business')}</h2>
            <p className="investment-desc">{t('Anda sudah selangkah lebih maju dari kompetitor. Website profesional yang siap konversi pengunjung jadi pelanggan — tanpa biaya tersembunyi, tanpa ribet.','You\'re already one step ahead of competitors. A professional website ready to convert visitors into customers — no hidden fees, no hassle.')}</p>
            <div className="investment-features">
              {features.map((f, i) => (
                <div className="investment-feature" key={i}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="investment-visual">
              <div className="investment-price-tag">
                <span className="price-tag-label">{t('Mulai dari','Starting from')}</span>
                <span className="price-tag-amount">Rp 1jt</span>
                <span className="price-tag-note">{t('• tanpa biaya tersembunyi','• no hidden fees')}</span>
              </div>
            </div>
            <div className="investment-cta">
              <Link href="/pricing" className="btn btn-primary btn-lg">{t('Lihat Semua Paket →','View All Packages →')}</Link>
              <a href="https://wa.me/6285726061384" className="btn btn-outline btn-lg">{t('Konsultasi Gratis','Free Consultation')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
