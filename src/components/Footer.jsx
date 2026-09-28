import { useLang } from './LangContext';
import { scrollToSection } from './ui';

function Footer() {
  const { t } = useLang();

  return (
    <footer className='container-dojo mono-label mono-sm relative flex justify-between items-center gap-5 flex-wrap mt-[clamp(96px,12vw,160px)] pt-6 border-t border-line text-muted'>
      <span>© 2026 Mohamed Thiare · Dakar</span>
      <span className='normal-case tracking-normal font-sans italic text-sm'>{t.footQuote}</span>
      <button
        onClick={() => scrollToSection('top')}
        className='mono-label mono-sm bg-transparent border-0 p-0 cursor-pointer text-paper'
      >
        {t.backTop} ↑
      </button>
    </footer>
  );
}

export default Footer;
