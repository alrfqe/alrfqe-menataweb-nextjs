'use client';
import { useLang } from '@/hooks/useLanguage';

export default function PromoBanner() {
  const { t } = useLang();
  return (
    <div className="promo-banner" id="promo-banner">
      <div className="container">
        <p>
          <span>{t('Konsultasi Gratis', 'Free Consultation')}</span>
          <a href="/kontak" className="promo-banner-link">{t('Hubungi Kami →', 'Contact Us →')}</a>
        </p>
      </div>
    </div>
  );
}
