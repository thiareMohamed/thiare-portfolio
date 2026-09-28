import { SERVICE_KANJI } from '../assets/data/translations';
import { useLang } from './LangContext';
import { SectionLabel } from './ui';

function Services() {
  const { t } = useLang();

  return (
    <section id='arsenal' className='section-pad bg-surface border-y border-line'>
      <div className='container-dojo'>
        <div className='flex justify-between items-end gap-6 flex-wrap mb-14'>
          <div className='flex flex-col gap-6'>
            <SectionLabel num='02'>{t.arsenalLabel}</SectionLabel>
            <h2 data-reveal className='display h2-dojo'>
              {t.arsenalA}<br /><span className='text-vermilion'>{t.arsenalB}</span>
            </h2>
          </div>
          <p data-reveal className='m-0 max-w-[360px] text-muted [text-wrap:pretty]'>{t.arsenalLead}</p>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[14px]'>
          {t.services.map(([title, desc, feats], i) => (
            <div
              key={i}
              data-reveal
              className='relative overflow-hidden min-h-[300px] box-border p-7 rounded-[22px] bg-ink border border-line text-paper flex flex-col gap-[14px] transition-[background,color,transform,border-color] duration-[450ms] ease-dojo hover:bg-vermilion hover:text-on-vermilion hover:border-vermilion hover:-translate-y-[6px]'
            >
              <span aria-hidden='true' className='kanji absolute -right-2 -bottom-10 text-[190px] leading-none text-current opacity-[0.06]'>
                {SERVICE_KANJI[i]}
              </span>
              <div className='mono-label flex justify-between'>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span className='kanji text-lg'>{SERVICE_KANJI[i]}</span>
              </div>
              <div className='mt-auto font-bold text-[26px] leading-[1.1] tracking-[-0.015em] [font-variation-settings:"wdth"_105]'>{title}</div>
              <p className='m-0 text-[15px] opacity-[0.78] [text-wrap:pretty]'>{desc}</p>
              <div className='flex flex-wrap gap-[6px] opacity-[0.85]'>
                {feats.map((f) => (
                  <span key={f} className='px-[10px] py-1 rounded-full border border-current text-xs'>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
