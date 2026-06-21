import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='glass-effect border-t border-gold/30 mt-20 py-10 px-4 md:px-20 relative overflow-hidden'>
      {/* Effet de fond */}
      <div className='absolute inset-0 bg-gradient-to-r from-crimson/5 via-gold/5 to-crimson/5'></div>

      <div className='relative z-10 flex flex-col items-center gap-4'>
        <span className="text-gold/80 text-sm tracking-[0.3em] font-samurai">侍 · 武士道 · 侍</span>
        <p className='text-washi/50 text-xs italic text-center max-w-md'>
          « La discipline forge le code, le code sert la vision. »
        </p>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/"
            className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,140,224,0.8)]'
            target='_blank'
            rel='noopener noreferrer'
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/thiareMohamed"
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,140,224,0.8)]'
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://twitter.com/ThiareMohamed29"
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-gold hover:text-crimson-light transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,140,224,0.8)]'
            aria-label="Twitter"
          >
            <FaTwitterSquare />
          </a>
        </div>

        <p className='text-washi/50 text-sm md:text-base'>
          Copyright © <span className='text-crimson-light font-semibold'>Mohamed THIARE</span> · {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer
