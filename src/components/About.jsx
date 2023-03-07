import React from 'react'
import ProjectsIcon from '../assets/images/ProjectsIcon.svg'
import DesignIcon from '../assets/images/DesignIcon.svg'
import CodeIcon from '../assets/images/CodeIcon.svg'
import ThiarePhoto from '../assets/images/ThiarePhoto.jfif'

function About() {
  return (
    <div>
        <div className='border-y-2 border-sky-500/30 px-30 p-10 sm:p-10'>
            <div className='sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-10 sm:px-10 sm:py-5 space-y-4 mt-10 sm:space-y-0'>
                <div className='text-center border-2 rounded-xl border-sky-500/30 p-10 sm:w-64'>
                    <img src={ProjectsIcon} alt='ProjectsIcon' className='m-auto' />
                    <span className='text-xs'>3 ans</span>
                    <h3 className='text-xl font-bold'>Développement</h3>
                </div>

                <div className='text-center border-2 rounded-xl border-sky-500/30 p-10 sm:w-64 bg-sky-500/30'>
                    <img src={CodeIcon} alt='ProjectsIcon' className='m-auto' />
                    <span className='text-xs'>3 ans</span>
                    <h3 className='text-xl font-bold'>Projet</h3>
                </div>

                <div className='text-center border-2 rounded-xl border-sky-500/30 p-10 sm:w-64'>
                    <img src={DesignIcon} alt='ProjectsIcon' className='m-auto' />
                    <span className='text-xs'>2 ans</span>
                    <h3 className='text-xl font-bold'>Designer</h3>
                </div>
            </div>

            <div className='sm:flex sm:flex-row sm:mx-56 sm:justify-around sm:items-center sm:space-x-10 sm:px-10 sm:py-5 mt-10 hidden border-2 rounded-xl border-sky-500/30 bg-sky-500/30 p-10'> 
                <div className='text-center text-sky-400'>
                    <span className='text-xs'>3 ans</span>
                    <h3 className='text-xl font-bold'>Développement</h3>
                </div>

                <div className='text-center text-sky-400'>
                    <span className='text-xs'>3 ans</span>
                    <h3 className='text-xl font-bold'>Développement</h3>
                </div>

                <div className='text-center text-sky-400'>
                    <span className='text-xs'>3 ans</span>
                    <h3 className='text-xl font-bold'>Développement</h3>
                </div>
            </div>
        </div>


        <div className='sm:flex sm:justify-around sm:items-center p-10 sm:p-10'>
            <img src={ThiarePhoto} alt="ThiarePhoto" className='m-auto rounded-full w-64 h-64 mt-10' />
            <div className='sm:w-1/2 sm:px-2 sm:py-2 mt-10 sm:space-y-5'>
                <span className="bg-sky-500/30 text-sky-400 text-sm font-bold p-2 rounded-xl place-items-start">🧐 A propos</span>
                <h1 className='text-3xl font-bold'>THIARE Mohamed</h1>
                <p className='text-xs text-gray-500'>   
                    👋 Je m'appelle Mohamed THIARE, mais vous pouvez simplement m'appeler THIARE. Wollah! <br /><br />

                    👨‍💻 Depuis plus de 2 ans, je développe et programme des interfaces et propose des solutions web.<br />
                    🎓 Diplômé en developpement web et mobile à Simplon Sénégal et en Informatique de gestion à Ensup Africa.<br />
                    💡 Intérêts pour le développement web, mobile, le design et l'architecture logicielle.<br /><br />
                     
                    🚀 J'essaie de toujours apprendre de nouvelles choses, que ce soit en développement web, en design ou en gestion de projet.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
