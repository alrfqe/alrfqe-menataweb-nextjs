'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mega-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo/logo_new_main.png" alt="MENATAWEB" className="logo-img" width={379} height={66} />
            <p>{t('Partner digital terpercaya untuk UMKM Indonesia.', 'Trusted digital partner for Indonesian MSMEs.')}</p>
          </div>
          <div className="footer-col">
            <h5>{t('Layanan', 'Services')}</h5>
            <ul>
              <li><Link href="/pricing">{t('Jasa Pembuatan Website', 'Website Development Service')}</Link></li>
              <li><Link href="/pricing">{t('Redesign Website', 'Website Redesign')}</Link></li>
              <li><Link href="/pricing">{t('Maintenance Website', 'Website Maintenance')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t('Perusahaan', 'Company')}</h5>
            <ul>
              <li><Link href="/#solusi">{t('Tentang Kami', 'About Us')}</Link></li>
              <li><Link href="/#process">{t('Cara Pesan', 'How to Order')}</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t('Kontak', 'Contact')}</h5>
            <ul>
              <li><a href="https://wa.me/6285726061384">WhatsApp</a></li>
              <li><a href="mailto:hello@menataweb.com">hello@menataweb.com</a></li>
              <li><span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-small)' }}>Yogyakarta, Indonesia</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© 2026 Menata Web. {t('Hak cipta dilindungi.', 'All rights reserved.')}</p>
          <div className="footer-bottom-links">
            <Link href="/kebijakan-privasi">{t('Kebijakan Privasi', 'Privacy Policy')}</Link>
            <Link href="/syarat-ketentuan">{t('Syarat & Ketentuan', 'Terms & Conditions')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
