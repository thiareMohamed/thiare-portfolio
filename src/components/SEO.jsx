import { useEffect } from 'react';

function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Mettre à jour le titre de la page
    if (title) {
      document.title = title;
    }
    
    // Mettre à jour la meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Portfolio de Mohamed THIARE, Développeur Full-Stack');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description || 'Portfolio de Mohamed THIARE, Développeur Full-Stack');
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }
    
    // Mettre à jour les keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'développeur full-stack, développeur web, portfolio');
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords || 'développeur full-stack, développeur web, portfolio');
      document.getElementsByTagName('head')[0].appendChild(metaKeywords);
    }
  }, [title, description, keywords]);

  return null;
}

export default SEO;

