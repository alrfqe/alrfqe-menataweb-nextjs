'use client';
import { useState } from 'react';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const faqs = [
  { q: ['Apakah saya perlu paham teknologi?','Do I need to be tech-savvy?'], a: ['Sama sekali tidak. Kami handle semua urusan teknis mulai dari domain, hosting, sampai website online. Anda tinggal terima beres.','Not at all. We handle all technical aspects from domain, hosting, to online website. You just receive the result.'] },
  { q: ['Berapa lama proses pembuatan?','How long is the process?'], a: ['Untuk Landing Page sekitar 3-5 hari kerja. Website yang lebih kompleks 2-4 minggu, tergantung kelengkapan materi dari Anda.','For Landing Page about 3-5 working days. More complex websites 2-4 weeks, depending on your material completeness.'] },
  { q: ['Apakah ada biaya tambahan?','Are there additional costs?'], a: ['Hanya biaya tahunan untuk perpanjangan Domain & Hosting (sekitar Rp 350.000 - Rp 1.500.000 per tahun tergantung paket). Jasa desain & development kami one-time payment.','Only annual fees for Domain & Hosting renewal. Our design & development service is one-time payment.'] },
  { q: ['Bagaimana kalau bisnis saya berkembang?','What if my business grows?'], a: ['Kami merancang website dengan skalabilitas tinggi. Anda bisa upgrade paket hosting atau menambah fitur kapan saja tanpa harus buat ulang dari nol.','We design websites with high scalability. You can upgrade hosting packages or add features anytime without starting from scratch.'] },
];

export default function FAQ() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="section section-alt" id="faq" ref={ref}>
      <div className="container">
        <div className="faq-layout">
          <div className={`faq-sticky fade-up${vis ? ' visible' : ''}`}>
            <div className="section-label">FAQ</div>
            <h2 className="text-h2">{t('Pertanyaan Umum','Common Questions')}</h2>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: 1.7 }}>{t('Masih ada pertanyaan? Langsung chat kami saja.','Still have questions? Chat us directly.')}</p>
            <a href="https://wa.me/6285726061384" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>{t('Hubungi Kami','Contact Us')}</a>
          </div>
          <div className={`faq-list fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.1s' }}>
            {faqs.map((f, i) => (
              <div className={`faq-item${activeIdx === i ? ' active' : ''}`} key={i}>
                <button className="faq-question" aria-expanded={activeIdx === i} onClick={() => setActiveIdx(activeIdx === i ? null : i)}>
                  <span>{t(f.q[0], f.q[1])}</span>
                  <span className="faq-icon">{activeIdx === i ? '−' : '+'}</span>
                </button>
                <div className="faq-answer"><p>{t(f.a[0], f.a[1])}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
