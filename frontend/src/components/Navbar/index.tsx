/* eslint-disable react/react-in-jsx-scope */

import './styles.css'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import dot from '../../../public/svg/dot.svg'
import logo from '../../../public/svg/logo.svg'
import ButtonLink from '../ButtonLink'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    {
      name: 'Inicio',
      to: '/'
    },
    {
      name: 'Presentación',
      to: '/chat'
    }
  ]

  return (
    <>
      <header
        className={cn(
          'w-full lg:w-fit lg:top-9 lg:relative z-20 flex justify-between px-2 lg:px-5 py-3 mx-auto absolute lg:justify-center lg:items-center lg:rounded-[8px] gap-5 bg-[#00000080] lg:border-[0.2px] lg:border-[#404040]'
        )}
      >
        <Link to="/">
          <img src={logo} />
        </Link>

        <nav
          className={`navbar  ${isMenuOpen ? 'navbar-mobile-show' : 'navbar-mobile-hide'}`}
        >
          <ul className="flex flex-col lg:flex-row text-center gap-3 items-center">
            {links.map((link, index) => (
              <>
                <li key={index}>
                  <NavLink to={link.to} className="navlink">
                    {link.name}
                  </NavLink>
                </li>
                {index !== links.length - 1 && (
                  <div className="hidden lg:block">
                    <img src={dot} />
                  </div>
                )}
              </>
            ))}
          </ul>

          <ButtonLink href="#" text="Dircord" className="text-center" />
          <ButtonLink
            href="/chat"
            text="Iniciar ahora"
            className="text-center"
          />
        </nav>

        <div
          className={`button-mobile-menu lg:hidden ${isMenuOpen ? 'button-mobile-menu-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bars bar-top"></span>
          <span className="bars bar-middle"></span>
          <span className="bars bar-bottom"></span>
        </div>
      </header>
    </>
  )
}
