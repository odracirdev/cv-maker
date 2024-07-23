import React from 'react'
import logo from '../../../public/svg/logo.svg'
import dot from '../../../public/svg/dot.svg'
import { Link, NavLink } from 'react-router-dom'
import ButtonLink from '../ButtonLink'
import './styles.css'


export default function Navbar() {
  return (
    <>
    <header className='w-fit top-9 relative flex px-5 py-3 mx-auto justify-center items-center gap-12 rounded-[8px] bg-[#00000080] border-[0.2px] border-[#404040]'>
      <Link to="/">
    <img 
    src={logo}
    />
      </Link>

      <nav id='navbar' className='flex justify-between items-center gap-4'>
        <ul className='list-none flex gap-3'>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Inicio</NavLink>
            </li> 

        <img
        src={dot}
        />
        <li className='list-none'>
          <NavLink to="/chat" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Presentación</NavLink>
        </li>
        </ul>

      <ButtonLink 
      href='#' 
      text='Dircord'
      />

      <ButtonLink 
      href='/chat' 
      text='Iniciar ahora'
      />
        
      </nav>

    </header>
    </>
    
  )
}
