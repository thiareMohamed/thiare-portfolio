import { useState } from 'react';
import { Education, Jobs, References } from '../assets/data/career';
import { useLang } from './LangContext';
import { SectionLabel } from './ui';

function Career() {
  const { t, L } = useLang();
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <section id='career' className='section-pad border-t border-line'>
      <div className='container-dojo grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-y-12 gap-x-[clamp(40px,6vw,96px)] items-start'>
        <div className='sticky top-[110px] flex flex-col gap-6'>
          <SectionLabel num='04'>{t.careerLabel}</SectionLabel>
          <h2 data-reveal className='display m-0 text-[clamp(44px,5.6vw,84px)] leading-[0.9]'>
            {t.careerA}<br /><span className='text-vermilion'>{t.careerB}</span>
          </h2>
          <div data-reveal='slow' aria-hidden='true' className='kanji text-[clamp(120px,14vw,220px)] leading-none text-[color:oklch(1_0_0/0.07)]'>道</div>
        </div>

        <div className='flex flex-col gap-14 min-w-0'>
          <div className='flex flex-col'>
            {Jobs.map((j, i) => {
              const isOpen = open === i;
              return (
                <div key={i} data-reveal className='border-t border-line'>
                  <div
                    role='button'
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
                    className='flex gap-[18px] items-start py-[22px] cursor-pointer transition-colors duration-300 ease-[ease] hover:text-vermilion'
                  >
                    <div className='flex-1 min-w-0 flex flex-col gap-[6px]'>
                      <div className='mono-label mono-sm flex gap-[10px] items-center flex-wrap text-muted'>
                        <span>{j.year[L]}</span>
                        {j.current && (
                          <span className='px-[9px] py-[3px] rounded-full bg-vermilion text-on-vermilion'>{t.current}</span>
                        )}
                      </div>
                      <div className='font-bold text-[clamp(20px,2vw,24px)] leading-[1.2]'>{j.title[L]}</div>
                      <div className='text-muted text-[15px]'>{j.company}</div>
                    </div>
                    <span
                      className={`w-[34px] h-[34px] flex-none grid place-items-center rounded-full border border-line transition-transform duration-[400ms] ease-dojo ${isOpen ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className='pb-[26px] flex flex-col gap-3'>
                      <ul className='m-0 pl-[18px] list-disc flex flex-col gap-[6px] text-[15px] text-soft'>
                        {(L ? j.achievementsEn : j.achievements).map((a) => (
                          <li key={a} className='[text-wrap:pretty]'>{a}</li>
                        ))}
                      </ul>
                      <div className='font-mono text-xs text-vermilion'>{j.tech}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className='flex flex-col gap-[14px]'>
            <div className='mono-label text-muted'>
              {t.education} <span className='kanji text-vermilion'>学</span>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3'>
              {Education.map((e) => (
                <div key={e.year} data-reveal className='px-5 py-[18px] rounded-2xl bg-surface border border-line flex flex-col gap-1'>
                  <div className='mono-label mono-sm text-vermilion'>{e.year}</div>
                  <div className='font-semibold text-base leading-[1.3]'>{e.title[L]}</div>
                  <div className='text-muted text-[13px]'>{e.school}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-[14px]'>
            <div className='mono-label text-muted'>
              {t.references} <span className='kanji text-vermilion'>信</span>
            </div>
            <div className='flex flex-wrap gap-[10px]'>
              {References.map((r) => (
                <div key={r.name} data-reveal className='px-[18px] py-3 rounded-full border border-line text-[15px]'>
                  <strong className='font-semibold'>{r.name}</strong>{' '}
                  <span className='text-muted'>— {r.role[L]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
