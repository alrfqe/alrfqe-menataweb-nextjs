import type { Metadata } from 'next';
import KeunggulanContent from './KeunggulanContent';
import { buildPageMetadata } from '@/site/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Keunggulan Menata Web | Website Profesional dengan Proses Jelas',
  description:
    'Pelajari alasan bisnis memilih Menata Web: desain custom, proses kerja terstruktur, optimasi SEO dasar, website responsif, dan pendampingan setelah launch.',
  path: '/keunggulan',
  openGraphDescription:
    'Menata Web menghadirkan desain custom, website responsif, dan alur pengerjaan yang terstruktur untuk UMKM dan bisnis berkembang.',
});

export default function KeunggulanPage() { return <KeunggulanContent />; }
