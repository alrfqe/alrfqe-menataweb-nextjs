export type PortfolioType = 'portfolio' | 'desain';

export type PortfolioCategory =
  | 'corporate'
  | 'wisata'
  | 'travel'
  | 'hospitality'
  | 'fnb'
  | 'retail'
  | 'properti'
  | 'pendidikan'
  | 'kesehatan'
  | 'other';

export const categoryLabels: Record<string, { id: string; en: string }> = {
  corporate:   { id: 'Corporate',         en: 'Corporate'       },
  wisata:      { id: 'Wisata',            en: 'Tourism'         },
  travel:      { id: 'Travel',            en: 'Travel'          },
  hospitality: { id: 'Hospitality',       en: 'Hospitality'     },
  fnb:         { id: 'F&B',              en: 'F&B'             },
  retail:      { id: 'Retail',            en: 'Retail'          },
  properti:    { id: 'Properti',          en: 'Property'        },
  pendidikan:  { id: 'Pendidikan',        en: 'Education'       },
  kesehatan:   { id: 'Kesehatan',         en: 'Healthcare'      },
  other:       { id: 'Lainnya',           en: 'Other'           },
};

export type PortfolioItem = {
  id: string;
  order: number;
  type: PortfolioType;
  category: string;
  title: string;
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
    type: 'portfolio',
    category: 'wisata',
    title: 'Desa Wisata Kawidasri',
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
    type: 'portfolio',
    category: 'corporate',
    title: 'Clavin Jaya Abadi',
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
    type: 'portfolio',
    category: 'travel',
    title: 'Armada Antar Lintas Nusa',
    client: 'Armada Antar Lintas Nusa',
    image: '/assets/images/portfolio_armada.png',
    imageAlt: 'Website Armada Antar Lintas Nusa',
    impact: { id: '+40% omzet, brand terlihat lebih terpercaya', en: '+40% revenue, brand looks more trustworthy' },
    url: 'https://armadaantarlintasnusa.id',
    featured: true,
  },
];
