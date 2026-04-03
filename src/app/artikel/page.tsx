import type { Metadata } from 'next';
import ArtikelContent from './ArtikelContent';
import { buildPageMetadata } from '@/site/metadata';
import { getAllArticles, getFeaturedArticle } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Artikel Website, SEO, dan Digital Marketing | Menata Web',
  description:
    'Artikel praktis seputar website, SEO, branding, dan digital marketing untuk UMKM. Dibuat untuk membantu bisnis tampil lebih profesional dan mudah ditemukan online.',
  path: '/artikel',
  openGraphDescription: 'Panduan praktis Menata Web untuk website, SEO, branding, dan digital marketing UMKM.',
});

export default async function ArtikelPage() {
  const [articles, featuredArticle] = await Promise.all([getAllArticles(), getFeaturedArticle()]);
  return <ArtikelContent articles={articles} featuredArticle={featuredArticle} />;
}
