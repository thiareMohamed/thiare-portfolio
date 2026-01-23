import React from 'react'
import { FaAngular, FaHtml5, FaGitAlt, FaGithub, FaJava, FaSass, FaReact, FaFigma, FaDocker, FaLock, FaCode } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiTypescript, SiJavascript, SiCss3, SiSpring, SiTailwindcss, SiPostgresql, SiNestjs, SiVuedotjs, SiNextdotjs, SiNuxtdotjs, SiFlutter, SiMongodb, SiApachekafka, SiIonic, SiAmazonaws, SiMicrosoftazure } from 'react-icons/si'

function Skills() {
  const dailyTechs = [
    { icon: FaAngular, name: 'Angular', color: 'text-red-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiSpring, name: 'Spring Boot', color: 'text-green-400' },
    { icon: SiNestjs, name: 'NestJS', color: 'text-red-500' },
    { icon: FaJava, name: 'Java', color: 'text-orange-500' },
    { icon: GrMysql, name: 'MySQL', color: 'text-blue-400' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-500' },
  ];

  const frontendTechs = [
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-300' },
    { icon: SiNuxtdotjs, name: 'Nuxt.js', color: 'text-green-300' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-400' },
    { icon: SiIonic, name: 'Ionic', color: 'text-blue-500' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-300' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-400' },
    { icon: FaSass, name: 'Sass', color: 'text-pink-400' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-300' },
  ];

  const backendDevopsTechs = [
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiApachekafka, name: 'Kafka', color: 'text-gray-400' },
    { icon: FaLock, name: 'Keycloak', color: 'text-blue-400' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: SiAmazonaws, name: 'AWS', color: 'text-orange-400' },
    { icon: SiMicrosoftazure, name: 'Azure', color: 'text-blue-400' },
    { icon: FaCode, name: 'JHipster', color: 'text-purple-400' },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-300' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-400' },
  ];

  return (
    <div className='text-center my-20 space-y-16 px-4 relative'>
      <div className='space-y-4'>
        <span className="inline-block glass-effect text-sky-400 text-sm font-bold px-4 py-2 rounded-full border border-sky-400/30">
          🧑‍💻 Skills & Experiences
        </span>
        <h2 className='text-4xl md:text-5xl font-bold gradient-text' style={{fontFamily: 'Orbitron, sans-serif'}}>
          Technologies et stacks
        </h2>
      </div>

      <div className='space-y-20'>
        {/* Core Technologies */}
        <div className='relative'>
          <h3 className='text-lg md:text-xl mb-10 text-gray-300 font-medium'>Technologies principales</h3>
          <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
            {dailyTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  className='group relative glass-effect border-2 border-sky-400/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-sky-400/60 transition-all duration-300 hover-lift cursor-pointer'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-sky-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon className={`text-4xl sm:text-5xl md:text-6xl ${tech.color} relative z-10 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`} />
                  <div className='absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-xs text-gray-400 whitespace-nowrap'>{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className='relative'>
          <h3 className='text-lg md:text-xl mb-10 text-gray-300 font-medium'>Frontend & Mobile</h3>
          <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
            {frontendTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  className='group relative glass-effect border-2 border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover-lift cursor-pointer'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon className={`text-4xl sm:text-5xl md:text-6xl ${tech.color} relative z-10 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`} />
                  <div className='absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-xs text-gray-400 whitespace-nowrap'>{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Backend & DevOps */}
        <div className='relative'>
          <h3 className='text-lg md:text-xl mb-10 text-gray-300 font-medium'>Backend, DevOps & Outils</h3>
          <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
            {backendDevopsTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  className='group relative glass-effect border-2 border-pink-400/20 rounded-2xl p-6 hover:border-pink-400/60 transition-all duration-300 hover-lift cursor-pointer'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-pink-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon className={`text-4xl sm:text-5xl md:text-6xl ${tech.color} relative z-10 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`} />
                  <div className='absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-xs text-gray-400 whitespace-nowrap'>{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills