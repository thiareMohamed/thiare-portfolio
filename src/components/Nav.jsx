import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SECTIONS } from '../assets/data/translations';
import { useLang } from './LangContext';
import { scrollToSection } from './ui';

function Nav() {
  const { t, lang, setLang } = useLang();
  const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === '/';

  // Scroll-spy : dernière section dont le haut est au-dessus de 40 % du viewport
  useEffect(() => {
    if (!onHome) { setActive(''); return undefined; }
    let throttle = 0;
    const spy = () => {
      let cur = '';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      });
      setActive(cur);
    };
    const onScroll = () => {
      if (throttle) return;
      throttle = setTimeout(() => { throttle = 0; spy(); }, 60);
    };
    spy();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      clearTimeout(throttle);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onHome]);

  const go = (id) => {
    if (onHome) scrollToSection(id);
    else navigate('/', { state: { scrollTo: id } });
  };

  const langBtn = (code) => (
    <button
      onClick={() => setLang(code)}
      className={`border-0 rounded-full px-[9px] py-[5px] cursor-pointer uppercase ${
        lang === code ? 'bg-vermilion text-on-vermilion' : 'bg-transparent text-muted'
      }`}
    >
      {code}
    </button>
  );

  return (
    <header className='fixed top-[14px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-28px)] max-w-[1200px] box-border flex justify-between items-center gap-3 py-2 pr-2 pl-[14px] rounded-full bg-[color:oklch(0.13_0.006_40/0.72)] border border-line backdrop-blur-[16px]'>
      <button onClick={() => go('top')} className='flex items-center gap-[10px] bg-transparent border-0 p-0 cursor-pointer'>
        <span className='kanji w-[30px] h-[30px] grid place-items-center bg-vermilion text-on-vermilion rounded-lg text-base -rotate-6'>侍</span>
        <span className='mono-label font-medium text-paper'>Thiare</span>
      </button>

      <nav className='hidden nav:flex gap-[2px]'>
        {SECTIONS.map((id, i) => (
          <button
            key={id}
            onClick={() => go(id)}
            className={`border-0 rounded-full px-[14px] py-2 cursor-pointer text-sm transition-[background,color] duration-[250ms] ease-[ease] ${
              active === id ? 'bg-[color:oklch(1_0_0/0.08)] text-paper' : 'bg-transparent text-muted'
            }`}
          >
            {t.nav[i]}
          </button>
        ))}
      </nav>

      <div className='flex items-center gap-2'>
        <div className='flex rounded-full p-[3px] border border-line font-mono text-[11px]'>
          {langBtn('fr')}
          {langBtn('en')}
        </div>
        <button
          onClick={() => go('contact')}
          className='border-0 rounded-full px-4 py-[10px] cursor-pointer bg-paper text-on-vermilion text-sm font-semibold transition-[background] duration-[250ms] ease-[ease] hover:bg-vermilion'
        >
          {t.talk}
        </button>
      </div>
    </header>
  );
}

export default Nav;
