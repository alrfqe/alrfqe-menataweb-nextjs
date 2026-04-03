import type { LocalizedText } from '@/data/articles';

export type ProductVisual = 'erp' | 'crm' | 'booking' | 'inventory' | 'portal' | 'custom';

export type ProductImage = {
  url: string;
  alt?: string;
};

export type ProductSolution = {
  slug: string;
  order: number;
  featured?: boolean;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  idealFor: LocalizedText;
  features: LocalizedText[];
  visual: ProductVisual;
  image?: ProductImage;
  ctaUrl: string;
};

export const productSolutions: ProductSolution[] = [
  {
    slug: 'erp-operasional',
    order: 1,
    featured: true,
    category: { id: 'ERP', en: 'ERP' },
    title: {
      id: 'ERP Operasional untuk Proses Bisnis yang Lebih Terkendali',
      en: 'Operational ERP for Better-Controlled Business Processes',
    },
    summary: {
      id: 'Sistem terintegrasi untuk memantau alur penjualan, operasional, keuangan, dan laporan dalam satu dashboard yang rapi.',
      en: 'An integrated system to monitor sales, operations, finance, and reporting in one clean dashboard.',
    },
    idealFor: {
      id: 'Cocok untuk bisnis yang mulai punya banyak proses manual dan ingin bekerja lebih cepat tanpa data tercecer.',
      en: 'Ideal for businesses that are outgrowing manual processes and want faster work without scattered data.',
    },
    features: [
      { id: 'Dashboard multi-divisi', en: 'Multi-division dashboard' },
      { id: 'Monitoring transaksi dan approval', en: 'Transaction and approval monitoring' },
      { id: 'Laporan operasional real-time', en: 'Real-time operational reporting' },
      { id: 'Hak akses sesuai peran tim', en: 'Role-based team access' },
    ],
    visual: 'erp',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20ERP%20operasional.',
  },
  {
    slug: 'crm-penjualan',
    order: 2,
    category: { id: 'CRM', en: 'CRM' },
    title: {
      id: 'CRM Penjualan untuk Follow-Up Lead yang Lebih Rapi',
      en: 'Sales CRM for Cleaner Lead Follow-Ups',
    },
    summary: {
      id: 'Kelola prospek, pipeline, histori komunikasi, dan tugas sales dari satu sistem yang mudah dipakai tim Anda.',
      en: 'Manage prospects, pipelines, communication history, and sales tasks from one system your team can use easily.',
    },
    idealFor: {
      id: 'Ideal untuk tim sales, marketing, atau owner yang ingin memastikan lead tidak hilang di tengah jalan.',
      en: 'Ideal for sales teams, marketing teams, or owners who want to make sure no lead slips through the cracks.',
    },
    features: [
      { id: 'Pipeline lead dan status deal', en: 'Lead pipeline and deal status' },
      { id: 'Riwayat follow-up pelanggan', en: 'Customer follow-up history' },
      { id: 'Reminder dan assignment tim', en: 'Team reminders and assignments' },
      { id: 'Laporan performa penjualan', en: 'Sales performance reports' },
    ],
    visual: 'crm',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20CRM%20penjualan.',
  },
  {
    slug: 'booking-reservasi',
    order: 3,
    category: { id: 'Reservasi', en: 'Reservations' },
    title: {
      id: 'Sistem Booking & Reservasi untuk Layanan yang Lebih Efisien',
      en: 'Booking & Reservation System for More Efficient Service',
    },
    summary: {
      id: 'Atur jadwal, slot layanan, pembayaran, dan konfirmasi pelanggan dalam alur digital yang lebih tertib.',
      en: 'Organize schedules, service slots, payments, and customer confirmations in a more orderly digital flow.',
    },
    idealFor: {
      id: 'Cocok untuk klinik, salon, rental, hospitality, konsultasi, atau bisnis berbasis appointment.',
      en: 'A fit for clinics, salons, rentals, hospitality, consultations, or appointment-based businesses.',
    },
    features: [
      { id: 'Kalender booking terpusat', en: 'Centralized booking calendar' },
      { id: 'Pengaturan slot dan kapasitas', en: 'Slot and capacity management' },
      { id: 'Notifikasi otomatis ke pelanggan', en: 'Automatic customer notifications' },
      { id: 'Integrasi pembayaran dan invoice', en: 'Payment and invoice integration' },
    ],
    visual: 'booking',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20sistem%20booking.',
  },
  {
    slug: 'inventory-gudang',
    order: 4,
    category: { id: 'Inventory', en: 'Inventory' },
    title: {
      id: 'Sistem Inventory & Gudang untuk Stok yang Selalu Terpantau',
      en: 'Inventory & Warehouse System for Fully Tracked Stock',
    },
    summary: {
      id: 'Pantau stok masuk, stok keluar, mutasi barang, dan kebutuhan restock dengan struktur yang lebih akurat.',
      en: 'Track inbound stock, outbound stock, item movement, and restocking needs with a more accurate structure.',
    },
    idealFor: {
      id: 'Bagus untuk distributor, retail, manufaktur ringan, dan bisnis yang butuh visibilitas stok harian.',
      en: 'Well-suited for distributors, retail, light manufacturing, and businesses needing daily stock visibility.',
    },
    features: [
      { id: 'Dashboard stok dan alert restock', en: 'Stock dashboard and restock alerts' },
      { id: 'Pencatatan barang masuk keluar', en: 'Inbound and outbound stock records' },
      { id: 'Riwayat mutasi per gudang', en: 'Warehouse movement history' },
      { id: 'Laporan stok dan valuasi', en: 'Stock and valuation reports' },
    ],
    visual: 'inventory',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20sistem%20inventory.',
  },
  {
    slug: 'portal-internal',
    order: 5,
    category: { id: 'Portal Internal', en: 'Internal Portal' },
    title: {
      id: 'Portal Internal & Workflow System untuk Koordinasi Tim',
      en: 'Internal Portal & Workflow System for Team Coordination',
    },
    summary: {
      id: 'Bangun sistem internal untuk approval, dokumen, tasking, dan alur kerja lintas tim yang lebih tertata.',
      en: 'Build an internal system for approvals, documents, tasking, and cross-team workflows that are more organized.',
    },
    idealFor: {
      id: 'Cocok untuk bisnis yang ingin mengurangi komunikasi manual dan membuat SOP lebih konsisten.',
      en: 'Ideal for businesses that want to reduce manual communication and make SOP execution more consistent.',
    },
    features: [
      { id: 'Approval flow bertahap', en: 'Multi-step approval flow' },
      { id: 'Task board dan monitoring progres', en: 'Task board and progress tracking' },
      { id: 'Pusat dokumen dan arsip digital', en: 'Document center and digital archive' },
      { id: 'Hak akses per divisi', en: 'Division-based access control' },
    ],
    visual: 'portal',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20portal%20internal.',
  },
  {
    slug: 'custom-system',
    order: 6,
    category: { id: 'Custom System', en: 'Custom System' },
    title: {
      id: 'Custom System Sesuai Alur Bisnis Anda',
      en: 'Custom System Tailored to Your Business Flow',
    },
    summary: {
      id: 'Jika kebutuhan Anda tidak cocok dengan software umum, kami bisa bantu rancang sistem yang benar-benar mengikuti proses bisnis Anda.',
      en: 'If your needs do not fit generic software, we can design a system that truly follows your business process.',
    },
    idealFor: {
      id: 'Tepat untuk bisnis yang punya kebutuhan unik, integrasi khusus, atau proses kerja yang tidak bisa dipaksakan ke template.',
      en: 'Best for businesses with unique needs, special integrations, or workflows that cannot be forced into a template.',
    },
    features: [
      { id: 'Analisis alur bisnis sebelum build', en: 'Business flow analysis before build' },
      { id: 'UI/UX khusus sesuai kebutuhan tim', en: 'Custom UI/UX for your team needs' },
      { id: 'Integrasi API dan tools eksternal', en: 'API and external tool integrations' },
      { id: 'Roadmap pengembangan bertahap', en: 'Phased development roadmap' },
    ],
    visual: 'custom',
    ctaUrl: 'https://wa.me/6285726061384?text=Halo%20Menata%20Web%2C%20saya%20ingin%20diskusi%20soal%20custom%20system.',
  },
];
