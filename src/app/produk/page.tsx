import type { Metadata } from 'next';
import ProdukContent from './ProdukContent';
import { getProductSolutions } from '@/lib/content';
import { buildPageMetadata } from '@/site/metadata';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Produk Sistem Digital untuk Operasional Bisnis | Menata Web',
  description:
    'Lihat solusi sistem digital Menata Web mulai dari ERP, CRM, booking, inventory, hingga custom internal system yang dirancang sesuai alur bisnis Anda.',
  path: '/produk',
  openGraphDescription:
    'Temukan solusi ERP, CRM, reservasi, inventory, dan sistem custom yang dirancang untuk operasional bisnis yang lebih efisien.',
});

export default async function ProdukPage() {
  const products = await getProductSolutions();
  return <ProdukContent products={products} />;
}
