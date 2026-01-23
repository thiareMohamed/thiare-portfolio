// Liste des articles du blog
// Chaque article doit avoir un fichier markdown correspondant dans src/articles/

module.exports.Articles = [
  {
    id: 1,
    slug: 'premiers-pas-avec-react',
    title: 'Premiers pas avec React : Guide pour débutants',
    excerpt: 'Découvrez les bases de React et comment créer votre première application. Ce guide vous accompagne pas à pas dans l\'apprentissage de cette bibliothèque JavaScript populaire.',
    author: 'Mohamed THIARE',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'React',
    tags: ['React', 'JavaScript', 'Débutant', 'Tutoriel'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    slug: 'optimiser-performance-react',
    title: '10 Astuces pour Optimiser les Performances de React',
    excerpt: 'Apprenez les meilleures pratiques pour améliorer les performances de vos applications React. Des techniques simples aux optimisations avancées.',
    author: 'Mohamed THIARE',
    date: '2024-01-20',
    readTime: '8 min',
    category: 'React',
    tags: ['React', 'Performance', 'Optimisation', 'Astuces'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: 3,
    slug: 'tailwind-css-tips',
    title: 'Tips & Astuces Tailwind CSS pour un Design Moderne',
    excerpt: 'Découvrez des astuces pratiques pour tirer le meilleur parti de Tailwind CSS. Des techniques avancées pour créer des designs modernes et responsives.',
    author: 'Mohamed THIARE',
    date: '2024-01-25',
    readTime: '6 min',
    category: 'CSS',
    tags: ['Tailwind CSS', 'Design', 'CSS', 'Astuces'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false
  }
];

