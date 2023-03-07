import React from 'react'
import logo from '../assets/images/logo.svg';

function Nav() {
  return (
    <header className="bg-sky-500/30 mx-20 rounded-xl sm:flex py-2 mt-3 items-center justify-between px-6 hidden">
        <div>
            <img src={logo} alt="logo" className="h-5" />
        </div>
        <nav>
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="Home" className="text-sm hover:text-sky-400">Accueil</a>
                </li>
                <li>
                    <a href="About" className="text-sm hover:text-sky-400">A propos</a>
                </li>
                <li>
                    <a href="Contact" className="text-sm hover:text-sky-400">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav
