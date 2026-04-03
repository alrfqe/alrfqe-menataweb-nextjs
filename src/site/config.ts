export const siteConfig = {
  name: 'Menata Web',
  url: 'https://menataweb.com',
  defaultLocale: 'id-ID',
  locale: 'id_ID',
  description:
    'Menata Web membantu UMKM dan bisnis berkembang memiliki website profesional yang responsif, SEO-ready, dan siap digunakan untuk memperkuat kredibilitas serta menghasilkan inquiry.',
  ogDescription:
    'Website profesional untuk UMKM dan bisnis berkembang dengan desain custom, struktur jelas, dan optimasi dasar untuk pencarian Google.',
  ogImage: '/assets/images/og-image.png',
  phone: '+6285726061384',
  email: 'hello@menataweb.com',
  city: 'Yogyakarta',
  region: 'Daerah Istimewa Yogyakarta',
  countryCode: 'ID',
  themeColor: '#1821F5',
} as const;

export const staticRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/keunggulan', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/produk', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/kontak', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/artikel', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/kebijakan-privasi', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/syarat-ketentuan', changeFrequency: 'yearly', priority: 0.3 },
] as const;

export function absoluteUrl(path: string) {
  if (path === '/') return `${siteConfig.url}/`;
  return `${siteConfig.url}${path}`;
}
