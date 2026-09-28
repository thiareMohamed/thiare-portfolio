import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangContext';
import HeroScene from './HeroScene';
import { Letters, scrollToSection } from './ui';

const dakarTime = () =>
  new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dakar' });

function Hero() {
  const { t } = useLang();
  const heroRef = useRef(null);
  const [time, setTime] = useState(dakarTime);

  useEffect(() => {
    const id = setInterval(() => setTime(dakarTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id='top'
      ref={heroRef}
      className='relative min-h-[max(100svh,720px)] flex flex-col justify-end overflow-hidden'
    >
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-[radial-gradient(60%_70%_at_72%_45%,oklch(0.36_0.12_36/0.55),transparent_70%)]'
      />
      <HeroScene heroRef={heroRef} />
      <div
        aria-hidden='true'
        className='kanji absolute left-[clamp(12px,2vw,28px)] top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-sm tracking-[0.6em] text-[color:oklch(0.5_0.01_60)]'
      >
        武士道 · 侍の道
      </div>

      <div className='container-dojo relative z-[2] pt-[120px] pb-10 pointer-events-none'>
        <div
          data-reveal
          className='mono-label mono-sm inline-flex items-center gap-[10px] px-[14px] py-[7px] rounded-full border border-line bg-[color:oklch(0.13_0.006_40/0.5)] text-muted pointer-events-auto'
        >
          <span className='w-[7px] h-[7px] rounded-full bg-vermilion animate-pulse-dot' />
          <span className='whitespace-nowrap'>{t.status} — Dakar {time}</span>
        </div>

        <h1
          data-reveal
          aria-label='Mohamed Thiare'
          className='display mt-6 mb-0 text-[clamp(64px,13.5vw,220px)] leading-[0.84] pointer-events-auto'
        >
          <div className='flex' aria-hidden='true'><Letters text='MOHAMED' /></div>
          <div className='flex items-end gap-[0.12em]' aria-hidden='true'>
            <div className='flex'><Letters text='THIARE' /></div>
            <span className='kanji text-[0.34em] leading-[1.3] text-vermilion normal-case'>侍</span>
          </div>
        </h1>

        <div className='flex justify-between items-end gap-8 flex-wrap mt-9'>
          <div className='flex flex-col gap-[22px] max-w-[520px] pointer-events-auto'>
            <div data-reveal className='mono-label text-vermilion'>{t.kicker}</div>
            <p data-reveal className='m-0 text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-soft [text-wrap:pretty]'>
              {t.heroLead}
            </p>
            <div data-reveal className='flex gap-[10px] flex-wrap'>
              <button
                onClick={() => scrollToSection('projects')}
                className='flex items-center gap-[10px] px-6 py-[15px] bg-vermilion text-on-vermilion border-0 rounded-full text-[15px] font-bold cursor-pointer transition-transform duration-300 ease-dojo hover:-translate-y-[3px] hover:scale-[1.02]'
              >
                {t.seeProjects} <span>↘</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-6 py-[15px] bg-transparent border border-[color:oklch(1_0_0/0.2)] rounded-full text-[15px] font-semibold cursor-pointer transition-[border-color] duration-300 ease-[ease] hover:border-paper'
              >
                {t.contactBtn}
              </button>
            </div>
          </div>
          <div data-reveal className='mono-label mono-sm flex items-center gap-[10px] text-muted'>
            <span className='animate-bob'>↓</span>{t.scroll}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
