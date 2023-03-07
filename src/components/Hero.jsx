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
    <div className='space-y-16 mb-20'>
      <Nav />

        <div className="hero flex flex-col md:flex-row items-center justify-around space-y-5 md:space-y-0 md:space-x-5">
            <div className="flex sm:hidden mb-5 space-x-3 m-auto">
                <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" className='hover:text-sky-400 text-2xl' target='_blank'><FaLinkedin /></a>
                <a href="https://github.com/thiareMohamed" target='_blank' className='hover:text-sky-400 text-2xl'><FaGithubSquare /></a>
                <a href="https://twitter.com/ThiareMohamed29" target='_blank' className='hover:text-sky-400 text-2xl'><FaTwitterSquare /></a>
            </div>
            <div className="hero__image flex sm:hidden">    
                <img src={AvatarAndIcons} alt="hero" className='w-96 h-96' />
            </div>
            <div className="hero__content space-y-3">
                <span className="bg-sky-500/30 text-sky-400 text-sm font-bold p-2 rounded-xl place-items-start">👋 Salutation!</span>
                <h1 className="text-4xl font-bold text-left">Mohamed <br /> THIARE</h1>
                <p className="text-sm text-left font-light mt-2">Full-stack developer · UI designer</p>
                <div className="sm:flex hidden mt-5 space-x-3">
                    <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" className='hover:text-sky-400' target='_blank'><FaLinkedin /></a>
                    <a href="https://github.com/thiareMohamed" target='_blank' className='hover:text-sky-400'><FaGithubSquare /></a>
                    <a href="https://twitter.com/ThiareMohamed29" target='_blank' className='hover:text-sky-400'><FaTwitterSquare /></a>
                </div>
            </div>
            <div className="hero__image sm:flex hidden">    
                <img src={AvatarAndIcons} alt="hero" className='w-96 h-96' />
            </div>
            <div className="hero__cv text-center">
                <a href={CV} target='_blank' className='flex space-x-2 items-center text-sky-400/30 hover:text-sky-400'>
                    <span className='text-xs text-left font-light mt-2'>Télécharger mon CV</span>
                    <FaCloudDownloadAlt className='mt-2' />
                </a>
                
                <button onClick={openWhatsapp} className='flex space-x-2 items-center text-sky-400/30 hover:text-sky-400 border-sky-400/30 rounded-xl mt-2'>
                    <span className='text-xl text-left font-light mt-2 self-center'>Me contacter</span>
                    <FaWhatsappSquare className='mt-3 self-center' />
                </button>

            </div>
        </div>
    </div>
  )
}

export default Hero;
