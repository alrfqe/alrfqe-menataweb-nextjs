'use client';
import { LangProvider } from '@/hooks/useLanguage';
import PromoBanner from '@/components/layout/PromoBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith('/studio');

  return (
    <LangProvider>
      {isStudioRoute ? null : <PromoBanner />}
      {isStudioRoute ? null : <Header />}
      {children}
      {isStudioRoute ? null : <Footer />}
    </LangProvider>
  );
}
