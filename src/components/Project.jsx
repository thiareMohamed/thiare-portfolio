import React from 'react'
import { Projects } from '../assets/data/projects'
import CardProject from './CardProject'

function Project() {
  return (
    <div className='mx-4 md:mx-20 py-12 sm:py-20 relative'>
      <span className='kanji-watermark absolute top-10 right-0 text-[18vw] z-0'>戦</span>
      <div className='space-y-4 sm:space-y-6 mb-8 sm:mb-12 relative z-10'>
        <span className="inline-block glass-effect text-gold text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/30">
          🏯 Projets · 作品
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text brush-underline" style={{ fontFamily: 'Cinzel, serif' }}>
          Mes campagnes
        </h2>
        <p className='text-washi/60 text-sm sm:text-base md:text-lg pt-2'>Découvrez mes réalisations et projets marquants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
        {Projects.map((project) => (
          <CardProject key={project.id} value={project} />
        ))}
      </div>

      {/* Effets de fond */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  )
}

export default Project
