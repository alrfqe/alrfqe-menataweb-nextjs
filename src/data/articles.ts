export type ArticleVisual =
  | 'website'
  | 'seo'
  | 'marketing'
  | 'responsive'
  | 'speed'
  | 'branding'
  | 'googleBusiness';

export type LocalizedText = {
  id: string;
  en: string;
};

export type ArticleSummary = {
  slug: string;
  route: string;
  featured?: boolean;
  showOnHome?: boolean;
  category: {
    slug: 'website' | 'seo' | 'bisnis' | 'tips';
    id: string;
    en: string;
  };
  date: {
    iso: string;
    id: string;
    en: string;
  };
  readTime: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  homeExcerpt?: LocalizedText;
  visual: ArticleVisual;
};

export const articles: ArticleSummary[] = [
  {
    slug: 'kenapa-umkm-harus-punya-website',
    route: '/artikel/kenapa-umkm-harus-punya-website',
    featured: true,
    category: { slug: 'website', id: 'Website', en: 'Website' },
    date: { iso: '2026-02-15', id: '15 Feb 2026', en: 'Feb 15, 2026' },
    readTime: { id: '8 min baca', en: '8 min read' },
    title: {
      id: 'Kenapa UMKM Harus Punya Website di 2026? Ini 7 Alasannya',
      en: 'Why Should MSMEs Have a Website in 2026? Here Are 7 Reasons',
    },
    excerpt: {
      id: 'Di era digital, website bukan lagi kemewahan tapi kebutuhan. Pelajari mengapa bisnis Anda perlu hadir online dan bagaimana website profesional bisa meningkatkan kredibilitas serta penjualan.',
      en: 'In the digital era, a website is no longer a luxury but a necessity. Learn why your business needs to be online and how a professional website can boost credibility and sales.',
    },
    visual: 'website',
  },
  {
    slug: 'seo-dasar-untuk-pemula',
    route: '/artikel/seo-dasar-untuk-pemula',
    showOnHome: true,
    category: { slug: 'seo', id: 'SEO', en: 'SEO' },
    date: { iso: '2026-02-12', id: '12 Feb 2026', en: 'Feb 12, 2026' },
    readTime: { id: '8 min baca', en: '8 min read' },
    title: {
      id: 'SEO Dasar untuk Pemula: Panduan Lengkap 2026',
      en: 'Basic SEO for Beginners: Complete Guide 2026',
    },
    excerpt: {
      id: 'Pelajari fondasi SEO yang harus dikuasai setiap pemilik website. Dari riset keyword hingga optimasi on-page.',
      en: 'Learn the SEO foundations every website owner must master. From keyword research to on-page optimization.',
    },
    homeExcerpt: {
      id: 'Pelajari fondasi SEO yang harus dikuasai setiap pemilik website.',
      en: 'Learn the SEO foundations every website owner must master.',
    },
    visual: 'seo',
  },
  {
    slug: 'strategi-digital-marketing-umkm',
    route: '/artikel/strategi-digital-marketing-umkm',
    showOnHome: true,
    category: { slug: 'bisnis', id: 'Bisnis', en: 'Business' },
    date: { iso: '2026-02-10', id: '10 Feb 2026', en: 'Feb 10, 2026' },
    readTime: { id: '7 min baca', en: '7 min read' },
    title: {
      id: '5 Strategi Digital Marketing untuk UMKM dengan Budget Minim',
      en: '5 Digital Marketing Strategies for MSMEs on a Budget',
    },
    excerpt: {
      id: 'Tidak perlu budget besar untuk marketing digital yang efektif. Simak strategi terbukti yang bisa langsung Anda terapkan.',
      en: 'You do not need a huge budget for effective digital marketing. Check out proven strategies you can apply right away.',
    },
    homeExcerpt: {
      id: 'Tidak perlu budget besar untuk marketing digital yang efektif.',
      en: 'You do not need a huge budget for effective digital marketing.',
    },
    visual: 'marketing',
  },
  {
    slug: 'website-responsif-mobile-first',
    route: '/artikel/website-responsif-mobile-first',
    showOnHome: true,
    category: { slug: 'website', id: 'Website', en: 'Website' },
    date: { iso: '2026-02-08', id: '8 Feb 2026', en: 'Feb 8, 2026' },
    readTime: { id: '6 min baca', en: '6 min read' },
    title: {
      id: 'Website Responsif: Kenapa Desain Mobile-First Itu Penting?',
      en: 'Responsive Website: Why Mobile-First Design Matters?',
    },
    excerpt: {
      id: '70% pengunjung website datang dari HP. Pastikan website Anda tampil sempurna di semua perangkat.',
      en: '70% of website visitors come from mobile. Make sure your website looks perfect on all devices.',
    },
    visual: 'responsive',
  },
  {
    slug: 'kecepatan-website',
    route: '/artikel/kecepatan-website',
    category: { slug: 'tips', id: 'Tips', en: 'Tips' },
    date: { iso: '2026-02-05', id: '5 Feb 2026', en: 'Feb 5, 2026' },
    readTime: { id: '7 min baca', en: '7 min read' },
    title: {
      id: 'Cara Meningkatkan Kecepatan Website Hingga 3x Lipat',
      en: 'How to Boost Your Website Speed Up to 3x',
    },
    excerpt: {
      id: 'Website lambat = kehilangan pelanggan. Terapkan 10 teknik optimasi performa ini untuk loading super cepat.',
      en: 'Slow website = lost customers. Apply these 10 performance optimization techniques for super fast loading.',
    },
    visual: 'speed',
  },
  {
    slug: 'branding-umkm',
    route: '/artikel/branding-umkm',
    category: { slug: 'bisnis', id: 'Bisnis', en: 'Business' },
    date: { iso: '2026-02-02', id: '2 Feb 2026', en: 'Feb 2, 2026' },
    readTime: { id: '6 min baca', en: '6 min read' },
    title: {
      id: 'Branding UMKM: Cara Membangun Identitas Visual yang Kuat',
      en: 'MSME Branding: How to Build a Strong Visual Identity',
    },
    excerpt: {
      id: 'Logo, warna, tipografi, semua harus konsisten. Pelajari cara membangun brand yang diingat pelanggan.',
      en: 'Logo, colors, and typography all need to stay consistent. Learn how to build a brand customers remember.',
    },
    visual: 'branding',
  },
  {
    slug: 'google-business-profile',
    route: '/artikel/google-business-profile',
    category: { slug: 'seo', id: 'SEO', en: 'SEO' },
    date: { iso: '2026-01-30', id: '30 Jan 2026', en: 'Jan 30, 2026' },
    readTime: { id: '6 min baca', en: '6 min read' },
    title: {
      id: 'Google Business Profile: Cara Gratis Tampil di Halaman Pertama Google',
      en: "Google Business Profile: A Free Way to Appear on Google's First Page",
    },
    excerpt: {
      id: 'Optimalkan Google Business Profile Anda untuk mendapat lebih banyak pelanggan lokal secara gratis.',
      en: 'Optimize your Google Business Profile to gain more local customers for free.',
    },
    visual: 'googleBusiness',
  },
];

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article])
) as Record<string, ArticleSummary>;

export const homeArticles = articles.filter((article) => article.showOnHome);
export const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
