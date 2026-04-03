'use client';
import { useLang } from '@/hooks/useLanguage';
import { useFadeUp } from '@/hooks/useAnimations';

const steps = [
  { num: '01', title: ['Proposal & Deal','Proposal & Deal'], desc: ['Hari 1-2. Diskusi kebutuhan, scope project, dan kesepakatan harga.','Day 1-2. Discuss needs, project scope, and price agreement.'] },
  { num: '02', title: ['Desain & Review','Design & Review'], desc: ['Hari 3-7. Kami buatkan mockup desain, Anda beri masukan sampai cocok.','Day 3-7. We create design mockups, you provide feedback until satisfied.'] },
  { num: '03', title: ['Development','Development'], desc: ['Hari 7-14. Implementasi coding website, setup domain/hosting, dan testing fungsi.','Day 7-14. Website coding implementation, domain/hosting setup, and function testing.'] },
  { num: '04', title: ['Launch','Launch'], desc: ['Hari 14+. Website online, serah terima akses, dan tutorial penggunaan.','Day 14+. Website online, access handover, and usage tutorial.'] },
];

export default function Process() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section" id="process" ref={ref}>
      <div className="container">
        <div className={`fade-up${vis ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">{t('Proses Kerja','Our Process')}</div>
          <h2 className="text-h2">{t('Transparan & Cepat.','Transparent & Fast.')}</h2>
        </div>
        <div className={`process-grid stagger-children fade-up${vis ? ' visible' : ''}`}>
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="process-number">{s.num}</div>
              <h4>{t(s.title[0], s.title[1])}</h4>
              <p>{t(s.desc[0], s.desc[1])}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
