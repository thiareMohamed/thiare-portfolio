import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsappSquare } from 'react-icons/fa'
import logo from '../assets/images/logo.svg';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // Réinitialiser la section active selon la route
    if (location.pathname === '/blog') {
      setActiveSection('blog');
      setScrolled(window.scrollY > 50);
      return;
    }

    if (location.pathname === '/') {
      setActiveSection('home');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Détecter la section active (seulement sur la page d'accueil)
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'projects', 'skills', 'parcours', 'contact'];
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { href: '/', label: 'Accueil', id: 'home', isRoute: true },
    { href: '#about', label: 'À propos', id: 'about', isRoute: false },
    { href: '#services', label: 'Services', id: 'services', isRoute: false },
    { href: '#projects', label: 'Projets', id: 'projects', isRoute: false },
    { href: '#skills', label: 'Compétences', id: 'skills', isRoute: false },
    { href: '#parcours', label: 'Parcours', id: 'parcours', isRoute: false },
    { href: '/blog', label: 'Blog', id: 'blog', isRoute: true },
    { href: '#contact', label: 'Contact', id: 'contact', isRoute: false },
  ];

  const handleNavClick = (e, href, isRoute) => {
    if (isRoute) {
      setMobileMenuOpen(false);
      if (href === '/' && location.pathname === '/') {
        e?.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    e?.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const openWhatsapp = () => {
    window.open('https://wa.me/221773813060', '_blank');
  };

  return (
    <>
      <header className={`glass-effect mx-2 sm:mx-4 md:mx-20 rounded-xl md:rounded-2xl py-2 md:py-3 mt-2 md:mt-3 items-center justify-between px-3 md:px-6 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-[0_8px_32px_rgba(56,140,224,0.3)] border-gold/40 backdrop-blur-xl' : 'border-gold/20 backdrop-blur-md'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="relative group flex items-center gap-2">
            <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-gold/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            <span className="hanko text-base sm:text-lg w-8 h-8 sm:w-9 sm:h-9 relative z-10 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">侍</span>
            <img src={logo} alt="logo" className="h-5 sm:h-6 md:h-8 relative z-10 drop-shadow-[0_0_10px_rgba(56,140,224,0.5)] transition-transform duration-300 group-hover:scale-110" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = item.isRoute
                ? (location.pathname === item.href || (item.href === '/' && location.pathname === '/' && activeSection === 'home'))
                : activeSection === item.id;

              if (item.isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                      isActive
                        ? 'text-crimson-light bg-crimson/10'
                        : 'text-washi/70 hover:text-crimson-light'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-crimson to-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              }
              if (location.pathname !== '/') {
                return null;
              }
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, false)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                    isActive
                      ? 'text-crimson-light bg-crimson/10'
                      : 'text-washi/70 hover:text-crimson-light'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-crimson to-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}

            {/* Bouton Contact */}
            <button
              onClick={openWhatsapp}
              className="ml-4 glass-effect text-gold hover:text-crimson-light px-4 py-2 rounded-lg border border-gold/30 hover:border-crimson/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(56,140,224,0.4)] flex items-center space-x-2 text-sm font-semibold"
            >
              <FaWhatsappSquare className="text-lg" />
              <span className="hidden xl:inline">Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-crimson-light hover:text-gold transition-colors p-2"
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
            {navItems.map((item) => {
              const isActive = item.isRoute
                ? (location.pathname === item.href || (item.href === '/' && location.pathname === '/' && activeSection === 'home'))
                : activeSection === item.id;

              if (item.isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className={`text-base font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-crimson-light bg-crimson/10 border-l-4 border-crimson'
                        : 'text-washi/70 hover:text-crimson-light hover:bg-crimson/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              if (location.pathname !== '/') {
                return null;
              }
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, false)}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-crimson-light bg-crimson/10 border-l-4 border-crimson'
                      : 'text-washi/70 hover:text-crimson-light hover:bg-crimson/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                openWhatsapp();
                setMobileMenuOpen(false);
              }}
              className="glass-effect text-gold hover:text-crimson-light px-4 py-3 rounded-lg border border-gold/30 hover:border-crimson/60 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold mt-2"
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
