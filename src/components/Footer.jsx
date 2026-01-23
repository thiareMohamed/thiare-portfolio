import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='glass-effect border-t-2 border-sky-400/30 mt-20 py-8 px-4 md:px-20 relative overflow-hidden'>
        {/* Effet de fond */}
        <div className='absolute inset-0 bg-gradient-to-r from-sky-400/5 via-purple-400/5 to-pink-400/5'></div>
        
        <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 relative z-10'>
            <p className='text-gray-400 text-sm md:text-base'>
                Copyright © <span className='text-sky-400 font-semibold'>THIARE</span> · {currentYear}
            </p>
            <div className="flex space-x-4">
                <a 
                    href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" 
                    className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]' 
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
                    className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'
                    aria-label="GitHub"
                >
                    <FaGithubSquare />
                </a>
                <a 
                    href="https://twitter.com/ThiareMohamed29" 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='text-2xl text-sky-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]'
                    aria-label="Twitter"
                >
                    <FaTwitterSquare />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
