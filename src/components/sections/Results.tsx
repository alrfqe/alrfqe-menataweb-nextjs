'use client';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp, useCounter } from '@/hooks/useAnimations';

const stats = [
  { icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></>, target: 14, suffix: ' Hari', suffixEn: ' Days', label: ['Rata-rata Website Tayang', 'Average Time to Launch'], source: ['— untuk paket landing page dan company profile', '— for landing page and company profile packages'] },
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></>, target: 24, suffix: ' Jam', suffixEn: ' Hours', label: ['Target Respon Awal Tim', 'Initial Team Response Target'], source: ['— komunikasi awal proyek lebih cepat dan jelas', '— early project communication stays faster and clearer'] },
  { icon: <><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></>, target: 7, suffix: '+', label: ['Industri Pernah Ditangani', 'Industries Served'], source: ['— mulai dari UMKM lokal hingga layanan profesional', '— from local businesses to professional services'] },
  { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>, target: 50, suffix: '+', label: ['Project Website Selesai', 'Completed Website Projects'], source: ['— dikerjakan bertahap dengan scope yang jelas', '— delivered in stages with a clearly defined scope'] },
];

export default function Results() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLDivElement>();

  return (
    <section className="section results-section" id="results">
      <div className="container" ref={ref}>
        <div className={`results-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Standar Kerja', 'Work Standards')}</div>
          <h2 className="text-h2">{t('Pendekatan yang Terukur, Bukan Janji Berlebihan', 'Measured Delivery, Not Overstated Promises')}</h2>
          <p className="text-muted" style={{ marginTop: '1rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            {t('Fokus kami adalah proses yang rapi, komunikasi jelas, dan hasil website yang layak dipakai untuk kebutuhan bisnis nyata.', 'Our focus is a structured process, clear communication, and websites that are genuinely ready for real business use.')}
          </p>
        </div>
        <div className={`results-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
          {stats.map((s, i) => (
            <ResultCard key={i} stat={s} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) {
  const { t, lang } = useLang();
  const count = useCounter(stat.target, visible);
  return (
    <div className="result-card">
      <div className="result-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{stat.icon}</svg></div>
      <div className="result-number">
        <span className="counter">{count}</span><span className="result-suffix">{lang === 'id' ? stat.suffix : (stat.suffixEn || stat.suffix)}</span>
      </div>
      <p className="result-label">{t(stat.label[0], stat.label[1])}</p>
      <span className="result-source">{t(stat.source[0], stat.source[1])}</span>
    </div>
  );
}
