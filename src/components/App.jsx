import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/css/App.css';
import Home from '../pages/Home';
import Blog from '../pages/Blog';

function App() {
  // SEO - Titre par défaut
  useEffect(() => {
    document.title = 'Mohamed THIARE - Lead Tech & Développeur Full-Stack | Portfolio';
    
    // Ajouter les données structurées JSON-LD pour le SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohamed THIARE",
      "jobTitle": "Lead Tech & Développeur Full-Stack",
      "url": "https://thiare-portfolio.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/mohamed-thiare-b49b03214/",
        "https://github.com/thiareMohamed",
        "https://twitter.com/ThiareMohamed29"
      ],
      "email": "thiaremohamed.mt@gmail.com",
      "telephone": "+221-77-381-30-60",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Institut Supérieur d'Informatique"
      },
      "knowsAbout": [
        "Lead Tech",
        "Architecture logicielle",
        "Développement Web",
        "Développement Mobile",
        "Nuxt.js",
        "Next.js",
        "Angular",
        "Vue.js",
        "React",
        "Flutter",
        "NestJS",
        "Spring Boot",
        "Java",
        "Kafka",
        "PostgreSQL",
        "MongoDB",
        "MinIO",
        "Docker",
        "Portainer",
        "CI/CD",
        "DevOps"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      // Nettoyer le script lors du démontage
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
