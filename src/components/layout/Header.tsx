'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/hooks/useLanguage';
import LangToggle from '@/components/ui/LangToggle';

export default function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const promoVisible = pathname === '/' && st <= 8;

      document.documentElement.dataset.mobilePromo = promoVisible ? 'visible' : 'hidden';
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', promoVisible ? '#1821F5' : '#FFFFFF');
      }

      if (st > last && st > 100) setHidden(true);
      else setHidden(false);
      last = st <= 0 ? 0 : st;
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      delete document.documentElement.dataset.mobilePromo;
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#FFFFFF');
      }
    };
  }, [pathname]);

  const closeMenu = () => { setMenuOpen(false); document.body.classList.remove('no-scroll'); };

  const toggleMenu = () => {
    setMenuOpen(o => {
      if (!o) document.body.classList.add('no-scroll');
      else document.body.classList.remove('no-scroll');
      return !o;
    });
  };

  return (
    <>
      <header className={`header${hidden ? ' hide' : ''}`}>
        <div className="container flex justify-between items-center">
          <Link href="/" className="logo"><Image src="/logo/logo_new_main.png" alt="MENATAWEB" className="logo-img" width={379} height={66} priority /></Link>
          <nav className="desktop-nav">
            <Link href="/keunggulan" className="nav-link">{t('Keunggulan', 'Why Us')}</Link>
            <Link href="/produk" className="nav-link">{t('Produk', 'Products')}</Link>
            <Link href="/pricing" className="nav-link">{t('Harga', 'Pricing')}</Link>
            <Link href="/artikel" className="nav-link">{t('Artikel', 'Articles')}</Link>
            <Link href="/#faq" className="nav-link">FAQ</Link>
            <Link href="/kontak" className="nav-link">{t('Kontak', 'Contact')}</Link>
          </nav>
          <div className="nav-right">
            <Link href="/kontak" className="nav-link nav-login">{t('Konsultasi', 'Consultation')}</Link>
            <LangToggle />
            <button className={`hamburger-btn${menuOpen ? ' active' : ''}`} aria-label="Menu" onClick={toggleMenu}>
              <span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <Link href="/keunggulan" className="mobile-nav-link" onClick={closeMenu}>{t('Keunggulan', 'Why Us')}</Link>
        <Link href="/produk" className="mobile-nav-link" onClick={closeMenu}>{t('Produk', 'Products')}</Link>
        <Link href="/pricing" className="mobile-nav-link" onClick={closeMenu}>{t('Harga', 'Pricing')}</Link>
        <Link href="/artikel" className="mobile-nav-link" onClick={closeMenu}>{t('Artikel', 'Articles')}</Link>
        <Link href="/#faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</Link>
        <Link href="/kontak" className="mobile-nav-link" onClick={closeMenu}>{t('Kontak', 'Contact')}</Link>
      </div>
    </>
  );
}
