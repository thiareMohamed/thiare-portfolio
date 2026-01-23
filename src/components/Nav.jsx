import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsappSquare } from 'react-icons/fa'
import logo from '../assets/images/logo.svg';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Détecter la section active
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'parcours', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Accueil', id: 'home' },
    { href: '#about', label: 'À propos', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#projects', label: 'Projets', id: 'projects' },
    { href: '#skills', label: 'Compétences', id: 'skills' },
    { href: '#parcours', label: 'Parcours', id: 'parcours' },
    { href: '#blog', label: 'Blog', id: 'blog' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const openWhatsapp = () => {
    window.open('https://wa.me/221773813060', '_blank');
  };

  return (
    <>
      <header className={`glass-effect mx-2 sm:mx-4 md:mx-20 rounded-xl md:rounded-2xl py-2 md:py-3 mt-2 md:mt-3 items-center justify-between px-3 md:px-6 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-[0_8px_32px_rgba(56,189,248,0.3)] border-sky-400/40 backdrop-blur-xl' : 'border-sky-400/20 backdrop-blur-md'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            <img src={logo} alt="logo" className="h-5 sm:h-6 md:h-8 relative z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-transform duration-300 group-hover:scale-110" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-sky-400 bg-sky-400/10'
                    : 'text-gray-300 hover:text-sky-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            
            {/* Bouton Contact */}
            <button
              onClick={openWhatsapp}
              className="ml-4 glass-effect text-sky-400 hover:text-purple-400 px-4 py-2 rounded-lg border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center space-x-2 text-sm font-semibold"
            >
              <FaWhatsappSquare className="text-lg" />
              <span className="hidden xl:inline">Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-sky-400 hover:text-purple-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-4 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-sky-400 bg-sky-400/10 border-l-4 border-sky-400'
                    : 'text-gray-300 hover:text-sky-400 hover:bg-sky-400/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                openWhatsapp();
                setMobileMenuOpen(false);
              }}
              className="glass-effect text-sky-400 hover:text-purple-400 px-4 py-3 rounded-lg border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold mt-2"
            >
              <FaWhatsappSquare className="text-lg" />
              <span>Me contacter</span>
            </button>
          </nav>
        </div>
      </header>
      
      {/* Spacer pour le header fixe */}
      <div className="h-16 sm:h-20 md:h-24"></div>
    </>
  )
}

export default Nav
