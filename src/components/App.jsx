import '../assets/css/App.css';
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import Parcours from './Parcours';
import Project from './Project';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Parcours />

      <Footer />
    </div>
  );
}

export default App;
