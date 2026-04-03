'use client';
import { useState, FormEvent } from 'react';
import { useFadeUp } from '@/hooks/useAnimations';
import { useLang } from '@/hooks/useLanguage';
import './kontak.css';

export default function KontakContent() {
  const { t, lang } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const get = (id: string) => (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value?.trim() || '-';

    const msg = lang === 'id' ? `Halo Menata Web! 👋 Saya ingin konsultasi pembuatan website.

━━━━━━━━━━━━━━━━━━━━
👤 *DATA DIRI*
• Nama     : ${get('nama')}
• WhatsApp : ${get('whatsapp')}
• Kota     : ${get('kota')}

🏢 *INFO BISNIS*
• Brand / Bisnis : ${get('bisnis')}
• Bidang Usaha   : ${get('bidang')}
• Paket Diminati : ${get('package')}

🌐 *KEBUTUHAN WEBSITE*
• Gambaran  : ${get('deskripsi')}
• Domain & Hosting : ${get('domain')}
• Catatan   : ${get('note')}

📣 *INFO REFERRAL*
• Tau Menata Web dari : ${get('sumber')}
━━━━━━━━━━━━━━━━━━━━

Mohon dibantu ya, terima kasih! 🙏` : `Hello Menata Web! 👋 I would like to discuss a website project.

━━━━━━━━━━━━━━━━━━━━
👤 *PERSONAL INFO*
• Name      : ${get('nama')}
• WhatsApp  : ${get('whatsapp')}
• City      : ${get('kota')}

🏢 *BUSINESS INFO*
• Brand / Business : ${get('bisnis')}
• Industry         : ${get('bidang')}
• Interested Package : ${get('package')}

🌐 *WEBSITE NEEDS*
• Overview         : ${get('deskripsi')}
• Domain & Hosting : ${get('domain')}
• Notes            : ${get('note')}

📣 *REFERRAL INFO*
• Heard about Menata Web from : ${get('sumber')}
━━━━━━━━━━━━━━━━━━━━

Please help, thank you! 🙏`;

    setTimeout(() => {
      window.open(`https://wa.me/6285726061384?text=${encodeURIComponent(msg)}`, '_blank');
      setSubmitting(false);
    }, 600);
  };

  const checkSvg = <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;

  return (
    <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }} ref={ref}>
      <div className="container">
        <div className="order-layout">
          {/* LEFT SIDEBAR */}
          <div className={`order-sidebar fade-up${vis ? ' visible' : ''}`}>
            <div className="kontak-hero-badge"><span></span>{t('Konsultasi 100% Gratis', '100% Free Consultation')}</div>
            <h1 className="text-h2" style={{ lineHeight: 1.25, marginBottom: '1rem' }}>{t('Bisnis Anda layak hadir', 'Your business deserves to appear')}<br/>{t('secara profesional di ', 'professionally on the ')}<span className="text-gradient">{t('internet.', 'internet.')}</span></h1>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, fontSize: 'var(--text-body)' }}>{t('Banyak bisnis di Indonesia sudah membuktikan bahwa ', 'Many businesses have proven that ')}<strong style={{ color: 'var(--color-text-primary)' }}>{t('website yang tepat membuat brand terlihat lebih profesional dan memudahkan calon pelanggan menghubungi Anda', 'the right website makes a brand look more professional and makes it easier for potential customers to contact you')}</strong>.</p>
            <div className="funnel-steps">
              {[
                ['1','Isi form singkat ini','Fill in this short form','Ceritakan bisnis dan kebutuhan website Anda. Tidak ada pertanyaan yang salah.','Tell us about your business and website needs. No question is a wrong question.'],
                ['2','Tim kami respon via WhatsApp','Our team replies via WhatsApp','Dalam 1×24 jam, kami akan hubungi Anda untuk diskusi lebih lanjut secara personal.','Within 24 hours, we will contact you for a more personal discussion.'],
                ['3','Website Anda live dalam 3–14 hari','Your website goes live in 3–14 days','Proses pengerjaan profesional, transparan, dan tanpa biaya tersembunyi.','A professional, transparent process with no hidden costs.'],
              ].map(([n,idTitle,enTitle,idDesc,enDesc]) => (
                <div className="funnel-step" key={n}><div className="funnel-step-num">{n}</div><div className="funnel-step-text"><strong>{t(idTitle,enTitle)}</strong><span>{t(idDesc,enDesc)}</span></div></div>
              ))}
            </div>
            <div className="kontak-trust-row">
              {[
                ['Gratis Konsultasi','Free Consultation'],
                ['Tanpa Biaya Tersembunyi','No Hidden Fees'],
                ['Garansi Revisi','Revision Guarantee'],
                ['Respon 1×24 Jam','24h Response'],
                ['50+ Project Website','50+ Website Projects'],
              ].map(([idText,enText]) => (
                <div className="kontak-trust-pill" key={idText}>{checkSvg}{t(idText,enText)}</div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: '14px', borderLeft: '3px solid var(--color-primary)' }}>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;{t('Awalnya kami butuh website yang rapi dan mudah dipahami calon pelanggan. Prosesnya terstruktur, komunikasinya enak, dan hasil akhirnya sesuai kebutuhan bisnis kami.','At first, we needed a website that looked clean and was easy for potential customers to understand. The process was structured, communication was smooth, and the final result matched our business needs.')}&rdquo;</p>
              <p style={{ marginTop: '0.75rem', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-primary)' }}>— {t('Klien Menata Web', 'Menata Web Client')}</p>
            </div>
          </div>
          {/* RIGHT FORM */}
          <div className={`fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '0.15s' }} id="form">
            <div className="form-card">
              <div className="form-card-header"><h2>📋 {t('Form Konsultasi Awal', 'Initial Consultation Form')}</h2><p>{t('Isi data di bawah — tim kami akan segera menghubungi Anda via WhatsApp.', 'Fill in the details below — our team will contact you via WhatsApp shortly.')}</p></div>
              <form id="orderForm" onSubmit={handleSubmit}>
                <div className="form-section-label">{t('Data Diri', 'Personal Information')}</div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="nama" className="form-label">{t('Nama Lengkap', 'Full Name')} <span style={{ color: '#ef4444' }}>*</span></label><input type="text" id="nama" className="form-input" placeholder={t('Nama Anda', 'Your name')} required /></div>
                  <div className="form-group"><label htmlFor="whatsapp" className="form-label">{t('Nomor WhatsApp', 'WhatsApp Number')} <span style={{ color: '#ef4444' }}>*</span></label><input type="tel" id="whatsapp" className="form-input" placeholder="08xxxxxxxxxx" required /></div>
                </div>
                <div className="form-group"><label htmlFor="kota" className="form-label">{t('Kota / Asal Daerah', 'City / Area')} <span style={{ color: '#ef4444' }}>*</span></label><input type="text" id="kota" className="form-input" placeholder={t('Contoh: Yogyakarta, Jakarta, Surabaya...', 'Example: Yogyakarta, Jakarta, Surabaya...')} required /></div>
                <div className="form-section-label">{t('Info Bisnis / Brand', 'Business / Brand Info')}</div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="bisnis" className="form-label">{t('Nama Bisnis / Brand', 'Business / Brand Name')} <span style={{ color: '#ef4444' }}>*</span></label><input type="text" id="bisnis" className="form-input" placeholder={t('Nama bisnis atau brand Anda', 'Your business or brand name')} required /></div>
                  <div className="form-group"><label htmlFor="bidang" className="form-label">{t('Bidang Usaha', 'Industry')} <span style={{ color: '#ef4444' }}>*</span></label><input type="text" id="bidang" className="form-input" placeholder={t('F&B, Fashion, Jasa, Kuliner...', 'F&B, Fashion, Services, Culinary...')} required /></div>
                </div>
                <div className="form-group"><label htmlFor="package" className="form-label">{t('Paket yang Diminati', 'Interested Package')}</label>
                  <select id="package" className="form-select"><option value={t('Belum tahu / Mau konsultasi dulu','Not sure yet / Need consultation first')}>{t('Belum tahu / Mau konsultasi dulu','Not sure yet / Need consultation first')}</option><option value="Landing Page — Rp750.000">Landing Page — Rp750.000</option><option value="Company Profile — Rp1.500.000">{t('Company Profile — Rp1.500.000 (Populer)','Company Profile — Rp1.500.000 (Popular)')}</option><option value={t('Toko Online / E-Commerce','Online Store / E-Commerce')}>{t('Toko Online / E-Commerce','Online Store / E-Commerce')}</option><option value={t('Sistem POS / Kasir','POS / Cashier System')}>{t('Sistem POS / Kasir','POS / Cashier System')}</option><option value="Custom / Full-Stack — Rp3.500.000+">Custom / Full-Stack — Rp3.500.000+</option></select>
                </div>
                <div className="form-section-label">{t('Kebutuhan Website', 'Website Needs')}</div>
                <div className="form-group"><label htmlFor="deskripsi" className="form-label">{t('Gambaran Website yang Diinginkan', 'Desired Website Overview')}</label><textarea id="deskripsi" className="form-textarea" rows={3} placeholder={t('Ceritakan tujuan website, fitur yang diinginkan, atau referensi website yang Anda suka...','Tell us the website goal, desired features, or website references you like...')} /></div>
                <div className="form-group"><label htmlFor="domain" className="form-label">{t('Status Domain & Hosting', 'Domain & Hosting Status')}</label>
                  <select id="domain" className="form-select"><option value={t('Belum punya, butuh bantuan','Do not have any yet, need help')}>{t('Belum punya, butuh bantuan','Do not have any yet, need help')}</option><option value={t('Sudah punya domain saja','Already have a domain only')}>{t('Sudah punya domain saja','Already have a domain only')}</option><option value={t('Sudah punya domain & hosting','Already have domain & hosting')}>{t('Sudah punya domain & hosting','Already have domain & hosting')}</option><option value={t('Tidak yakin, mau konsultasi dulu','Not sure, need consultation first')}>{t('Tidak yakin, mau konsultasi dulu','Not sure, need consultation first')}</option></select>
                </div>
                <div className="form-group"><label htmlFor="note" className="form-label">{t('Catatan Tambahan', 'Additional Notes')}</label><textarea id="note" className="form-textarea" rows={2} placeholder={t('Ada hal lain yang perlu kami tahu? Budget, deadline, atau pertanyaan lain...','Anything else we should know? Budget, deadline, or other questions...')} /></div>
                <div className="form-section-label">{t('Tentang Kami', 'About Us')}</div>
                <div className="form-group"><label htmlFor="sumber" className="form-label">{t('Tau Menata Web Dari Mana?', 'How Did You Hear About Menata Web?')} <span style={{ color: '#ef4444' }}>*</span></label>
                  <select id="sumber" className="form-select" required><option value="">{t('— Pilih salah satu —','— Select one —')}</option><option value="Instagram / Reels">Instagram / Reels</option><option value="TikTok / Video TikTok">TikTok / Video TikTok</option><option value="Google / Search">Google / Search</option><option value={t('Rekomendasi Teman / Kenalan','Friend / Referral')}>{t('Rekomendasi Teman / Kenalan','Friend / Referral')}</option><option value="Menata Web">Menata Web</option><option value="Facebook / Meta">Facebook / Meta</option><option value={t('Lainnya','Others')}>{t('Lainnya','Others')}</option></select>
                </div>
                <button type="submit" className="btn-whatsapp-submit" disabled={submitting}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {submitting ? t('Memproses...', 'Processing...') : t('Kirim & Konsultasi via WhatsApp', 'Send & Consult via WhatsApp')}
                </button>
                <p className="submit-note">🔒 {t('Data Anda aman. Hanya digunakan untuk keperluan konsultasi awal.', 'Your data is safe. It is only used for the initial consultation.')}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
