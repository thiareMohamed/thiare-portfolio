// Petits éléments partagés entre sections

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el && id !== 'top') return;
  const top = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function SectionLabel({ num, children, className = '' }) {
  return (
    <div data-reveal className={`mono-label flex items-center gap-3 text-muted ${className}`}>
      <span className='text-vermilion'>{num}</span>
      <span className='w-10 h-px bg-line' />
      <span>{children}</span>
    </div>
  );
}

// Texte dont chaque lettre s'élargit au survol
export function Letters({ text }) {
  return text.split('').map((c, i) => (
    <span key={i} className='letter'>{c === ' ' ? ' ' : c}</span>
  ));
}
