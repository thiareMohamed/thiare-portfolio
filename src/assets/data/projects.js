import topatoko from '../images/topatoko.png';
import viziPass from '../images/vizi_pass.png';
import marchePublic from '../images/marche_public.png';
import lohiFoundation from '../images/lohifoundation.png';
import bookfighters from '../images/bookfighters.png';
import visionStats from '../images/vision_stats.png';
import samaGokh from '../images/samagokh.png';

// `short` : titre affiché dans la liste · `category` : [fr, en]
export const Projects = [
  {
    id: 10,
    title: 'Teralink',
    url: 'https://teralink.sn',
    category: ['Plateforme · Fondateur', 'Platform · Founder'],
    stacks: ['Nuxt 3', 'NestJS', 'Flutter', 'PostgreSQL', 'MinIO'],
    description: "Plateforme de réservation en ligne multiplateforme conçue et développée de bout en bout en tant que fondateur. Application web Nuxt 3, backend NestJS couplé à PostgreSQL, application mobile native Flutter et stockage objet sécurisé via MinIO.",
    descriptionEn: 'Cross-platform online booking platform designed and built end to end as founder. Nuxt 3 web app, NestJS backend with PostgreSQL, native Flutter mobile app and secure object storage with MinIO.'
  },
  {
    id: 1,
    title: 'Topatoko',
    url: 'https://topatoko.com',
    image: topatoko,
    category: ['Plateforme SaaS', 'SaaS platform'],
    stacks: ['Nest.js', 'Angular', 'Kafka', 'MongoDB', 'Keycloak', 'Docker'],
    description: 'Plateforme tout-en-un de dématérialisation pour digitaliser vos documents, automatiser vos workflows et sécuriser vos signatures électroniques. Signature électronique sécurisée, workflow automatisé, conformité internationale et intégration facile.',
    descriptionEn: 'All-in-one paperless platform to digitise documents, automate workflows and secure electronic signatures. Secure e-signature, automated workflows, international compliance and easy integration.'
  },
  {
    id: 2,
    title: 'ViziPass — Building Administratif',
    short: 'ViziPass',
    url: 'https://vizi-pass.com',
    image: viziPass,
    category: ['Sécurité & Administration', 'Security & Administration'],
    stacks: ['Nest.js', 'Angular', 'MongoDB', 'Keycloak', 'Docker'],
    description: "Système d'identification sans contact et par carte à puce pour les visiteurs du Building Administratif. Solution moderne et efficace offrant un accès facile et sécurisé avec gestion des visites, module de gestion d'événements et plateforme de démarches administratives complète.",
    descriptionEn: 'Contactless and smart-card identification system for visitors of the Building Administratif. Easy, secure access with visit management, an events module and a complete administrative procedures platform.'
  },
  {
    id: 3,
    title: 'Portail Marché Public du Sénégal (APPEL)',
    short: 'Marché Public',
    url: 'https://esigmap.sn',
    image: marchePublic,
    category: ['Gouvernement', 'Government'],
    stacks: ['Nuxt.js', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Keycloak', 'Docker'],
    description: 'Refonte complète du portail APPEL - Portail de la commande publique du Sénégal. Plateforme centrale pour les fournisseurs et acteurs des marchés publics. Système de gestion des autorités contractantes, consultations, plans de passation, clone Trello pour gestion de tâches, système de dénonciation anonyme, génération automatique de PV de carence et chat en temps réel avec agents.',
    descriptionEn: "Full redesign of APPEL, Senegal's public procurement portal. Central platform for suppliers and procurement stakeholders: contracting authorities, consultations, procurement plans, a Trello-style task board, anonymous reporting, automatic default reports and real-time chat with agents."
  },
  {
    id: 4,
    title: 'Lohi Foundation',
    url: 'https://www.lohifoundation.com/',
    image: lohiFoundation,
    category: ['Gestion de projets', 'Project management'],
    stacks: ['Nuxt 3', 'Nest.js', 'Docker', 'Portainer'],
    description: "Plateforme de gestion de projets communautaires avec dashboards personnalisés. Gestion des promoteurs, témoignages et utilisateurs. Migration d'Angular vers Nuxt 3. Site web pour la Better Living Tonkpi Lohi Foundation.",
    descriptionEn: 'Community project management platform with custom dashboards. Manages promoters, testimonials and users. Migration from Angular to Nuxt 3. Website for the Better Living Tonkpi Lohi Foundation.'
  },
  {
    id: 5,
    title: 'Bookfighters',
    url: 'https://apps.apple.com/app/book-fighters/id6739012002',
    image: bookfighters,
    category: ['Mobile', 'Mobile'],
    stacks: ['FlutterFlow', 'Firebase', 'Real-time Chat', 'Geolocation'],
    description: "Application mobile connectant boxeurs, arbitres, clubs et fédérations. Système de publication, interactions sociales, chat en temps réel et géolocalisation des clubs. Disponible sur l'App Store.",
    descriptionEn: 'Mobile app connecting boxers, referees, clubs and federations. Posts, social interactions, real-time chat and club geolocation. Available on the App Store.'
  },
  {
    id: 6,
    title: 'Vision Stats',
    url: null,
    image: visionStats,
    category: ['Mobile / PWA', 'Mobile / PWA'],
    stacks: ['Ionic', 'Spring Boot', 'Angular', 'JHipster', 'Azure', 'Docker', 'MySQL'],
    description: 'Application mobile hors ligne (PWA) pour la gestion de carburant dans les stations-service. Gestion des cuves, pompes, produits, gérants et dashboard de statistiques interactif avec visualisation de données en temps réel.',
    descriptionEn: 'Offline mobile app (PWA) for fuel management in service stations. Tanks, pumps, products, managers and an interactive real-time statistics dashboard.'
  },
  {
    id: 7,
    title: 'Plateforme de Démarches Administratives',
    short: 'Sénégal Services',
    url: 'https://www.senegalservices.sn',
    category: ['Administration', 'Administration'],
    stacks: ['Nest.js', 'Angular', 'MongoDB', 'Keycloak', 'Docker'],
    description: 'Système complet de gestion des démarches administratives avec authentification sécurisée, workflow de validation et suivi en temps réel des dossiers.',
    descriptionEn: 'Complete administrative procedures system with secure authentication, validation workflow and real-time case tracking.'
  },
  {
    id: 8,
    title: 'Sama Gokh',
    url: 'https://samagokh.sn',
    image: samaGokh,
    category: ['Citoyenne', 'Civic tech'],
    stacks: ['Nuxt.js'],
    description: 'Le site Sama Gokh est une plateforme citoyenne en ligne destinée à faciliter le signalement, le suivi et la gestion des problèmes ou préoccupations dans l’environnement et la communauté.',
    descriptionEn: 'Sama Gokh is an online civic platform for reporting, tracking and managing issues affecting the local environment and community.'
  },
  {
    id: 9,
    title: 'Pharmacies de Garde',
    short: 'Pharmacies de garde',
    url: 'https://on-call-pharmacy.vercel.app/',
    category: ['Citoyenne', 'Civic tech'],
    stacks: ['Nuxt.js', 'Supabase'],
    description: 'Application web permettant aux citoyens de consulter facilement les pharmacies de garde disponibles en dehors des horaires habituels. Le projet vise à améliorer l’accès rapide aux services pharmaceutiques d’urgence en centralisant les informations essentielles (nom de la pharmacie, localisation, période de garde).',
    descriptionEn: 'Web app that lets citizens find on-call pharmacies outside regular hours, centralising the essentials: pharmacy name, location and duty period.'
  }
];
