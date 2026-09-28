import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Services from '../components/Services';
import StackMarquee from '../components/StackMarquee';
import { scrollToSection } from '../components/ui';

function Home() {
  const { state } = useLocation();

  // Arrivée depuis une autre page via un lien de la nav
  useEffect(() => {
    if (!state || !state.scrollTo) return undefined;
    const id = setTimeout(() => scrollToSection(state.scrollTo), 50);
    return () => clearTimeout(id);
  }, [state]);

  return (
    <main>
      <SEO
        title='Mohamed THIARE - Lead Tech & Développeur Full-Stack | Portfolio'
        description='Portfolio de Mohamed THIARE, Lead Tech & Développeur Full-Stack basé à Dakar. Architectures web et mobiles modernes, robustes et scalables.'
      />
      <Hero />
      <StackMarquee />
      <About />
      <Services />
      <Projects />
      <Career />
      <Blog />
      <Contact />
    </main>
  );
}

export default Home;
