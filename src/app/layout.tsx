import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './reset.css';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';
import { siteConfig } from '@/site/config';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Menataweb - Next Level Digital Experience & Development Agency',
  description: siteConfig.description,
  keywords: 'jasa pembuatan website, website UMKM, jasa website profesional, website company profile, landing page bisnis, jasa website Indonesia, Menata Web',
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/`,
    title: 'Menataweb - Next Level Digital Experience & Development Agency',
    description: siteConfig.ogDescription,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menataweb - Next Level Digital Experience & Development Agency',
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImage],
  },
  icons: { icon: '/logo/logo_new_icon.svg' },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' as const, 'max-video-preview': -1 },
  other: {
    'geo.region': 'ID-YO',
    'geo.placename': `${siteConfig.city}, Indonesia`,
    'geo.position': '-7.7956;110.3695',
    'ICBM': '-7.7956, 110.3695',
    'theme-color': '#FFFFFF',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
