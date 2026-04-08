export type PortfolioCategory = 'website' | 'desain';

export type PortfolioItem = {
  id: string;
  order: number;
  title: string;
  category: PortfolioCategory;
  client?: string;
  image: string;
  imageAlt?: string;
  description?: { id: string; en: string };
  impact?: { id: string; en: string };
  url?: string;
  featured: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'kawidasri',
    order: 1,
    title: 'Desa Wisata Kawidasri',
    category: 'website',
    client: 'Desa Wisata Kawidasri',
    image: '/assets/images/portfolio_kawidasri.png',
    imageAlt: 'Website Desa Wisata Kawidasri',
    impact: { id: '+300% reservasi online, 15.000+ pengunjung/bulan', en: '+300% online reservations, 15,000+ visitors/month' },
    url: 'https://kawidasri.com',
    featured: true,
  },
  {
    id: 'clavin',
    order: 2,
    title: 'Clavin Jaya Abadi',
    category: 'website',
    client: 'Clavin Jaya Abadi',
    image: '/assets/images/portfolio_clavin.png',
    imageAlt: 'Website Clavin Jaya Abadi',
    impact: { id: '2x lipat inquiry, ekspansi pasar internasional', en: '2x inquiry increase, international market expansion' },
    url: 'https://clavinjayaabadi.id',
    featured: true,
  },
  {
    id: 'armada',
    order: 3,
    title: 'Armada Antar Lintas Nusa',
    category: 'website',
    client: 'Armada Antar Lintas Nusa',
    image: '/assets/images/portfolio_armada.png',
    imageAlt: 'Website Armada Antar Lintas Nusa',
    impact: { id: '+40% omzet, brand terlihat lebih terpercaya', en: '+40% revenue, brand looks more trustworthy' },
    url: 'https://armadaantarlintasnusa.id',
    featured: true,
  },
];
