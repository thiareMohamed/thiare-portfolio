import { useEffect } from 'react';

const EASE = 'cubic-bezier(.2,.7,.2,1)';

// Révèle les éléments [data-reveal] quand leur haut passe sous 92 % du viewport.
// Listener scroll throttlé + filet de sécurité (pas seulement IntersectionObserver).
// Un élément révélé reçoit l'événement `reveal` (utilisé par les compteurs).
export default function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = new WeakSet();
    const pending = new Set();
    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => { timers.delete(id); fn(); }, ms);
      timers.add(id);
    };

    const show = (el, delay) => {
      if (reduced) {
        el.dispatchEvent(new CustomEvent('reveal', { detail: { delay: 0, instant: true } }));
        return;
      }
      el.style.transitionDelay = delay + 'ms';
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.dispatchEvent(new CustomEvent('reveal', { detail: { delay } }));
      // Rend la main aux styles CSS (hovers qui utilisent transform/transition)
      const slow = el.dataset.reveal === 'slow';
      later(() => {
        ['opacity', 'transform', 'transition', 'transition-delay'].forEach((p) => el.style.removeProperty(p));
      }, delay + (slow ? 2100 : 1000));
    };

    const check = () => {
      if (!pending.size) return;
      const h = window.innerHeight * 0.92;
      let i = 0;
      pending.forEach((el) => {
        if (!el.isConnected) { pending.delete(el); return; }
        if (el.getBoundingClientRect().top < h) {
          pending.delete(el);
          const d = Math.min(i++ * 70, 490);
          later(() => show(el, d), 20);
        }
      });
    };

    const collect = () => {
      const fresh = [];
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (!reduced) {
          const slow = el.dataset.reveal === 'slow';
          el.style.transition = 'none';
          el.style.opacity = '0';
          el.style.transform = slow ? 'translateY(40px) scale(0.96)' : 'translateY(28px)';
        }
        fresh.push(el);
      });
      if (!fresh.length) return;
      if (!reduced) {
        void document.body.offsetHeight; // applique l'état initial avant la transition
        fresh.forEach((el) => {
          el.style.transition = el.dataset.reveal === 'slow'
            ? `opacity 1.6s ease, transform 2s ${EASE}`
            : `opacity .8s ease, transform .9s ${EASE}`;
        });
      }
      fresh.forEach((el) => pending.add(el));
      check();
    };

    let throttle = 0;
    const onScroll = () => {
      if (throttle) return;
      throttle = setTimeout(() => { throttle = 0; check(); }, 60);
    };

    collect();
    const safety = setTimeout(check, 1200);
    const mo = new MutationObserver(collect);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const onVis = () => { if (document.visibilityState === 'visible') check(); };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      mo.disconnect();
      clearTimeout(safety);
      clearTimeout(throttle);
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);
}
