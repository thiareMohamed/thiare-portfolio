import { useEffect } from 'react';
import '../assets/css/App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Parcours from './Parcours';
import Project from './Project';
import Skills from './Skills';
import Services from './Services';

function App() {
  // SEO - Titre par défaut
  useEffect(() => {
    document.title = 'THIARE Mohamed - Développeur Full-Stack | Portfolio';
    
    // Ajouter les données structurées JSON-LD pour le SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohamed THIARE",
      "jobTitle": "Développeur Full-Stack",
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
        "Développement Web",
        "Développement Mobile",
        "Angular",
        "React",
        "Vue.js",
        "Next.js",
        "Nuxt.js",
        "Flutter",
        "Spring Boot",
        "Nest.js",
        "JavaScript",
        "TypeScript",
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
    <div className="App">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="parcours">
        <Parcours />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
