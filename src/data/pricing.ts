import type { LocalizedText } from '@/data/articles';

export type PricingPackage = {
  num: string;
  name: string;
  price: string;
  priceFix: boolean;
  desc: LocalizedText;
  featured: boolean;
  features: LocalizedText[];
  wa: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    num: '01',
    name: 'Basic',
    price: 'Rp 750 ribu',
    priceFix: true,
    desc: {
      id: 'Untuk UMKM yang baru mulai online.',
      en: 'For UMKM just starting online.',
    },
    featured: false,
    features: [
      { id: 'Landing Page Simple', en: 'Simple Landing Page' },
      { id: 'Gratis Hosting 1 Thn', en: 'Free Hosting 1 Year' },
      { id: 'Domain .com / .id', en: 'Domain .com / .id' },
      { id: 'SEO Dasar', en: 'Basic SEO' },
    ],
    wa: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20tertarik%20dengan%20paket%20Basic.',
  },
  {
    num: '02',
    name: 'Starter',
    price: 'Rp 1,5 juta',
    priceFix: true,
    desc: {
      id: 'Untuk UMKM yang ingin tampil profesional.',
      en: 'For UMKM wanting to look professional.',
    },
    featured: true,
    features: [
      { id: '5 Halaman Website', en: '5 Page Website' },
      { id: 'Desain Custom (Non-Template)', en: 'Custom Design (Non-Template)' },
      { id: 'Integrasi WhatsApp', en: 'WhatsApp Integration' },
      { id: 'Optimasi Speed & SEO', en: 'Speed & SEO Optimization' },
      { id: 'Free Hosting & Domain 1 Thn', en: 'Free Hosting & Domain 1 Year' },
    ],
    wa: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20tertarik%20dengan%20paket%20Starter.',
  },
  {
    num: '03',
    name: 'Growth',
    price: 'Rp 5 juta',
    priceFix: true,
    desc: {
      id: 'Untuk UMKM yang ingin mulai sistematis.',
      en: 'For UMKM wanting to become systematic.',
    },
    featured: false,
    features: [
      { id: '10 Halaman / Toko Online', en: '10 Pages / Online Store' },
      { id: 'Fitur E-commerce Dasar', en: 'Basic E-commerce Features' },
      { id: 'CMS (Platform Edit Sendiri)', en: 'CMS (Self-Edit Platform)' },
      { id: 'Google Business Profile', en: 'Google Business Profile' },
      { id: 'Training Admin Website', en: 'Website Admin Training' },
      { id: 'Free Hosting & Domain 1 Thn', en: 'Free Hosting & Domain 1 Year' },
    ],
    wa: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20tertarik%20dengan%20paket%20Growth.',
  },
  {
    num: '04',
    name: 'Premium',
    price: 'Mulai Rp 8 juta',
    priceFix: false,
    desc: {
      id: 'Bisnis berkembang yang butuh sistem lengkap.',
      en: 'Growing business that needs a complete system.',
    },
    featured: false,
    features: [
      { id: 'Custom Web App / Sistem Khusus', en: 'Custom Web App / Special System' },
      { id: 'Integrasi Payment Gateway', en: 'Payment Gateway Integration' },
      { id: 'Prioritas Support 24/7', en: '24/7 Priority Support' },
      { id: 'Maintenance Bulanan', en: 'Monthly Maintenance' },
      { id: 'Dedicated Server Setup', en: 'Dedicated Server Setup' },
    ],
    wa: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20untuk%20paket%20Premium.',
  },
];
