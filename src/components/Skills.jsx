import React from 'react'
import { FaAngular, FaHtml5, FaGitAlt, FaGithub, FaJava, FaSass, FaReact, FaFigma, FaDocker } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiTypescript, SiJavascript, SiCss3, SiSpring, SiTailwindcss, SiPostgresql } from 'react-icons/si'
import { SiNestjs } from 'react-icons/si'

function Skills() {
  return (
    <div className='text-center my-10 space-y-10'>
      <span className="bg-sky-500/30 text-sky-400 text-sm font-bold p-2 rounded-xl">🧑‍💻 Skills & Experiences</span>
      <h2 className='text-2xl font-bold'>Technologies et stacks</h2>
        <div className='space-y-16'>
            <div>
                <h3 className='text-sm mb-5'>Les Technologies que j'utilisent tous les jours</h3>
                <div className='text-sky-400/40 flex space-x-10 justify-center'>
                    <FaAngular className='text-5xl' />
                    <GrMysql className='text-5xl' />
                    <SiTypescript className='text-5xl' />
                    <SiJavascript className='text-5xl' />
                    <SiCss3 className='text-5xl' />
                    <FaHtml5 className='text-5xl' />
                    <SiSpring className='text-5xl' />
                    <FaGitAlt className='text-5xl' />
                    <FaGithub className='text-5xl' />
                </div>
            </div>
            <div>
                <h3 className='text-sm mb-5'>Les autres technologies que j'utilisent</h3>
                <div className='text-sky-400/40 flex space-x-5 justify-center'>
                    <FaReact className='text-5xl' />
                    <SiNestjs className='text-5xl' />
                    <FaJava className='text-5xl' />
                    <FaSass className='text-5xl' />
                    <SiTailwindcss className='text-5xl' />
                    <SiPostgresql className='text-5xl' />
                    <FaFigma className='text-5xl' />
                    <FaDocker className='text-5xl' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills