import { useEffect, useRef, useState } from 'react';

// Anneau vermillon qui suit le curseur (lerp .2), agrandi sur les éléments cliquables
function Cursor() {
  const ringRef = useRef(null);
  const [fine] = useState(() => window.matchMedia('(pointer:fine)').matches);

  useEffect(() => {
    if (!fine) return undefined;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };
    let raf = 0;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const ring = ringRef.current;
      if (!ring) return;
      const hot = e.target.closest && e.target.closest('a,button,[role=button]');
      ring.style.width = ring.style.height = hot ? '56px' : '34px';
      ring.style.margin = hot ? '-28px 0 0 -28px' : '-17px 0 0 -17px';
      ring.style.background = hot ? 'oklch(0.66 0.21 36 / 0.15)' : 'transparent';
    };
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const ring = ringRef.current;
      if (!ring) return;
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      ring.style.transform = `translate(${pos.x}px,${pos.y}px)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [fine]);

  if (!fine) return null;
  return (
    <div
      ref={ringRef}
      aria-hidden='true'
      className='fixed left-0 top-0 z-[60] w-[34px] h-[34px] -mt-[17px] -ml-[17px] rounded-full border border-vermilion pointer-events-none [transition:width_.25s_ease,height_.25s_ease,margin_.25s_ease,background_.25s_ease]'
    />
  );
}

export default Cursor;
