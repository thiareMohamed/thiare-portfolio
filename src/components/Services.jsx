import React from 'react'
import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaUsersCog, FaCogs } from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: FaCode,
      kanji: '技',
      title: 'Développement Web',
      description: "Applications web modernes, robustes et scalables avec Nuxt 3, Next.js, Angular et Vue.js.",
      features: ['SPA & SSR/SSG', 'Architecture scalable', 'Performance', 'Code maintenable']
    },
    {
      icon: FaMobileAlt,
      kanji: '動',
      title: 'Développement Mobile',
      description: "Applications mobiles natives multiplateformes avec Flutter & FlutterFlow pour iOS et Android.",
      features: ['Cross-platform', 'Apps natives', 'Temps réel', 'Géolocalisation']
    },
    {
      icon: FaCloud,
      kanji: '繋',
      title: 'Backend & API',
      description: "APIs REST robustes et systèmes événementiels avec NestJS, Spring Boot et Kafka.",
      features: ['API REST', 'Kafka / Event-driven', 'Microservices', 'Keycloak / Auth']
    },
    {
      icon: FaDatabase,
      kanji: '蔵',
      title: 'Données & Stockage',
      description: "Conception de bases SQL/NoSQL et stockage objet sécurisé et scalable.",
      features: ['PostgreSQL', 'MongoDB', 'MinIO Object Storage', 'Optimisation']
    },
    {
      icon: FaUsersCog,
      kanji: '将',
      title: 'Lead Tech & Pilotage',
      description: "Choix architecturaux, encadrement d'équipes, revues de code et bonnes pratiques.",
      features: ['Architecture', 'Encadrement', 'Code review', 'Agile / Scrum / Kanban']
    },
    {
      icon: FaCogs,
      kanji: '築',
      title: 'DevOps & Infrastructure',
      description: "Conteneurisation et déploiement continu avec Docker, Portainer, GitLab CI/CD et Azure.",
      features: ['Docker & Portainer', 'CI/CD GitLab', 'Azure', 'Monitoring']
    }
  ];

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      <div className='text-center mb-10 sm:mb-16'>
        <div className='space-y-4 sm:space-y-6'>
          <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
            🏹 Services · 提供
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text brush-underline' style={{ fontFamily: 'Cinzel, serif' }}>
            L'art du code maîtrisé
          </h2>
          <p className='text-washi/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 pt-2'>
            Des solutions complètes, du frontend au backend, en passant par le mobile et le DevOps.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto'>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className='glass-effect border border-gold/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-crimson/60 transition-all duration-300 hover-lift group relative overflow-hidden'
            >
              {/* Filigrane kanji */}
              <span className='kanji-watermark absolute -bottom-4 -right-2 text-8xl group-hover:text-crimson/10 transition-colors duration-500'>{service.kanji}</span>

              <div className='absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <div className='mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                  <div className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-crimson/20 to-gold/20 border border-gold/30 group-hover:border-crimson/60 transition-all duration-300'>
                    <Icon className='text-2xl md:text-3xl text-gold group-hover:text-crimson-light transition-colors duration-300' />
                  </div>
                </div>

                <h3 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2 sm:mb-3' style={{ fontFamily: 'Cinzel, serif' }}>
                  {service.title}
                </h3>

                <p className='text-washi/70 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed'>
                  {service.description}
                </p>

                <ul className='space-y-1.5 sm:space-y-2'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-xs sm:text-sm text-washi/60'>
                      <span className='text-crimson-light mr-2'>▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services
