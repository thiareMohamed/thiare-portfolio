import React from 'react'

function Parcours() {
  const experiences = [
    {
      year: 'Fév 2025 – Sep 2025',
      title: 'Développeur Full Stack',
      company: 'Eyone – Dakar',
      technologies: 'Nest.js, Angular, Kafka, MongoDB, Keycloak, Docker',
      achievements: [
        'Réalisation du projet Topatoko',
        'Système de gestion de rendez-vous et messagerie',
        'Projet ViziPass pour le Building Administratif',
        'Module de gestion d\'événements',
        'Développeur backend de la plateforme de démarches administratives'
      ]
    },
    {
      year: 'Mai 2024 – Jan 2025',
      title: 'Développeur Full Stack',
      company: '2SI – Projet Marché Public du Sénégal, Dakar',
      technologies: 'Nuxt.js, Spring, Kafka, PostgreSQL, Keycloak, Docker',
      achievements: [
        'Gestion des autorités contractantes et organes de contrôle',
        'Clone de Trello pour gestion des tâches',
        'Système de dénonciation anonyme',
        'Génération automatique de PV de carence',
        'Statistiques et tableaux de bord dynamiques',
        'Refonte complète du portail du Marché Public du Sénégal'
      ]
    },
    {
      year: 'Nov 2023 – Fév 2024',
      title: 'Lead Développeur Full Stack',
      company: 'Lohi Foundation, Dakar, Sénégal',
      technologies: 'Angular, Nuxt 3, Next.js, Nest.js, Docker',
      achievements: [
        'Management d\'une équipe de 3 développeurs',
        'Système de gestion de projets communautaires',
        'Gestion des promoteurs, témoignages et utilisateurs',
        'Dashboards personnalisés pour administrateurs',
        'Présentations régulières aux parties prenantes'
      ]
    },
    {
      year: 'Sep 2023 – Jan 2024',
      title: 'Développeur Mobile (Freelance - Remote)',
      company: 'Bookfighters, France',
      technologies: 'FlutterFlow, Firebase',
      achievements: [
        'Application mobile connectant boxeurs, arbitres, clubs et fédérations',
        'Système de publication et interactions sociales',
        'Chat en temps réel',
        'Géolocalisation des clubs et fédérations'
      ]
    },
    {
      year: 'Août 2022 – Jan 2023',
      title: 'Développeur Full Stack',
      company: 'Vision Stats, Dakar, Sénégal',
      technologies: 'Ionic (PWA), Java/Spring Boot, Angular, JHipster, Azure, Docker, MySQL',
      achievements: [
        'Application mobile hors ligne pour gestion de carburant',
        'Gestion des produits de la station (Baie de lavage)',
        'Gestion des gérants et affectations',
        'Gestion des cuves et des pompes',
        'Gestion des versements',
        'Dashboard de statistiques interactif'
      ]
    }
  ];

  const formations = [
    {
      year: '2022 - 2024',
      title: 'Master en Génie Logiciel',
      company: 'Institut Supérieur d\'Informatique, Dakar, Sénégal',
      description: 'Formation approfondie en génie logiciel et architecture des systèmes'
    },
    {
      year: '2018 - 2021',
      title: 'Licence en Informatique et Gestion',
      company: 'Ensup Afrique',
      description: 'Formation en informatique de gestion et développement d\'applications'
    },
    {
      year: '2021 - 2022',
      title: 'Certification Développeur Web et Mobile',
      company: 'Simplon Sénégal, Dakar, Sénégal',
      description: 'Formation intensive en développement web et mobile'
    },
    {
      year: '2017 - 2018',
      title: 'Baccalauréat',
      company: 'Lycée Valdiodio NDIAYE - Kaolack',
      description: 'Baccalauréat général'
    }
  ];

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      {/* Expériences Professionnelles */}
      <div className='text-center mb-12 sm:mb-20'>
        <div className='space-y-4 sm:space-y-6 mb-8 sm:mb-16'>
          <span className="inline-block glass-effect text-sky-400 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-sky-400/30">
            💼 Expériences Professionnelles
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
            Mon Parcours Professionnel
          </h2>
        </div>

        <div className='max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8'>
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className='glass-effect border-2 border-sky-400/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-left hover:border-sky-400/60 transition-all duration-300 hover-lift group relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-sky-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4'>
                  <span className='text-sky-400 font-semibold text-xs sm:text-sm mb-1 md:mb-0'>{exp.year}</span>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
                    {exp.title}
                  </h3>
                </div>
                <p className='text-purple-400 font-medium text-sm sm:text-base mb-2 sm:mb-3'>{exp.company}</p>
                <p className='text-cyan-400 text-xs sm:text-sm mb-3 sm:mb-4 font-mono break-words'>{exp.technologies}</p>
                <ul className='text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed space-y-1.5 sm:space-y-2'>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className='flex items-start'>
                      <span className='text-sky-400 mr-2 mt-0.5 flex-shrink-0'>▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formation */}
      <div className='text-center'>
        <div className='space-y-4 sm:space-y-6 mb-8 sm:mb-16'>
          <span className="inline-block glass-effect text-purple-400 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400/30">
            🎓 Formation
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
            Mon Parcours Académique
          </h2>
        </div>

        <div className='max-w-4xl mx-auto space-y-4 sm:space-y-6'>
          {formations.map((formation, index) => (
            <div 
              key={index}
              className='glass-effect border-2 border-purple-400/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-left hover:border-purple-400/60 transition-all duration-300 hover-lift group relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4'>
                  <span className='text-purple-400 font-semibold text-xs sm:text-sm mb-1 md:mb-0'>{formation.year}</span>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
                    {formation.title}
                  </h3>
                </div>
                <p className='text-pink-400 font-medium text-sm sm:text-base mb-2'>{formation.company}</p>
                <p className='text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed'>{formation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Parcours