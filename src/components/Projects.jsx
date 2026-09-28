import { useEffect, useRef, useState } from 'react';
import { Projects as ProjectList } from '../assets/data/projects';
import { useLang } from './LangContext';
import { SectionLabel } from './ui';

const domainOf = (url) => url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];

function Projects() {
  const { t, L } = useLang();
  const [open, setOpen] = useState(-1);
  const previewRef = useRef(null);
  const previewImg = useRef(null);
  const fine = useRef(false);

  // La preview flottante suit le curseur (pointer:fine uniquement)
  useEffect(() => {
    fine.current = window.matchMedia('(pointer:fine)').matches;
    const onMove = (e) => {
      const pv = previewRef.current;
      if (pv) pv.style.transform = `translate(${e.clientX + 28}px,${e.clientY - 110}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const hidePreview = () => {
    if (previewRef.current) previewRef.current.style.opacity = '0';
  };

  const enter = (p, i) => {
    const pv = previewRef.current, im = previewImg.current;
    if (!pv || !im) return;
    if (!fine.current || !p.image || open === i) { pv.style.opacity = '0'; return; }
    im.src = p.image;
    pv.style.opacity = '1';
  };

  const toggle = (i) => {
    setOpen(open === i ? -1 : i);
    hidePreview();
  };

  return (
    <section id='projects' className='section-pad'>
      <div className='container-dojo'>
        <div className='flex justify-between items-end gap-6 flex-wrap mb-12'>
          <div className='flex flex-col gap-6'>
            <SectionLabel num='03'>{t.projectsLabel}</SectionLabel>
            <h2 data-reveal className='display h2-dojo'>
              {t.projectsTitle}<span className='text-vermilion'>.</span>
            </h2>
          </div>
          <div data-reveal className='mono-label mono-sm text-muted max-w-[280px]'>{t.projectsHint}</div>
        </div>

        <div onMouseLeave={hidePreview} className='border-b border-line'>
          {ProjectList.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.id} data-reveal className='border-t border-line'>
                <div
                  role='button'
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
                  onMouseEnter={() => enter(p, i)}
                  className='flex items-center gap-[clamp(14px,2.4vw,32px)] py-[clamp(20px,2.6vw,30px)] cursor-pointer text-paper [transition:color_.3s_ease,padding_.4s_cubic-bezier(.2,.7,.2,1)] hover:text-vermilion hover:pl-[14px]'
                >
                  <span className='mono-label text-muted min-w-[28px]'>{String(i + 1).padStart(2, '0')}</span>
                  <span className='display flex-1 min-w-0 text-[clamp(26px,4.4vw,60px)] leading-[0.95] [font-variation-settings:"wdth"_88] [overflow-wrap:anywhere]'>
                    {p.short || p.title}
                  </span>
                  <span className='mono-label mono-sm text-muted text-right max-w-[180px]'>{p.category[L]}</span>
                  <span
                    className={`w-10 h-10 flex-none grid place-items-center rounded-full border border-line text-xl transition-transform duration-[400ms] ease-dojo ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </div>

                {isOpen && (
                  <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-y-7 gap-x-12 pt-1 pb-9'>
                    <div className='flex flex-col gap-4'>
                      <div className='font-semibold text-xl'>{p.title}</div>
                      <p className='m-0 text-[color:oklch(0.82_0.012_75)] text-base [text-wrap:pretty]'>
                        {L ? p.descriptionEn : p.description}
                      </p>
                      <div className='flex flex-wrap gap-[6px]'>
                        {p.stacks.map((s) => (
                          <span key={s} className='px-[11px] py-[5px] rounded-full bg-surface border border-line text-xs'>{s}</span>
                        ))}
                      </div>
                      {p.url && (
                        <a
                          href={p.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='self-start mt-[6px] px-5 py-3 rounded-full bg-vermilion text-on-vermilion text-sm font-bold hover:text-on-vermilion'
                        >
                          {domainOf(p.url)} ↗
                        </a>
                      )}
                    </div>
                    {p.image && (
                      <div className='aspect-[16/10] rounded-2xl overflow-hidden border border-line'>
                        <img src={p.image} alt={p.title} className='w-full h-full object-cover object-top block' />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={previewRef}
        aria-hidden='true'
        className='fixed left-0 top-0 z-30 w-[340px] aspect-[16/10] rounded-[14px] overflow-hidden pointer-events-none opacity-0 transition-opacity duration-300 ease-[ease] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] border border-line bg-surface'
      >
        <img ref={previewImg} alt='' className='w-full h-full object-cover object-top block' />
      </div>
    </section>
  );
}

export default Projects;
