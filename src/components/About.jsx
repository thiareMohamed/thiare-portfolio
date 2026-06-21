import React from 'react'
import ProjectsIcon from '../assets/images/ProjectsIcon.svg'
import DesignIcon from '../assets/images/DesignIcon.svg'
import CodeIcon from '../assets/images/CodeIcon.svg'
import ThiarePhoto from '../assets/images/ThiarePhoto.jfif'

function About() {
  const qualites = [
    "Esprit d'équipe & communication",
    'Résolution de problèmes',
    'Autonomie & rigueur',
    'Adaptabilité continue',
    'Leadership & initiative',
    'Gestion du stress',
  ];

  return (
    <div className='relative py-20'>
      {/* Stats Cards */}
      <div className='border-y border-gold/25 px-4 md:px-30 py-10 sm:py-10 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-crimson/5 via-gold/5 to-crimson/5'></div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center items-center px-4 sm:px-10 py-5 mt-10 relative z-10'>
          <div className='text-center glass-effect border rounded-xl md:rounded-2xl border-crimson/30 p-6 md:p-8 hover-lift hover:border-crimson/60 transition-all duration-300 group'>
            <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
              <img src={ProjectsIcon} alt='Expérience' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(56,140,224,0.5)]' />
            </div>
            <span className='text-xs md:text-sm text-crimson-light font-semibold block mb-2'>+4 ans</span>
            <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{ fontFamily: 'Cinzel, serif' }}>Expérience</h3>
          </div>

          <div className='text-center glass-effect border rounded-xl md:rounded-2xl border-gold/40 p-6 md:p-8 bg-gradient-to-br from-crimson/10 to-gold/10 hover-lift hover:border-gold/70 transition-all duration-300 group'>
            <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
              <img src={CodeIcon} alt='Projets' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]' />
            </div>
            <span className='text-xs md:text-sm text-gold font-semibold block mb-2'>15+ projets</span>
            <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{ fontFamily: 'Cinzel, serif' }}>Réalisations</h3>
          </div>

          <div className='text-center glass-effect border rounded-xl md:rounded-2xl border-crimson/30 p-6 md:p-8 hover-lift hover:border-crimson/60 transition-all duration-300 group'>
            <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
              <img src={DesignIcon} alt='Leadership' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(56,140,224,0.5)]' />
            </div>
            <span className='text-xs md:text-sm text-crimson-light font-semibold block mb-2'>Lead Tech</span>
            <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{ fontFamily: 'Cinzel, serif' }}>Leadership</h3>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='flex flex-col sm:flex-row sm:justify-around sm:items-center p-6 sm:p-10 md:p-20 relative'>
        <div className='relative mb-6 sm:mb-0 mx-auto sm:mx-0'>
          <div className='absolute inset-0 rising-sun rounded-full blur-2xl opacity-50 animate-[pulse-soft_5s_ease-in-out_infinite]'></div>
          <div className='relative border-2 md:border-4 border-gold/50 rounded-full p-1.5 md:p-2 hover:border-crimson transition-all duration-300 hover:scale-105'>
            <img src={ThiarePhoto} alt="Mohamed THIARE" className='rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover drop-shadow-[0_0_30px_rgba(56,140,224,0.5)]' />
          </div>
          <span className='hanko absolute -bottom-2 -right-2 w-12 h-12 text-lg rotate-6' aria-hidden="true">武</span>
        </div>

        <div className='w-full sm:w-1/2 sm:px-4 md:px-8 sm:py-2 mt-6 sm:mt-10 space-y-4 sm:space-y-6'>
          <span className="inline-block glass-effect text-gold text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-gold/30">
            🥷 À propos · 自己紹介
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center sm:text-left brush-underline' style={{ fontFamily: 'Cinzel, serif' }}>
            Mohamed THIARE
          </h2>
          <div className='glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 border border-gold/20 hover:border-crimson/40 transition-all duration-300'>
            <p className='text-xs sm:text-sm md:text-base text-washi/80 leading-relaxed space-y-2 md:space-y-3'>
              <span className='block'>⚔️ Développeur <span className='text-crimson-light font-semibold'>Full-Stack</span> et <span className='text-gold font-semibold'>Lead Tech</span> expérimenté, spécialisé dans la conception et le déploiement d'architectures web et mobiles modernes, robustes et scalables.</span>
              <span className='block'>🗾 Expertise marquée sur les écosystèmes JavaScript (<span className='text-crimson-light'>Nuxt.js, NestJS, Angular</span>) et <span className='text-crimson-light'>Java / Spring Boot</span>.</span>
              <span className='block'>🏯 Habitué à piloter des équipes et à mener des projets complexes de bout en bout, de la vision business jusqu'à la mise en production.</span>
              <span className='block'>🎓 Master en Génie Logiciel (ISI Dakar), certifié Développeur Web & Mobile (Simplon Sénégal), Licence en Informatique & Gestion (Ensup Afrique).</span>
            </p>
          </div>

          {/* Qualités */}
          <div className='glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 border border-crimson/20'>
            <h4 className='text-gold font-semibold mb-3 text-sm md:text-base' style={{ fontFamily: '"Shippori Mincho", serif' }}>Mes valeurs · 美徳</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {qualites.map((q, i) => (
                <span key={i} className='flex items-start text-xs sm:text-sm text-washi/80'>
                  <span className='text-crimson-light mr-2 mt-0.5 flex-shrink-0'>⛩</span>
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
