'use client';

import { useLang } from '@/hooks/useLanguage';

const sections = [
  {
    title: ['Informasi yang Kami Kumpulkan', 'Information We Collect'],
    body: [
      'Kami dapat menerima informasi yang Anda kirimkan secara sukarela melalui formulir, WhatsApp, email, atau komunikasi lain. Informasi tersebut dapat mencakup nama, nomor WhatsApp, alamat email, nama bisnis, kota, dan kebutuhan website yang Anda sampaikan.',
      'We may receive information you voluntarily submit through forms, WhatsApp, email, or other communication channels. This information may include your name, WhatsApp number, email address, business name, city, and website requirements you share with us.',
    ],
  },
  {
    title: ['Tujuan Penggunaan Data', 'Purpose of Data Usage'],
    list: [
      ['Menjawab pertanyaan atau permintaan konsultasi.', 'To respond to questions or consultation requests.'],
      ['Menyiapkan penawaran, estimasi, atau rekomendasi layanan.', 'To prepare quotations, estimates, or service recommendations.'],
      ['Melakukan komunikasi terkait proyek atau permintaan kerja sama.', 'To communicate about projects or collaboration requests.'],
      ['Meningkatkan kualitas layanan dan pengalaman pengguna website.', 'To improve service quality and website user experience.'],
    ],
  },
  {
    title: ['Penyimpanan dan Keamanan', 'Storage and Security'],
    body: [
      'Kami berupaya menyimpan data secara wajar dan hanya mengaksesnya untuk kebutuhan operasional yang relevan. Data tidak diperjualbelikan kepada pihak lain. Jika dalam proses proyek kami bekerja dengan vendor atau layanan pihak ketiga, akses informasi dibatasi hanya pada kebutuhan yang berkaitan langsung dengan pengerjaan.',
      'We make reasonable efforts to store data securely and access it only for relevant operational needs. We do not sell data to third parties. If we work with vendors or third-party services during a project, access to information is limited to what is directly required for execution.',
    ],
  },
  {
    title: ['Cookie dan Data Teknis', 'Cookies and Technical Data'],
    body: [
      'Website ini dapat menggunakan data teknis dasar seperti alamat IP, jenis perangkat, browser, dan halaman yang dibuka untuk keperluan analitik umum, keamanan, atau perbaikan performa website.',
      'This website may use basic technical data such as IP address, device type, browser, and visited pages for general analytics, security, or website performance improvements.',
    ],
  },
  {
    title: ['Hak Pengguna', 'User Rights'],
    body: [
      'Anda dapat meminta pembaruan, koreksi, atau penghapusan data yang pernah Anda kirimkan kepada kami, sepanjang hal tersebut tidak bertentangan dengan kewajiban administrasi atau kebutuhan dokumentasi proyek.',
      'You may request updates, corrections, or deletion of data you have submitted to us, as long as doing so does not conflict with administrative obligations or project documentation requirements.',
    ],
  },
];

export default function KebijakanPrivasiContent() {
  const { t } = useLang();

  return (
    <main className="legal-wrapper">
      <div className="container">
        <div className="legal-card">
          <div className="section-label">{t('Dokumen Legal', 'Legal Document')}</div>
          <h1 className="text-h1">{t('Kebijakan Privasi', 'Privacy Policy')}</h1>
          <div className="legal-meta">
            <span>{t('Berlaku mulai 1 April 2026', 'Effective as of April 1, 2026')}</span>
            <span>Menata Web</span>
          </div>
          <div className="legal-content">
            <p>
              {t(
                'Menata Web menghargai privasi setiap pengunjung website dan calon klien. Dokumen ini menjelaskan jenis informasi yang kami terima, cara informasi tersebut digunakan, serta langkah perlindungan yang kami terapkan.',
                'Menata Web respects the privacy of every website visitor and prospective client. This document explains the type of information we receive, how it is used, and the protection measures we apply.'
              )}
            </p>
            {sections.map((section) => (
              <section key={section.title[0]}>
                <h2>{t(section.title[0], section.title[1])}</h2>
                {section.body ? <p>{t(section.body[0], section.body[1])}</p> : null}
                {section.list ? (
                  <ul>
                    {section.list.map(([idItem, enItem]) => (
                      <li key={idItem}>{t(idItem, enItem)}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <h2>{t('Kontak', 'Contact')}</h2>
            <p>
              {t('Jika Anda memiliki pertanyaan mengenai kebijakan ini, silakan hubungi kami melalui ', 'If you have any questions about this policy, please contact us via ')}
              <a href="mailto:hello@menataweb.com">hello@menataweb.com</a>
              {t(' atau ', ' or ')}
              <a href="https://wa.me/6285726061384">WhatsApp Menata Web</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
