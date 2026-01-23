import React from 'react'
import ProjectsIcon from '../assets/images/ProjectsIcon.svg'
import DesignIcon from '../assets/images/DesignIcon.svg'
import CodeIcon from '../assets/images/CodeIcon.svg'
import ThiarePhoto from '../assets/images/ThiarePhoto.jfif'

function About() {
  return (
    <div className='relative py-20'>
        {/* Stats Cards */}
        <div className='border-y-2 border-sky-500/30 px-4 md:px-30 py-10 sm:py-10 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-sky-400/5 via-purple-400/5 to-pink-400/5'></div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center items-center px-4 sm:px-10 py-5 mt-10 relative z-10'>
                <div className='text-center glass-effect border-2 rounded-xl md:rounded-2xl border-sky-400/30 p-6 md:p-8 hover-lift hover:border-sky-400/60 transition-all duration-300 group'>
                    <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                        <img src={ProjectsIcon} alt='ProjectsIcon' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]' />
                    </div>
                    <span className='text-xs md:text-sm text-sky-400 font-semibold block mb-2'>4+ ans</span>
                    <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>Expérience</h3>
                </div>

                <div className='text-center glass-effect border-2 rounded-xl md:rounded-2xl border-purple-400/40 p-6 md:p-8 bg-gradient-to-br from-purple-400/20 to-sky-400/20 hover-lift hover:border-purple-400/70 transition-all duration-300 group'>
                    <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                        <img src={CodeIcon} alt='CodeIcon' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]' />
                    </div>
                    <span className='text-xs md:text-sm text-purple-400 font-semibold block mb-2'>10+ projets</span>
                    <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>Projets</h3>
                </div>

                <div className='text-center glass-effect border-2 rounded-xl md:rounded-2xl border-pink-400/30 p-6 md:p-8 hover-lift hover:border-pink-400/60 transition-all duration-300 group'>
                    <div className='mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                        <img src={DesignIcon} alt='DesignIcon' className='m-auto w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]' />
                    </div>
                    <span className='text-xs md:text-sm text-pink-400 font-semibold block mb-2'>Full-Stack</span>
                    <h3 className='text-xl md:text-2xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>Expertise</h3>
                </div>
            </div>
        </div>

        {/* About Section */}
        <div className='flex flex-col sm:flex-row sm:justify-around sm:items-center p-6 sm:p-10 md:p-20 relative'>
            <div className='relative mb-6 sm:mb-0 mx-auto sm:mx-0'>
                <div className='absolute inset-0 bg-gradient-to-r from-sky-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse'></div>
                <div className='relative border-2 md:border-4 border-sky-400/50 rounded-full p-1.5 md:p-2 hover:border-sky-400 transition-all duration-300 hover:scale-105'>
                    <img src={ThiarePhoto} alt="ThiarePhoto" className='rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]' />
                </div>
            </div>
            <div className='w-full sm:w-1/2 sm:px-4 md:px-8 sm:py-2 mt-6 sm:mt-10 space-y-4 sm:space-y-6'>
                <span className="inline-block glass-effect text-sky-400 text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-sky-400/30">
                    🧐 A propos
                </span>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center sm:text-left' style={{fontFamily: 'Orbitron, sans-serif'}}>
                    THIARE Mohamed
                </h1>
                <div className='glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300'>
                    <p className='text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed space-y-2 md:space-y-3'>   
                        <span className='block'>👋 Je m'appelle Mohamed THIARE, mais vous pouvez simplement m'appeler THIARE. Wollah!</span>

                        <span className='block'>👨‍💻 Développeur Full-Stack avec plus de 3 ans d'expérience, je développe et programme des interfaces et propose des solutions web et mobiles.</span>
                        <span className='block'>🎓 Titulaire d'un Master en Génie Logiciel à l'Institut Supérieur d'Informatique de Dakar, certifié Développeur Web et Mobile à Simplon Sénégal, et diplômé en Informatique de gestion à Ensup Afrique.</span>
                        <span className='block'>💡 Spécialisé dans le développement web (Angular, Vue.js, Next.js, Nuxt.js), mobile (Flutter), backend (Spring Boot, Nest.js), et passionné par l'architecture logicielle et le DevOps.</span>
                        <span className='block'>🏢 J'ai travaillé sur des projets majeurs comme le portail du Marché Public du Sénégal, Topatoko, ViziPass, et j'ai dirigé des équipes de développement.</span>
                         
                        <span className='block'>🚀 J'essaie de toujours apprendre de nouvelles choses, que ce soit en développement web, mobile, DevOps ou en gestion de projet.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
