import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';
import { Articles } from '../assets/data/articles';
import BlogPost from './BlogPost';

function BlogList() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Récupérer toutes les catégories uniques
  const categories = ['Tous', ...new Set(Articles.map(article => article.category))];

  // Filtrer les articles par catégorie
  const filteredArticles = selectedCategory === 'Tous' 
    ? Articles 
    : Articles.filter(article => article.category === selectedCategory);

  // Articles en vedette
  const featuredArticles = Articles.filter(article => article.featured);

  if (selectedArticle) {
    return <BlogPost article={selectedArticle} onBack={() => setSelectedArticle(null)} />;
  }

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      <div className='text-center mb-8 sm:mb-16'>
        <div className='space-y-4 sm:space-y-6'>
          <span className="inline-block glass-effect text-purple-400 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400/30">
            📝 Blog
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
            Articles & Astuces
          </h2>
          <p className='text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4'>
            Découvrez mes articles sur le développement web, les astuces pratiques et les meilleures pratiques
          </p>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className='flex flex-wrap justify-center gap-3 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`glass-effect px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-sky-400/20 border-2 border-sky-400/60 text-sky-400'
                : 'border-2 border-sky-400/20 text-gray-300 hover:border-sky-400/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles en vedette */}
      {featuredArticles.length > 0 && (
        <div className='mb-12'>
          <h3 className='text-2xl font-bold gradient-text mb-6' style={{fontFamily: 'Orbitron, sans-serif'}}>
            ⭐ Articles en vedette
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {featuredArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onClick={() => setSelectedArticle(article)}
                featured
              />
            ))}
          </div>
        </div>
      )}

      {/* Liste des articles */}
      <div className='mb-8'>
        <h3 className='text-2xl font-bold gradient-text mb-6' style={{fontFamily: 'Orbitron, sans-serif'}}>
          Tous les articles
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      </div>

      {filteredArticles.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-400 text-lg'>Aucun article dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
}

// Composant pour une carte d'article
function ArticleCard({ article, onClick, featured = false }) {
  return (
    <div
      onClick={onClick}
      className={`glass-effect border-2 border-sky-400/30 rounded-xl md:rounded-2xl p-5 sm:p-6 overflow-hidden hover:border-sky-400/60 transition-all duration-300 hover-lift cursor-pointer group relative ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Image */}
      <div className='relative h-48 mb-4 rounded-lg overflow-hidden'>
        <img
          src={article.image}
          alt={article.title}
          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
        {featured && (
          <span className='absolute top-2 right-2 glass-effect text-yellow-400 text-xs font-bold px-2 py-1 rounded-full border border-yellow-400/30'>
            ⭐ Vedette
          </span>
        )}
        <span className='absolute bottom-2 left-2 glass-effect text-sky-400 text-xs font-semibold px-2 py-1 rounded-full border border-sky-400/30'>
          {article.category}
        </span>
      </div>

      {/* Contenu */}
      <div className='space-y-3'>
        <h3 className='text-lg sm:text-xl font-bold gradient-text line-clamp-2' style={{fontFamily: 'Orbitron, sans-serif'}}>
          {article.title}
        </h3>
        
        <p className='text-gray-300 text-sm line-clamp-3'>
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2'>
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className='text-xs text-sky-400 bg-sky-400/10 px-2 py-1 rounded-full border border-sky-400/20'
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta informations */}
        <div className='flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-sky-400/20'>
          <div className='flex items-center space-x-3'>
            <span className='flex items-center space-x-1'>
              <FaCalendarAlt />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </span>
            <span className='flex items-center space-x-1'>
              <FaClock />
              <span>{article.readTime}</span>
            </span>
          </div>
          <span className='flex items-center space-x-1 text-sky-400 group-hover:text-purple-400 transition-colors'>
            Lire <FaArrowRight className='transform group-hover:translate-x-1 transition-transform' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogList;

