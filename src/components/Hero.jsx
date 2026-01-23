import React from 'react'
import Nav from './Nav';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaCloudDownloadAlt, FaWhatsappSquare } from 'react-icons/fa';
import AvatarAndIcons from '../assets/images/AvatarAndIcons.svg';
import CV from '../assets/file/CV_Mohamed_THIARE.pdf';

function Hero() {

    const openWhatsapp = () => {
        window.open('https://wa.me/221773813060', '_blank');
    }
  return (
    <div className='space-y-16 mb-20 relative overflow-hidden'>
      <Nav />

        <div className="hero flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 md:space-x-8 px-4 md:px-8">
            {/* Avatar Mobile */}
            <div className="hero__image flex md:hidden relative mb-4">    
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <img src={AvatarAndIcons} alt="hero" className='w-64 h-64 md:w-80 md:h-80 relative z-10 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]' />
            </div>

            {/* Content */}
            <div className="hero__content space-y-3 md:space-y-6 z-10 text-center md:text-left w-full md:w-auto">
                <span className="inline-block glass-effect text-sky-400 text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 hover:scale-105">
                    👋 Salutation!
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    Mohamed <br /> 
                    <span className="neon-text">THIARE</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-light text-gray-300">
                    Développeur Full-Stack · Expert Web & Mobile
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-xs md:text-sm text-gray-400">
                    <span>📧</span>
                    <a href="mailto:thiaremohamed.mt@gmail.com" className="hover:text-sky-400 transition-colors break-all">
                        thiaremohamed.mt@gmail.com
                    </a>
                </div>
                
                {/* Social Icons Mobile */}
                <div className="flex md:hidden justify-center space-x-4 pt-2">
                    <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" 
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]' 
                       target='_blank'
                       rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/thiareMohamed" 
                       target='_blank' 
                       rel='noopener noreferrer'
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'>
                        <FaGithubSquare />
                    </a>
                    <a href="https://twitter.com/ThiareMohamed29" 
                       target='_blank' 
                       rel='noopener noreferrer'
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'>
                        <FaTwitterSquare />
                    </a>
                </div>

                {/* Social Icons Desktop */}
                <div className="hidden md:flex mt-6 space-x-4">
                    <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" 
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]' 
                       target='_blank'
                       rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/thiareMohamed" 
                       target='_blank' 
                       rel='noopener noreferrer'
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'>
                        <FaGithubSquare />
                    </a>
                    <a href="https://twitter.com/ThiareMohamed29" 
                       target='_blank' 
                       rel='noopener noreferrer'
                       className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'>
                        <FaTwitterSquare />
                    </a>
                </div>
            </div>

            {/* Avatar Desktop */}
            <div className="hero__image hidden md:flex relative">    
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
                <img src={AvatarAndIcons} alt="hero" className='w-80 md:w-96 md:h-96 relative z-10 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_40px_rgba(56,189,248,0.6)]' />
            </div>

            {/* Actions */}
            <div className="hero__cv w-full md:w-auto text-center space-y-3 md:space-y-4 z-10">
                <a href={CV} 
                   target='_blank' 
                   rel='noopener noreferrer'
                   className='flex space-x-2 items-center justify-center glass-effect text-sky-400 hover:text-purple-400 px-5 md:px-6 py-2.5 md:py-3 rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] text-sm md:text-base'>
                    <span className='font-medium'>Télécharger mon CV</span>
                    <FaCloudDownloadAlt className='text-base md:text-lg' />
                </a>
                
                <button 
                    onClick={openWhatsapp} 
                    className='w-full md:w-auto flex space-x-2 items-center justify-center glass-effect text-sky-400 hover:text-purple-400 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-sky-400/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] font-semibold text-base md:text-lg'>
                    <span>Me contacter</span>
                    <FaWhatsappSquare className='text-lg md:text-xl' />
                </button>
            </div>
        </div>

        {/* Effets de fond animés */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
    </div>
  )
}

export default Hero;
