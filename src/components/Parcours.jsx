import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

function Parcours() {
  const experiences = [
    {
      year: 'Depuis 2022',
      current: true,
      title: 'Lead Tech',
      company: 'Dexchange GROUP — Dakar, Sénégal',
      technologies: 'Architecture · Encadrement · Code Review · Bonnes pratiques',
      achievements: [
        'Pilotage technique des choix architecturaux et supervision complète du cycle de vie des applications du groupe.',
        'Encadrement technique des équipes de développement, revues de code et diffusion des bonnes pratiques.'
      ]
    },
    {
      year: 'Fév 2026 – Mai 2026',
      title: 'Développeur Full Stack & Fondateur',
      company: 'Tiossane Africa — Projet Teralink (teralink.sn)',
      technologies: 'Nuxt 3, NestJS, Flutter, PostgreSQL, MinIO',
      achievements: [
        "Conception et développement intégral de bout en bout d'une plateforme de réservation en ligne multiplateforme.",
        "Application web en Nuxt 3 et backend NestJS couplé à PostgreSQL.",
        "Application mobile native multiplateforme avec Flutter.",
        "Intégration de MinIO comme Object Storage pour la gestion sécurisée et scalable des médias."
      ]
    },
    {
      year: 'Jan 2026 – Mar 2026',
      title: 'Développeur Frontend',
      company: 'Projet Sama Gokh (samagokh.sn)',
      technologies: 'Nuxt 3, MinIO Object Storage',
      achievements: [
        "Frontend d'une application citoyenne de signalement des anomalies d'infrastructures publiques.",
        "Interface utilisateur fluide, réactive et optimisée avec Nuxt 3.",
        "Intégration MinIO pour la gestion et le chargement des images des signalements."
      ]
    },
    {
      year: 'Fév 2025 – Sept 2025',
      title: 'Développeur Full Stack',
      company: 'Eyone — Dakar, Sénégal',
      technologies: 'NestJS, Angular, Kafka, MongoDB, Keycloak, Docker',
      achievements: [
        "Participation active au projet de gestion logistique Topatoko.",
        "Système de gestion de rendez-vous et module de messagerie instantanée.",
        "Projet ViziPass (Building Administratif) : gestion des visites et des événements.",
        "Développeur backend sur la plateforme e-senegal (prestation avec la GOPA)."
      ]
    },
    {
      year: 'Mai 2024 – Jan 2025',
      title: 'Développeur Full Stack',
      company: '2SI — Projet du Marché Public du Sénégal, Dakar',
      technologies: 'Nuxt.js, Spring Boot, Kafka, PostgreSQL, Keycloak, Docker',
      achievements: [
        "Système de gestion des autorités contractantes et des organes de contrôle.",
        "Application de gestion des tâches (clone Trello) pour le suivi des missions d'audit.",
        "Système sécurisé et anonyme de dénonciation des irrégularités dans les appels d'offres.",
        "Module de génération automatique des procès-verbaux de carence.",
        "Graphiques dynamiques et refonte complète du portail national."
      ]
    },
    {
      year: 'Nov 2023 – Fév 2024',
      title: 'Lead Développeur Full Stack',
      company: 'Lohi Foundation — Dakar, Sénégal',
      technologies: 'Angular, Nuxt 3, Next.js, NestJS, Docker, Portainer, Hostinger',
      achievements: [
        "Management d'une équipe de 3 développeurs, coordination des sprints et présentations aux parties prenantes.",
        "Système de gestion de projets communautaires subventionnés (dashboards, promoteurs, témoignages).",
        "Mise en place de Docker et Portainer pour la gestion des conteneurs et des déploiements."
      ]
    },
    {
      year: 'Sept 2023 – Jan 2024',
      title: 'Développeur Mobile (Freelance)',
      company: 'Bookfighters — France (Remote)',
      technologies: 'Flutter, FlutterFlow, Géolocalisation, Real-time Chat',
      achievements: [
        "Application mobile connectant boxeurs, arbitres, clubs et fédérations.",
        "Système de publication, interactions sociales et chat en temps réel.",
        "Géolocalisation des clubs et fédérations."
      ]
    },
    {
      year: 'Août 2022 – Jan 2023',
      title: 'Développeur Full Stack',
      company: 'Vision Stats — Dakar, Sénégal',
      technologies: 'Java/Spring Boot, Angular, Ionic (PWA), MySQL, Azure',
      achievements: [
        "Application mobile hors ligne (PWA) pour la gestion de carburant en stations-service.",
        "Gestion des cuves, pompes, produits, gérants et versements.",
        "Dashboard de statistiques interactif."
      ]
    }
  ];

  const formations = [
    {
      year: '2022 – 2024',
      title: 'Master en Génie Logiciel',
      company: "Institut Supérieur d'Informatique (ISI) — Dakar, Sénégal",
      description: "Formation approfondie en génie logiciel et architecture des systèmes."
    },
    {
      year: '2021 – 2022',
      title: 'Certification Développeur Web et Mobile',
      company: 'Simplon Sénégal — Dakar, Sénégal',
      description: "Formation intensive en développement web et mobile."
    },
    {
      year: '2018 – 2021',
      title: 'Licence en Informatique et Gestion',
      company: 'Ensup Afrique — Dakar, Sénégal',
      description: "Formation en informatique de gestion et développement d'applications."
    },
    {
      year: '2017 – 2018',
      title: 'Baccalauréat',
      company: 'Lycée Valdiodio NDIAYE — Kaolack, Sénégal',
      description: 'Baccalauréat général.'
    }
  ];

  const references = [
    { name: 'Samba Bery KANE', role: 'Formateur à Simplon Sénégal' },
    { name: 'Malick DIOP', role: 'Software Engineer' },
  ];

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      {/* Expériences Professionnelles */}
      <div className='text-center mb-12 sm:mb-20'>
        <div className='space-y-4 sm:space-y-6 mb-10 sm:mb-16'>
          <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
            ⚔️ Expériences · 経験
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text brush-underline' style={{ fontFamily: 'Cinzel, serif' }}>
            La voie du guerrier
          </h2>
        </div>

        {/* Timeline */}
        <div className='max-w-5xl mx-auto relative'>
          {/* Ligne centrale */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crimson via-gold/50 to-transparent -translate-x-1/2'></div>

          <div className='space-y-6 md:space-y-10'>
            {experiences.map((exp, index) => (
              <div key={index} className={`md:flex md:items-center md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Carte */}
                <div className='md:w-1/2'>
                  <div className='glass-effect border border-crimson/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-7 text-left hover:border-crimson/60 transition-all duration-300 hover-lift group relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-br from-crimson/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='relative z-10'>
                      <div className='flex flex-wrap items-center gap-2 mb-2'>
                        <span className='text-gold font-semibold text-xs sm:text-sm'>{exp.year}</span>
                        {exp.current && (
                          <span className='text-[10px] uppercase tracking-wider bg-crimson/20 text-crimson-light border border-crimson/40 px-2 py-0.5 rounded-full'>En cours</span>
                        )}
                      </div>
                      <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-washi mb-1' style={{ fontFamily: '"Shippori Mincho", serif' }}>
                        {exp.title}
                      </h3>
                      <p className='text-crimson-light font-medium text-sm sm:text-base mb-2'>{exp.company}</p>
                      <p className='text-gold/70 text-xs sm:text-sm mb-3 font-mono break-words'>{exp.technologies}</p>
                      <ul className='text-washi/70 text-xs sm:text-sm leading-relaxed space-y-1.5'>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className='flex items-start'>
                            <span className='text-crimson-light mr-2 mt-0.5 flex-shrink-0'>▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nœud central */}
                <div className='hidden md:flex md:w-0 items-center justify-center relative'>
                  <span className='absolute w-4 h-4 rounded-full bg-crimson border-2 border-gold shadow-[0_0_15px_rgba(200,16,46,0.7)] -translate-x-1/2'></span>
                </div>

                <div className='hidden md:block md:w-1/2'></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formation */}
      <div className='text-center mb-16 sm:mb-24'>
        <div className='space-y-4 sm:space-y-6 mb-10 sm:mb-16'>
          <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
            🎓 Formation · 学び
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text brush-underline' style={{ fontFamily: 'Cinzel, serif' }}>
            Mon parcours académique
          </h2>
        </div>

        <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          {formations.map((formation, index) => (
            <div
              key={index}
              className='glass-effect border border-gold/30 rounded-xl md:rounded-2xl p-4 sm:p-6 text-left hover:border-gold/60 transition-all duration-300 hover-lift group relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-gold/5 to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <span className='text-gold font-semibold text-xs sm:text-sm'>{formation.year}</span>
                <h3 className='text-base sm:text-lg md:text-xl font-bold text-washi mt-1 mb-1' style={{ fontFamily: '"Shippori Mincho", serif' }}>
                  {formation.title}
                </h3>
                <p className='text-crimson-light font-medium text-sm mb-2'>{formation.company}</p>
                <p className='text-washi/60 text-xs sm:text-sm leading-relaxed'>{formation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Références */}
      <div className='text-center'>
        <div className='space-y-4 sm:space-y-6 mb-8 sm:mb-12'>
          <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
            🤝 Références · 信頼
          </span>
        </div>
        <div className='max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          {references.map((ref, index) => (
            <div key={index} className='glass-effect border border-crimson/25 rounded-xl p-5 sm:p-6 text-left hover:border-crimson/50 transition-all duration-300 hover-lift relative'>
              <FaQuoteLeft className='text-crimson/30 text-2xl mb-3' />
              <h4 className='text-washi font-bold text-base sm:text-lg' style={{ fontFamily: '"Shippori Mincho", serif' }}>{ref.name}</h4>
              <p className='text-gold/80 text-sm'>{ref.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Parcours
