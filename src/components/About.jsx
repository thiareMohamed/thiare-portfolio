import { useEffect, useRef, useState } from 'react';
import samourai from '../assets/images/samourai-codeur.png';
import { useLang } from './LangContext';
import { SectionLabel } from './ui';

const finePointer = () => window.matchMedia('(pointer:fine)').matches;

// Compteur qui s'anime quand useReveal le révèle (40 pas × 28 ms, easeOutCubic)
function Counter({ n }) {
  const ref = useRef(null);
  const [value, setValue] = useState(n);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let iv = 0, to = 0, done = false;
    const onReveal = (e) => {
      if (done) return;
      done = true;
      if (e.detail && e.detail.instant) { setValue(n); return; }
      setValue(0);
      to = setTimeout(() => {
        let k = 0;
        const steps = 40;
        iv = setInterval(() => {
          k++;
          setValue(Math.round(n * (1 - Math.pow(1 - k / steps, 3))));
          if (k >= steps) clearInterval(iv);
        }, 28);
      }, (e.detail && e.detail.delay) || 0);
    };
    el.addEventListener('reveal', onReveal);
    return () => { el.removeEventListener('reveal', onReveal); clearTimeout(to); clearInterval(iv); };
  }, [n]);

  return <span ref={ref} data-reveal>{value}</span>;
}

function About() {
  const { t } = useLang();
  const tiltRef = useRef(null);

  const tiltMove = (e) => {
    const el = tiltRef.current;
    if (!el || !finePointer()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = 'transform .12s linear';
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  };
  const tiltLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
    el.style.transform = 'none';
  };

  return (
    <section id='about' className='section-pad'>
      <div className='container-dojo'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-y-14 gap-x-[clamp(40px,6vw,96px)] items-center'>
          <div data-reveal className='relative max-w-[480px] w-full justify-self-center'>
            <div
              ref={tiltRef}
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
              className='relative aspect-[4/5] rounded-[24px] overflow-hidden border border-line shadow-[0_50px_100px_-40px_oklch(0.5_0.18_36/0.55)] transition-transform duration-500 ease-dojo will-change-transform'
            >
              <img src={samourai} alt={t.photoAlt} className='w-full h-full object-cover block' />
              <div className='absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(to_top,oklch(0.13_0.006_40/0.85),transparent)]' />
              <div className='absolute left-[18px] bottom-[18px] right-[18px] flex items-center gap-3'>
                <span className='kanji w-10 h-10 grid place-items-center bg-vermilion text-on-vermilion rounded-[10px] text-xl'>武</span>
                <span className='mono-label mono-sm text-paper'>{t.photoTag}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-7'>
            <SectionLabel num='01'>{t.aboutLabel}</SectionLabel>
            <h2 data-reveal className='display m-0 text-[clamp(48px,6.4vw,96px)] leading-[0.9]'>
              <div>{t.w1}</div>
              <div className='[font-variation-settings:"wdth"_125]'>{t.w2}</div>
              <div className='text-vermilion'>{t.w3}</div>
            </h2>
            <p data-reveal className='m-0 text-[clamp(18px,1.6vw,21px)] leading-[1.5] text-soft [text-wrap:pretty] max-w-[560px]'>
              {t.about1}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 mt-[clamp(64px,8vw,104px)]'>
          {t.principles.map(([k, name, text]) => (
            <div key={k} data-reveal className='p-7 rounded-[20px] bg-surface border border-line flex flex-col gap-[14px]'>
              <div className='flex items-baseline gap-[14px]'>
                <span className='kanji text-[52px] leading-none text-vermilion'>{k}</span>
                <span className='mono-label text-paper'>{name}</span>
              </div>
              <p className='m-0 text-[15px] text-muted [text-wrap:pretty]'>{text}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6 mt-14 pt-10 border-t border-line'>
          {t.counters.map(([n, suf, label]) => (
            <div key={label} className='flex flex-col gap-[6px]'>
              <div className='display text-[clamp(64px,8vw,112px)] leading-[0.9] [font-variation-settings:"wdth"_110]'>
                <Counter n={n} />
                <span className='text-vermilion'>{suf}</span>
              </div>
              <div className='mono-label text-muted'>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
