import type { Metadata } from 'next';
import KebijakanPrivasiContent from './KebijakanPrivasiContent';
import { buildPageMetadata } from '@/site/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kebijakan Privasi | Menata Web',
  description:
    'Kebijakan Privasi Menata Web yang menjelaskan jenis data yang dikumpulkan, tujuan penggunaan, dan cara kami menjaga informasi pengguna.',
  path: '/kebijakan-privasi',
  openGraphDescription: 'Informasi mengenai pengumpulan, penggunaan, dan perlindungan data oleh Menata Web.',
});

export default function KebijakanPrivasiPage() { return <KebijakanPrivasiContent />; }
