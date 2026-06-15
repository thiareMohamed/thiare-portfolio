import React from 'react'
import { FaAngular, FaJava, FaReact, FaDocker, FaLock, FaGitAlt, FaHdd } from 'react-icons/fa'
import { SiTypescript, SiSpring, SiTailwindcss, SiPostgresql, SiNestjs, SiVuedotjs, SiNextdotjs, SiNuxtdotjs, SiFlutter, SiMongodb, SiApachekafka, SiPortainer, SiGitlab, SiMicrosoftazure } from 'react-icons/si'

function Skills() {
  const frontendTechs = [
    { icon: SiNuxtdotjs, name: 'Nuxt 3', color: 'text-green-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-washi' },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-400' },
    { icon: FaAngular, name: 'Angular', color: 'text-red-500' },
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-sky-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-300' },
  ];

  const backendTechs = [
    { icon: SiNestjs, name: 'NestJS', color: 'text-red-500' },
    { icon: SiSpring, name: 'Spring Boot', color: 'text-green-500' },
    { icon: FaJava, name: 'Java', color: 'text-orange-400' },
    { icon: SiApachekafka, name: 'Kafka', color: 'text-washi' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: FaHdd, name: 'MinIO', color: 'text-red-400' },
    { icon: FaLock, name: 'Keycloak', color: 'text-gold' },
  ];

  const devopsTechs = [
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiPortainer, name: 'Portainer', color: 'text-cyan-400' },
    { icon: SiGitlab, name: 'GitLab CI/CD', color: 'text-orange-500' },
    { icon: SiMicrosoftazure, name: 'Azure', color: 'text-blue-400' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-500' },
  ];

  const groups = [
    { title: 'Frontend & Mobile', subtitle: '表 · La forme', techs: frontendTechs, accent: 'crimson' },
    { title: 'Backend & Données', subtitle: '心 · Le cœur', techs: backendTechs, accent: 'gold' },
    { title: 'DevOps & Outils', subtitle: '盾 · Le rempart', techs: devopsTechs, accent: 'crimson' },
  ];

  return (
    <div className='text-center my-20 space-y-16 px-4 relative'>
      <div className='space-y-4'>
        <span className="inline-block glass-effect text-gold text-sm font-bold px-4 py-2 rounded-full border border-gold/30">
          🗡️ Compétences · 武器
        </span>
        <h2 className='text-4xl md:text-5xl font-bold gradient-text brush-underline' style={{ fontFamily: 'Cinzel, serif' }}>
          Mon arsenal technique
        </h2>
      </div>

      <div className='space-y-16 md:space-y-20 max-w-6xl mx-auto'>
        {groups.map((group, gi) => (
          <div key={gi} className='relative'>
            <h3 className='text-lg md:text-xl mb-2 text-washi font-semibold' style={{ fontFamily: '"Shippori Mincho", serif' }}>{group.title}</h3>
            <p className='text-xs md:text-sm text-gold/60 mb-8'>{group.subtitle}</p>
            <div className='flex flex-wrap justify-center gap-5 md:gap-7'>
              {group.techs.map((tech, index) => {
                const Icon = tech.icon;
                const border = group.accent === 'gold' ? 'border-gold/20 hover:border-gold/60' : 'border-crimson/20 hover:border-crimson/60';
                return (
                  <div
                    key={index}
                    className={`group relative glass-effect border ${border} rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover-lift cursor-pointer`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-crimson/10 to-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <Icon className={`text-4xl sm:text-5xl md:text-6xl ${tech.color} relative z-10 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`} />
                    <div className='absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <span className='text-xs text-washi/70 whitespace-nowrap'>{tech.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
