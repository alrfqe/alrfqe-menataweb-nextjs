import type { Metadata } from 'next';
import { buildPageMetadata } from '@/site/metadata';
import { getPortfolioItems } from '@/lib/content';
import PortfolioContent from './PortfolioContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Portofolio Website & Desain | Menata Web',
  description:
    'Lihat hasil karya Menata Web — website profesional dan desain branding untuk berbagai industri. Bukti nyata kualitas kerja kami.',
  path: '/portfolio',
  openGraphDescription:
    'Portofolio website dan desain Menata Web: hasil nyata untuk klien dari berbagai industri.',
});

export default async function PortfolioPage() {
  const items = await getPortfolioItems();
  return <PortfolioContent items={items} />;
}
