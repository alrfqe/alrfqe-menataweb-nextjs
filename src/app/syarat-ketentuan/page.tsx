import type { Metadata } from 'next';
import SyaratKetentuanContent from './SyaratKetentuanContent';
import { buildPageMetadata } from '@/site/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Syarat & Ketentuan | Menata Web',
  description:
    'Syarat dan ketentuan penggunaan website serta layanan Menata Web, termasuk ruang lingkup pekerjaan, komunikasi, revisi, dan pembayaran.',
  path: '/syarat-ketentuan',
  openGraphDescription: 'Ketentuan umum penggunaan website dan layanan Menata Web.',
});

export default function SyaratKetentuanPage() { return <SyaratKetentuanContent />; }
