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
