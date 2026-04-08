import type { Metadata } from 'next';
import { buildPageMetadata } from '@/site/metadata';
import Portfolio from '@/components/sections/Portfolio';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = buildPageMetadata({
  title: 'Portofolio Website | Menata Web',
  description:
    'Lihat hasil karya Menata Web — website profesional untuk berbagai industri mulai dari pariwisata, B2B, hingga transportasi. Bukti nyata hasil kerja kami.',
  path: '/portfolio',
  openGraphDescription:
    'Portofolio website Menata Web: desain custom dan hasil nyata untuk klien dari berbagai industri.',
});

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <FinalCTA />
    </>
  );
}
