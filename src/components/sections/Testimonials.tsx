'use client';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const testimonials = [
  { quote: ['Prosesnya jelas dari awal, komunikasinya enak, dan hasil websitenya membantu tempat kami terlihat jauh lebih profesional.','The process was clear from the start, communication was smooth, and the website made our place look far more professional.'], name: 'Bapak Sutrisno', role: ['Pengelola Desa Wisata Kawidasri','Manager, Desa Wisata Kawidasri'], initial: 'S' },
  { quote: ['Website baru membuat profil perusahaan kami lebih rapi dan memudahkan calon mitra memahami layanan kami.','The new website made our company profile cleaner and helped potential partners understand our services more easily.'], name: 'Ibu Clara', role: ['Direktur, Clavin Jaya Abadi','Director, Clavin Jaya Abadi'], initial: 'C' },
  { quote: ['Yang paling terasa adalah brand kami jadi lebih terpercaya dan calon pelanggan lebih mudah menghubungi kami.','The biggest impact was that our brand became more trustworthy and prospects could contact us more easily.'], name: 'Pemilik Usaha', role: ['Bisnis Kuliner Nusantara','Bisnis Kuliner Nusantara'], initial: 'K' },
  { quote: ['Tampilannya profesional dan membantu saya menjelaskan layanan dengan lebih percaya diri saat menawarkan jasa konsultan.','The look is professional and helps me explain my services more confidently when offering them.'], name: 'Andi Pratama', role: ['Konsultan Keuangan','Financial Consultant'], initial: 'A' },
];

export default function Testimonials() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  const cards = [...testimonials, ...testimonials.slice(0, 2)]; // duplicate for marquee loop
  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="container">
        <div className={`testimonials-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Testimoni','Testimonials')}</div>
          <h2 className="text-h2">{t('Cerita dari Klien yang Pernah Bekerja Bersama Kami','Stories from Clients Who Have Worked with Us')}</h2>
          <p className="text-muted" style={{ marginTop: '1rem' }}>{t('Masukan mereka membantu kami menjaga proses kerja tetap rapi, realistis, dan mudah diikuti.','Their feedback helps us keep our process structured, realistic, and easy to follow.')}</p>
        </div>
      </div>
      <div className={`testimonial-marquee fade-up${vis ? ' visible' : ''}`}>
        <div className="testimonial-marquee-track">
          {cards.map((c, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">★★★★★</div>
              <blockquote>&ldquo;{t(c.quote[0], c.quote[1])}&rdquo;</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{c.initial}</div>
                <div className="testimonial-author-info">
                  <h5>{c.name}</h5><span>{t(c.role[0], c.role[1])}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
