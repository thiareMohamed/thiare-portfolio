import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Parcours from '../components/Parcours';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Services from '../components/Services';

function Home() {
  return (
    <div className="App">
      <Nav />
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

export default Home;

