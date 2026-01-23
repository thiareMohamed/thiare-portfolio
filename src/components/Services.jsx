import React from 'react'
import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaPalette, FaCogs } from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'Développement Web',
      description: 'Création d\'applications web modernes et performantes avec les dernières technologies (Angular, React, Vue.js, Next.js, Nuxt.js)',
      features: ['Applications SPA', 'SSR & SSG', 'PWA', 'Architecture scalable']
    },
    {
      icon: FaMobileAlt,
      title: 'Développement Mobile',
      description: 'Développement d\'applications mobiles cross-platform avec Flutter et Ionic pour iOS et Android',
      features: ['Applications natives', 'Cross-platform', 'Offline-first', 'Performance optimale']
    },
    {
      icon: FaCloud,
      title: 'Backend & API',
      description: 'Conception et développement d\'APIs RESTful robustes avec Spring Boot, Nest.js et gestion de microservices',
      features: ['RESTful APIs', 'Microservices', 'Architecture cloud', 'Scalabilité']
    },
    {
      icon: FaDatabase,
      title: 'Bases de Données',
      description: 'Conception et optimisation de bases de données SQL (MySQL, PostgreSQL) et NoSQL (MongoDB)',
      features: ['Optimisation', 'Migration', 'Sécurité', 'Performance']
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Création d\'interfaces utilisateur modernes et intuitives avec une attention particulière à l\'expérience utilisateur',
      features: ['Design moderne', 'Responsive', 'Accessibilité', 'Prototypage']
    },
    {
      icon: FaCogs,
      title: 'DevOps & Infrastructure',
      description: 'Mise en place de pipelines CI/CD, containerisation avec Docker et déploiement sur cloud (AWS, Azure)',
      features: ['CI/CD', 'Docker', 'Cloud deployment', 'Monitoring']
    }
  ];

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      <div className='text-center mb-8 sm:mb-16'>
        <div className='space-y-4 sm:space-y-6'>
          <span className="inline-block glass-effect text-purple-400 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400/30">
            🚀 Services
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
            Ce que je peux faire pour vous
          </h2>
          <p className='text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4'>
            Des solutions complètes du développement frontend au backend, en passant par le mobile et le DevOps
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto'>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className='glass-effect border-2 border-sky-400/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-sky-400/60 transition-all duration-300 hover-lift group relative overflow-hidden'
            >
              {/* Effet de fond au survol */}
              <div className='absolute inset-0 bg-gradient-to-br from-sky-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              <div className='relative z-10'>
                {/* Icône */}
                <div className='mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                  <div className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-sky-400/20 to-purple-400/20 border border-sky-400/30 group-hover:border-sky-400/60 transition-all duration-300'>
                    <Icon className='text-2xl sm:text-2xl md:text-3xl text-sky-400 group-hover:text-purple-400 transition-colors duration-300' />
                  </div>
                </div>

                {/* Titre */}
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2 sm:mb-3' style={{fontFamily: 'Orbitron, sans-serif'}}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features */}
                <ul className='space-y-1.5 sm:space-y-2'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-xs sm:text-sm text-gray-400'>
                      <span className='text-sky-400 mr-2'>▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Effet de brillance */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services

