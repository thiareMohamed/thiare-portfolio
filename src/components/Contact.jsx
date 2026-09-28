import { useEffect, useRef, useState } from 'react';
import cv from '../assets/file/CV_Mohamed_THIARE.pdf';
import { useLang } from './LangContext';
import Footer from './Footer';
import { Letters, SectionLabel } from './ui';

const EMAIL = 'thiaremohamed.mt@gmail.com';

function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    try { navigator.clipboard && navigator.clipboard.writeText(EMAIL); } catch (e) {}
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    { label: t.phone, value: '+221 77 381 30 60', href: 'tel:+221773813060' },
    { label: 'WhatsApp', href: 'https://wa.me/221773813060' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-thiare-b49b03214/' },
    { label: 'GitHub', href: 'https://github.com/thiareMohamed' },
    { label: 'X', value: '@ThiareMohamed29', href: 'https://twitter.com/ThiareMohamed29' },
    { label: t.cv, value: 'PDF', href: cv, download: 'CV_Mohamed_THIARE.pdf' },
  ];

  return (
    <section id='contact' className='relative overflow-hidden pt-[clamp(100px,14vw,180px)] pb-12'>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_60%,oklch(0.36_0.12_36/0.5),transparent_70%)]'
      />
      <div className='container-dojo relative flex flex-col items-center text-center gap-8'>
        <SectionLabel num='06'>Contact</SectionLabel>
        <h2
          data-reveal
          aria-label={t.big}
          className='display m-0 text-[clamp(56px,14vw,230px)] leading-[0.85] flex justify-center flex-wrap'
        >
          <Letters text={t.big} />
        </h2>
        <p data-reveal className='m-0 max-w-[560px] text-lg text-soft [text-wrap:pretty]'>{t.contactLead}</p>
        <div data-reveal className='flex gap-[10px] flex-wrap justify-center'>
          <a
            href={`mailto:${EMAIL}`}
            className='flex items-center gap-[10px] px-[26px] py-4 rounded-full bg-vermilion text-on-vermilion text-base font-bold transition-transform duration-300 ease-dojo hover:-translate-y-[3px] hover:text-on-vermilion'
          >
            {EMAIL} ↗
          </a>
          <button
            onClick={copy}
            className='px-[22px] py-4 rounded-full bg-transparent border border-[color:oklch(1_0_0/0.2)] text-[15px] font-semibold cursor-pointer'
          >
            {copied ? t.copied : t.copy}
          </button>
        </div>
        <div data-reveal className='flex gap-2 flex-wrap justify-center mt-2'>
          {contacts.map((k) => (
            <a
              key={k.label}
              href={k.href}
              target={k.download ? undefined : '_blank'}
              rel='noopener noreferrer'
              download={k.download}
              className='mono-label mono-sm px-4 py-[10px] rounded-full border border-line bg-[color:oklch(0.13_0.006_40/0.6)] transition-[border-color] duration-[250ms] ease-[ease] hover:border-vermilion'
            >
              {k.label}
              {k.value && <span className='text-muted normal-case tracking-normal'> {k.value}</span>}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
