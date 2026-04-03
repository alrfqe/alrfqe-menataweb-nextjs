import type { Metadata } from 'next';
import KontakContent from './KontakContent';
import { buildPageMetadata } from '@/site/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Konsultasi Website | Menata Web',
  description:
    'Konsultasi website bersama Menata Web. Ceritakan kebutuhan bisnis Anda dan tim kami akan menyiapkan rekomendasi solusi, estimasi, dan langkah pengerjaan berikutnya.',
  path: '/kontak',
  openGraphDescription:
    'Hubungi Menata Web untuk diskusi kebutuhan website bisnis Anda secara lebih terarah dan profesional.',
});

export default function KontakPage() { return <KontakContent />; }
