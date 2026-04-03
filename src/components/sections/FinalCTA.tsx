'use client';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

export default function FinalCTA() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section section-dark" id="contact" ref={ref}>
      <div className="container">
        <div className={`final-cta fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Mulai Sekarang','Start Now')}</div>
          <h2 className="text-h2">{t('Siap Go Digital?','Ready to Go Digital?')}</h2>
          <p className="cta-desc">{t('Kami hanya menerima 5-7 proyek baru per bulan untuk menjaga kualitas. Ambil slot Anda sekarang sebelum penuh.','We only accept 5-7 new projects per month to maintain quality. Book your slot now before it\'s full.')}</p>
          <div className="final-cta-buttons">
            <a href="https://wa.me/6285726061384" className="btn btn-white btn-lg">{t('Hubungi via WhatsApp →','Contact via WhatsApp →')}</a>
            <Link href="/kontak" className="btn btn-ghost-white btn-lg">{t('Konsultasi Gratis','Free Consultation')}</Link>
          </div>
          <p className="trust-note">{t('Respon cepat dalam hitungan menit • Konsultasi awal GRATIS','Quick response in minutes • FREE initial consultation')}</p>
        </div>
      </div>
    </section>
  );
}
