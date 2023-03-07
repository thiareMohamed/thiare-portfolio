import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';


function Footer() {
  return (
    <div className='bg-sky-500/30 mt-10 p-5 flex'>
        <p>Copyright © THIARE · 2023</p>
        <div className="flex mb-5 space-x-3 m-auto">
            <a href="https://www.linkedin.com/in/mohamed-thiare-b49b03214/" className='hover:text-sky-400 text-2xl' target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/thiareMohamed" target='_blank' className='hover:text-sky-400 text-2xl'><FaGithubSquare /></a>
            <a href="https://twitter.com/ThiareMohamed29" target='_blank' className='hover:text-sky-400 text-2xl'><FaTwitterSquare /></a>
        </div>
    </div>
  )
}

export default Footer
