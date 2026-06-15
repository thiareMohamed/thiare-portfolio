import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithubSquare, FaTwitterSquare, FaWhatsappSquare, FaPaperPlane } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulation d'envoi (remplacer par votre service d'email)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le message après 3 secondes
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);

    // Pour un vrai formulaire, vous pouvez utiliser:
    // - EmailJS
    // - Formspree
    // - Votre propre API backend
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'thiaremohamed.mt@gmail.com',
      link: 'mailto:thiaremohamed.mt@gmail.com',
      color: 'text-crimson-light'
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+221 77 381 30 60',
      link: 'tel:+221773813060',
      color: 'text-gold'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Dakar, Sénégal',
      link: null,
      color: 'text-crimson-light'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/mohamed-thiare-b49b03214/',
      label: 'LinkedIn',
      color: 'hover:text-crimson-light'
    },
    {
      icon: FaGithubSquare,
      href: 'https://github.com/thiareMohamed',
      label: 'GitHub',
      color: 'hover:text-washi'
    },
    {
      icon: FaTwitterSquare,
      href: 'https://twitter.com/ThiareMohamed29',
      label: 'Twitter',
      color: 'hover:text-crimson-light'
    },
    {
      icon: FaWhatsappSquare,
      href: 'https://wa.me/221773813060',
      label: 'WhatsApp',
      color: 'hover:text-gold'
    }
  ];

  return (
    <div className='my-12 sm:my-20 px-4 md:px-20 relative'>
      <span className='kanji-watermark absolute top-0 left-0 text-[16vw] z-0'>絆</span>
      <div className='text-center mb-8 sm:mb-16 relative z-10'>
        <div className='space-y-4 sm:space-y-6'>
          <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
            📧 Contact · 連絡
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text brush-underline' style={{fontFamily: 'Cinzel, serif'}}>
            Formons une alliance
          </h2>
          <p className='text-washi/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 pt-2'>
            Vous avez un projet en tête ? N'hésitez pas à me contacter. Je suis toujours ouvert à discuter de nouvelles opportunités.
          </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12'>
        {/* Informations de contact */}
        <div className='space-y-6 sm:space-y-8'>
          <div>
            <h3 className='text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6' style={{fontFamily: 'Cinzel, serif'}}>
              Informations de contact
            </h3>
            <p className='text-washi/80 text-sm sm:text-base mb-6 sm:mb-8'>
              Je suis disponible pour discuter de vos projets. N'hésitez pas à me contacter via email, téléphone ou réseaux sociaux.
            </p>
          </div>

          {/* Liste des contacts */}
          <div className='space-y-3 sm:space-y-4'>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link || '#'}
                  className={`glass-effect border-2 border-gold/20 rounded-xl p-3 sm:p-4 hover:border-crimson/60 transition-all duration-300 hover-lift flex items-center space-x-3 sm:space-x-4 group ${!info.link ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-crimson/20 to-gold/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className={`text-lg sm:text-xl ${info.color}`} />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-washi/60 text-xs sm:text-sm'>{info.label}</p>
                    <p className='text-washi font-medium text-sm sm:text-base truncate'>{info.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className='text-base sm:text-lg font-semibold text-washi/80 mb-3 sm:mb-4'>Suivez-moi</h4>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`glass-effect border-2 border-gold/20 rounded-xl p-3 sm:p-4 hover:border-crimson/60 transition-all duration-300 hover:scale-110 text-gold ${social.color} flex items-center justify-center`}
                    aria-label={social.label}
                  >
                    <Icon className='text-xl sm:text-2xl' />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className='glass-effect border-2 border-gold/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8'>
          <h3 className='text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6' style={{fontFamily: 'Cinzel, serif'}}>
            Envoyez-moi un message
          </h3>

          <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-washi/80 mb-2'>
                Nom complet
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full glass-effect border border-gold/30 rounded-lg px-4 py-3 text-washi placeholder-washi/40 focus:outline-none focus:border-crimson/60 focus:ring-2 focus:ring-gold/20 transition-all duration-300'
                placeholder='Votre nom'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-washi/80 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full glass-effect border border-gold/30 rounded-lg px-4 py-3 text-washi placeholder-washi/40 focus:outline-none focus:border-crimson/60 focus:ring-2 focus:ring-gold/20 transition-all duration-300'
                placeholder='votre.email@exemple.com'
              />
            </div>

            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-washi/80 mb-2'>
                Sujet
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full glass-effect border border-gold/30 rounded-lg px-4 py-3 text-washi placeholder-washi/40 focus:outline-none focus:border-crimson/60 focus:ring-2 focus:ring-gold/20 transition-all duration-300'
                placeholder='Sujet de votre message'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-washi/80 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className='w-full glass-effect border border-gold/30 rounded-lg px-4 py-3 text-washi placeholder-washi/40 focus:outline-none focus:border-crimson/60 focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none'
                placeholder='Votre message...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full glass-effect border-2 border-crimson/50 rounded-xl px-6 py-4 text-gold hover:text-crimson-light font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,16,46,0.6)] hover:border-crimson/70 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? (
                <>
                  <div className='w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin'></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className='glass-effect border-2 border-green-400/50 rounded-lg p-4 bg-green-400/10'>
                <p className='text-green-400 text-sm font-medium'>
                  ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

