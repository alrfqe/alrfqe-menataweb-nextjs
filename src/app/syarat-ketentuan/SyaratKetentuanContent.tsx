'use client';

import { useLang } from '@/hooks/useLanguage';

const sections = [
  {
    title: ['Ruang Lingkup Layanan', 'Scope of Services'],
    body: [
      'Menata Web menyediakan layanan yang berkaitan dengan website dan kebutuhan digital lain sesuai kesepakatan, seperti landing page, company profile, toko online, redesign, maintenance, atau pengembangan website custom.',
      'Menata Web provides services related to websites and other digital needs as agreed upon, such as landing pages, company profiles, online stores, redesigns, maintenance, or custom website development.',
    ],
  },
  {
    title: ['Materi dari Klien', 'Client Materials'],
    body: [
      'Klien bertanggung jawab atas kelengkapan materi yang diberikan, termasuk teks, foto, logo, informasi bisnis, dan akses teknis yang diperlukan. Keterlambatan pengiriman materi dapat memengaruhi estimasi waktu pengerjaan.',
      'The client is responsible for the completeness of all provided materials, including text, photos, logos, business information, and necessary technical access. Delays in supplying materials may affect the estimated project timeline.',
    ],
  },
  {
    title: ['Revisi', 'Revisions'],
    body: [
      'Setiap proyek mencakup revisi sesuai ruang lingkup yang disepakati. Revisi di luar ruang lingkup, perubahan arah desain secara menyeluruh, atau penambahan fitur baru dapat memerlukan penyesuaian waktu dan biaya.',
      'Each project includes revisions within the agreed scope. Revisions outside the scope, major design direction changes, or new feature requests may require additional time and cost adjustments.',
    ],
  },
  {
    title: ['Pembayaran', 'Payments'],
    body: [
      'Skema pembayaran, termin, dan jadwal pelunasan mengikuti penawaran atau kesepakatan proyek. Pengerjaan dapat dimulai setelah pembayaran awal atau tanda jadi diterima sesuai kesepakatan.',
      'Payment structure, milestones, and settlement schedule follow the project quotation or agreement. Work may begin after the initial payment or booking fee is received according to the agreement.',
    ],
  },
  {
    title: ['Kepemilikan dan Akses', 'Ownership and Access'],
    body: [
      'Setelah kewajiban pembayaran selesai, klien akan menerima akses atau hasil akhir sesuai layanan yang dibeli. Elemen pihak ketiga seperti lisensi plugin, hosting, domain, atau layanan berbayar lain dapat mengikuti kebijakan vendor masing-masing.',
      'Once payment obligations are fulfilled, the client will receive access or final deliverables according to the purchased service. Third-party elements such as plugin licenses, hosting, domain, or other paid services may follow each vendor’s own policies.',
    ],
  },
  {
    title: ['Batas Tanggung Jawab', 'Limitation of Liability'],
    body: [
      'Menata Web berupaya memberikan hasil kerja yang layak dan profesional. Namun, kami tidak dapat menjamin hasil bisnis tertentu, posisi pasti di mesin pencari, atau performa pihak ketiga di luar kendali kami.',
      'Menata Web aims to deliver proper and professional work. However, we cannot guarantee specific business outcomes, exact search engine rankings, or third-party performance beyond our control.',
    ],
  },
  {
    title: ['Perubahan Ketentuan', 'Changes to Terms'],
    body: [
      'Menata Web dapat memperbarui dokumen ini sewaktu-waktu untuk menyesuaikan kebutuhan operasional atau kepatuhan. Versi terbaru akan ditampilkan pada halaman ini.',
      'Menata Web may update this document at any time to reflect operational needs or compliance requirements. The latest version will always be shown on this page.',
    ],
  },
];

export default function SyaratKetentuanContent() {
  const { t } = useLang();

  return (
    <main className="legal-wrapper">
      <div className="container">
        <div className="legal-card">
          <div className="section-label">{t('Dokumen Legal', 'Legal Document')}</div>
          <h1 className="text-h1">{t('Syarat & Ketentuan', 'Terms & Conditions')}</h1>
          <div className="legal-meta">
            <span>{t('Berlaku mulai 1 April 2026', 'Effective as of April 1, 2026')}</span>
            <span>Menata Web</span>
          </div>
          <div className="legal-content">
            <p>
              {t(
                'Dengan mengakses website ini atau menggunakan layanan Menata Web, Anda dianggap memahami dan menyetujui syarat umum berikut. Ketentuan rinci proyek dapat disesuaikan kembali melalui penawaran, proposal, atau kesepakatan tertulis dengan klien.',
                'By accessing this website or using Menata Web services, you are considered to understand and agree to the following general terms. Detailed project terms may be further adjusted through quotations, proposals, or written agreements with the client.'
              )}
            </p>
            {sections.map((section) => (
              <section key={section.title[0]}>
                <h2>{t(section.title[0], section.title[1])}</h2>
                <p>{t(section.body[0], section.body[1])}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
