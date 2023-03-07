import React from 'react'
import { Projects } from '../assets/data/projects'
import CardProject from './CardProject'

function Project() {
  return (
    <div className='mx-20'>
        <span className="bg-sky-500/30 text-sky-400 text-sm font-bold p-2 rounded-xl place-items-start">🔗 Projects</span>
        <h1 className="text-3xl font-bold mt-4">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
            {Projects.map((project) => (
                <CardProject value={project} />
            ))}
        </div>
    </div>
    )
}

export default Project