import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaCloudDownloadAlt, FaWhatsappSquare } from 'react-icons/fa';
import AvatarAndIcons from '../assets/images/AvatarAndIcons.svg';
import CV from '../assets/file/CV_Mohamed_THIARE.pdf';

function Hero() {
  const openWhatsapp = () => {
    window.open('https://wa.me/221773813060', '_blank');
  };

  return (
    <div className='space-y-12 mb-20 relative overflow-hidden pt-24 md:pt-28'>

      {/* Filigrane Kanji "Bushidō" (la voie du guerrier) */}
      <div className='kanji-watermark absolute -top-6 left-1/2 -translate-x-1/2 text-[28vw] md:text-[20vw] z-0 select-none'>武士道</div>

      <div className="hero flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-8 relative z-10">
        {/* Content */}
        <div className="hero__content space-y-4 md:space-y-6 z-10 text-center md:text-left w-full md:w-auto">
          <span className="inline-flex items-center gap-2 glass-effect text-gold text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-gold/30 hover:border-crimson/60 transition-all duration-300 hover:scale-105">
            <span className="text-crimson-light">ようこそ</span> · Bienvenue dans mon dōjō
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold gradient-text leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Mohamed <br />
            <span className="neon-text">THIARE</span>
          </h1>

          <p className="text-base md:text-xl font-medium text-washi" style={{ fontFamily: '"Shippori Mincho", serif' }}>
            Lead Tech · Développeur Full-Stack · Entrepreneur
          </p>

          <p className="text-sm md:text-base text-washi/60 max-w-md mx-auto md:mx-0 italic">
            « Discipline, précision et maîtrise — de la vision business jusqu'à la mise en production. »
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs md:text-sm text-washi/70">
            <span className="flex items-center gap-1.5">📍 Dakar, Sénégal</span>
            <a href="mailto:thiaremohamed.mt@gmail.com" className="flex items-center gap-1.5 hover:text-crimson-light transition-colors break-all">
              ✉️ thiaremohamed.mt@gmail.com
            </a>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
            <a href={CV}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto flex space-x-2 items-center justify-center bg-gradient-to-r from-crimson to-crimson-dark text-washi px-6 py-3 rounded-xl border border-crimson/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,16,46,0.6)] font-semibold text-sm md:text-base'>
              <span>Télécharger mon CV</span>
              <FaCloudDownloadAlt className='text-lg' />
            </a>
            <button
              onClick={openWhatsapp}
              className='w-full sm:w-auto flex space-x-2 items-center justify-center glass-effect text-gold hover:text-crimson-light px-6 py-3 rounded-xl border border-gold/40 hover:border-crimson/70 transition-all duration-300 hover:scale-105 font-semibold text-sm md:text-base'>
              <span>Me contacter</span>
              <FaWhatsappSquare className='text-lg' />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-3">
            <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/"
              className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(200,16,46,0.8)]'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/thiareMohamed"
              target='_blank'
              rel='noopener noreferrer'
              aria-label="GitHub"
              className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(200,16,46,0.8)]'>
              <FaGithubSquare />
            </a>
            <a href="https://twitter.com/ThiareMohamed29"
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Twitter"
              className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(200,16,46,0.8)]'>
              <FaTwitterSquare />
            </a>
          </div>
        </div>

        {/* Avatar avec disque "soleil levant" */}
        <div className="hero__image relative flex items-center justify-center">
          {/* Soleil levant tournant */}
          <div className='absolute w-72 h-72 md:w-96 md:h-96 rounded-full rising-sun opacity-90 animate-[pulse-soft_5s_ease-in-out_infinite]'></div>
          {/* Anneau or */}
          <div className='absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border border-gold/30 animate-[spin-slow_40s_linear_infinite]'></div>
          <img src={AvatarAndIcons} alt="Mohamed THIARE" className='w-60 h-60 md:w-80 md:h-80 relative z-10 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]' />
        </div>
      </div>

      {/* Bandeau "kamon" décoratif */}
      <div className="flex items-center justify-center gap-4 relative z-10 px-4">
        <span className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-crimson/60"></span>
        <span className="text-gold/80 text-sm tracking-[0.3em] font-samurai">侍 の 道</span>
        <span className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-crimson/60"></span>
      </div>
    </div>
  )
}

export default Hero;
