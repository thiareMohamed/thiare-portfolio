import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaCalendarAlt, FaClock, FaTag, FaArrowLeft, FaUser } from 'react-icons/fa';
import { Articles } from '../assets/data/articles';

function BlogPost({ article, onBack }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger le contenu markdown
    const loadContent = async () => {
      setLoading(true);
      try {
        // Essayer de charger depuis le dossier public/articles
        const response = await fetch(`/articles/${article.slug}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          // Fallback : message d'erreur
          setContent(`# ${article.title}\n\n⚠️ Le contenu de cet article n'a pas encore été ajouté.\n\nPour ajouter le contenu, créez un fichier \`${article.slug}.md\` dans le dossier \`public/articles/\`.`);
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error);
        setContent(`# ${article.title}\n\n⚠️ Erreur lors du chargement de l'article.\n\nVérifiez que le fichier \`${article.slug}.md\` existe dans le dossier \`public/articles/\`.`);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [article.slug, article.title]);

  // Trouver l'article dans la liste pour les métadonnées
  const fullArticle = Articles.find(a => a.id === article.id) || article;

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative max-w-4xl mx-auto'>
      {/* Bouton retour */}
      <button
        onClick={onBack}
        className='mb-8 flex items-center space-x-2 glass-effect text-sky-400 hover:text-purple-400 px-4 py-2 rounded-lg border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 hover:scale-105'
      >
        <FaArrowLeft />
        <span>Retour aux articles</span>
      </button>

      {/* En-tête de l'article */}
      <div className='mb-8'>
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='glass-effect text-sky-400 text-xs font-semibold px-3 py-1 rounded-full border border-sky-400/30'>
            {fullArticle.category}
          </span>
          {fullArticle.featured && (
            <span className='glass-effect text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-400/30'>
              ⭐ Vedette
            </span>
          )}
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4' style={{fontFamily: 'Orbitron, sans-serif'}}>
          {fullArticle.title}
        </h1>

        <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6'>
          <span className='flex items-center space-x-2'>
            <FaUser className='text-sky-400' />
            <span>{fullArticle.author}</span>
          </span>
          <span className='flex items-center space-x-2'>
            <FaCalendarAlt className='text-sky-400' />
            <span>{new Date(fullArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </span>
          <span className='flex items-center space-x-2'>
            <FaClock className='text-sky-400' />
            <span>{fullArticle.readTime} de lecture</span>
          </span>
        </div>

        {/* Image de l'article */}
        {fullArticle.image && (
          <div className='relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8'>
            <img
              src={fullArticle.image}
              alt={fullArticle.title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          </div>
        )}

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-8'>
          {fullArticle.tags.map((tag, index) => (
            <span
              key={index}
              className='flex items-center space-x-1 text-xs text-sky-400 bg-sky-400/10 px-3 py-1.5 rounded-full border border-sky-400/20'
            >
              <FaTag className='text-xs' />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className='glass-effect border-2 border-sky-400/20 rounded-2xl p-6 sm:p-8 md:p-10'>
        {loading ? (
          <div className='text-center py-12'>
            <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400'></div>
            <p className='mt-4 text-gray-400'>Chargement de l'article...</p>
          </div>
        ) : (
          <div className='prose prose-invert prose-sky max-w-none'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Personnalisation des composants markdown
                h1: ({node, children, ...props}) => <h1 className='text-3xl font-bold gradient-text mb-4 mt-8' style={{fontFamily: 'Orbitron, sans-serif'}} {...props}>{children}</h1>,
                h2: ({node, children, ...props}) => <h2 className='text-2xl font-bold text-sky-400 mb-3 mt-6' style={{fontFamily: 'Orbitron, sans-serif'}} {...props}>{children}</h2>,
                h3: ({node, children, ...props}) => <h3 className='text-xl font-bold text-purple-400 mb-2 mt-4' {...props}>{children}</h3>,
                p: ({node, children, ...props}) => <p className='text-gray-300 leading-relaxed mb-4' {...props}>{children}</p>,
                code: ({node, inline, children, ...props}) => 
                  inline ? (
                    <code className='bg-sky-400/20 text-sky-400 px-2 py-1 rounded text-sm' {...props}>{children}</code>
                  ) : (
                    <code className='block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4' {...props}>{children}</code>
                  ),
                pre: ({node, children, ...props}) => <pre className='bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4' {...props}>{children}</pre>,
                a: ({node, children, ...props}) => <a className='text-sky-400 hover:text-purple-400 underline' target='_blank' rel='noopener noreferrer' {...props}>{children}</a>,
                ul: ({node, ...props}) => <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2' {...props} />,
                ol: ({node, ...props}) => <ol className='list-decimal list-inside text-gray-300 mb-4 space-y-2' {...props} />,
                li: ({node, ...props}) => <li className='text-gray-300' {...props} />,
                blockquote: ({node, ...props}) => <blockquote className='border-l-4 border-sky-400 pl-4 italic text-gray-400 my-4' {...props} />,
                strong: ({node, ...props}) => <strong className='text-sky-400 font-bold' {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {/* Navigation vers d'autres articles */}
      <div className='mt-12 pt-8 border-t border-sky-400/20'>
        <div className='flex justify-between items-center'>
          <button
            onClick={onBack}
            className='flex items-center space-x-2 glass-effect text-sky-400 hover:text-purple-400 px-4 py-2 rounded-lg border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300'
          >
            <FaArrowLeft />
            <span>Retour aux articles</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

