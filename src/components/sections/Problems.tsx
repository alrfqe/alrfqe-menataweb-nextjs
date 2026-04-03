'use client';
import Link from 'next/link';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const problems = [
  { title: ['Omzet Stagnan', 'Stagnant Revenue'], desc: ['Kenapa omzet stagnan padahal produk saya bagus? Karena calon pelanggan tidak bisa menemukan Anda di Google.', "Why is revenue stagnant when your product is great? Because potential customers can't find you on Google."] },
  { title: ['Konversi Kecil', 'Low Conversion'], desc: ['Cuma andalkan Instagram & WA? Media sosial rawan hilang. Website adalah aset sepenuhnya milik Anda.', "Only relying on Instagram & WA? Social media can disappear. A website is fully your own asset."] },
  { title: ['Takut Biaya Mahal', 'Fear of High Costs'], desc: ['Takut biaya website mahal? Mulai Rp750rb. 1 pelanggan baru sudah cukup untuk balik modal.', "Afraid website costs are too high? Starting from Rp750k. 1 new customer is enough to break even."] },
  { title: ['Gaptek', 'Not Tech Savvy'], desc: ['Tidak ada waktu atau tidak paham teknis? Serahkan ke kami. Fokus Anda tetap di bisnis.', "No time or don't understand tech? Leave it to us. You stay focused on your business."] },
];

export default function Problems() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section section-alt" id="problem" ref={ref}>
      <div className="container">
        <div className="problem-grid">
          <div className={`problem-sticky fade-up${vis ? ' visible' : ''}`}>
            <div className="section-label"><span className="label-dot label-dot-red"></span>{t('Masalah UMKM', 'MSME Problems')}</div>
            <h2 className="text-h2">{t('Setiap Hari Tanpa Website = ', 'Every Day Without a Website = ')}<span className="text-red">{t('Pelanggan yang Hilang', 'Lost Customers')}</span></h2>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: 1.7, maxWidth: 400 }} dangerouslySetInnerHTML={{ __html: t('87% konsumen mencari produk lewat Google. <strong>Kompetitor Anda sudah ada di sana.</strong> Anda?', '87% of consumers search on Google. <strong>Your competitors are already there.</strong> Are you?') }} />
            <Link href="/kontak" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>{t('Mulai Go Digital Sekarang →', 'Go Digital Now →')}</Link>
          </div>
          <div className={`problem-cards stagger-children fade-up${vis ? ' visible' : ''}`} style={{ transitionDelay: '.1s' }}>
            {problems.map((p, i) => (
              <div className="problem-card" key={i}>
                <div className="problem-card-header">
                  <div className="problem-icon">✕</div>
                  <h4>{t(p.title[0], p.title[1])}</h4>
                </div>
                <p>{t(p.desc[0], p.desc[1])}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`urgency-bar fade-up${vis ? ' visible' : ''}`}>
          <div className="urgency-icon">⚡</div>
          <p dangerouslySetInnerHTML={{ __html: t('<strong>87% konsumen</strong> mencari produk lewat Google sebelum membeli. Bisnis tanpa website kehilangan <strong>potensi pendapatan setiap hari.</strong>', '<strong>87% of consumers</strong> search on Google before buying. A business without a website loses <strong>potential revenue every day.</strong>') }} />
        </div>
      </div>
    </section>
  );
}
