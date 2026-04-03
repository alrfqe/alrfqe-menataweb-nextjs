import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import { buildPageMetadata } from '@/site/metadata';
import { getPricingPackages } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Harga Jasa Pembuatan Website untuk UMKM | Menata Web',
  description:
    'Paket website untuk UMKM mulai Rp750.000. Pilihan landing page, company profile, toko online, hingga website custom dengan biaya transparan dan alur kerja yang jelas.',
  path: '/pricing',
  openGraphDescription:
    'Lihat paket website Menata Web untuk kebutuhan landing page, company profile, toko online, dan website custom.',
});

export default async function PricingPage() {
  const packages = await getPricingPackages();
  return <PricingContent packages={packages} />;
}
