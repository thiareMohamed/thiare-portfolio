import React from 'react'
import { Projects } from '../assets/data/projects'
import CardProject from './CardProject'

function Project() {
  return (
    <div className='mx-4 md:mx-20 py-12 sm:py-20 relative'>
        <div className='space-y-4 sm:space-y-6 mb-8 sm:mb-12'>
            <span className="inline-block glass-effect text-sky-400 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-sky-400/30">
                🔗 Projects
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text" style={{fontFamily: 'Orbitron, sans-serif'}}>
                Projects
            </h1>
            <p className='text-gray-400 text-sm sm:text-base md:text-lg'>Découvrez mes réalisations et projets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {Projects.map((project) => (
                <CardProject key={project.id} value={project} />
            ))}
        </div>

        {/* Effets de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
    )
}

export default Project