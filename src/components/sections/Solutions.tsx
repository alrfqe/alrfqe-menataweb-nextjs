'use client';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const items = [
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, title: ['Fleksibel Sesuai Kebutuhan','Flexible Needs'], desc: ["Tidak ada paket 'satu ukuran untuk semua'. Kami sesuaikan dengan budget dan target Anda.","No 'one size fits all'. We adjust to your budget and targets."] },
  { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>, title: ['Kualitas Tanpa Kompromi','Uncompromised Quality'], desc: ['Desain modern, kecepatan loading optimal, dan SEO-ready untuk performa maksimal.','Modern design, optimal loading speed, and SEO-ready for maximum performance.'] },
  { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, title: ['Komunikasi Terbuka','Open Communication'], desc: ['Update progress rutin. Kami temenin dari nol — konsultasi, desain, sampai website aktif.','Routine progress updates. We accompany you from zero — consultation, design, until active.'] },
  { icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>, title: ['Harga Transparan','Transparent Pricing'], desc: ['Tidak ada biaya tersembunyi. Harga disepakati di awal, dengan sesi revisi yang mengikuti scope proyek.','No hidden fees. Pricing is agreed upfront, with revision sessions aligned to the project scope.'] },
];

export default function Solutions() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section" id="solusi" ref={ref}>
      <div className="container">
        <div className={`solusi-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label">{t('Kenapa Menata Web','Why Menata Web')}</div>
          <h2 className="text-h2">{t('Bukan Sekadar Vendor. ','Not Just a Vendor. ')}<span className="text-gradient">{t('Kami Partner Digital Anda.','We Are Your Digital Partner.')}</span></h2>
          <p>{t('Kami membangun website yang bukan hanya bagus dilihat, tapi juga bagus untuk bisnis.','We build websites that don\'t just look good, but are also good for business.')}</p>
        </div>
        <div className={`solusi-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
          {items.map((it, i) => (
            <div className="solusi-card" key={i}>
              <div className="solusi-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{it.icon}</svg></div>
              <h4>{t(it.title[0], it.title[1])}</h4>
              <p>{t(it.desc[0], it.desc[1])}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
