import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import './NavBar.scss';
import Logo from '../../Assets/Logo.png'

import {FaHome, FaWrench, FaRobot, FaBoxOpen} from 'react-icons/fa'
import {BsBuilding} from 'react-icons/bs'

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to="/"><img src={Logo} alt="Logo" className='logo'/></Link>
      <ul className='link-list'>
        <CustomLink to="/" className="highlight"><FaHome className='nav-Icon' size='1.25em'/>Home</CustomLink>
        <CustomLink to="/FTC" className="highlight"><FaWrench className='nav-Icon' size='1.25em'/>FTC</CustomLink>
        <CustomLink to="/RoboCamp" className="highlight"><FaRobot className='nav-Icon' size='1.25em'/>RoboCamp</CustomLink>
        <CustomLink to="/Sponsors" className="highlight"><BsBuilding className='nav-Icon' size='1.25em'/>Sponsors</CustomLink>
        <CustomLink to="/SIAB" className="highlight"><FaBoxOpen className='nav-Icon' size='1.25em'/>SIAB</CustomLink>
      </ul>
      <Link to="/Contact" className='contact'>Contact Us</Link>
    </nav>
  )
}

function CustomLink( { to, children, ...props } ) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })
  return <li className={ isActive ? "active" : "" }>
    <Link to={to} {...props}>{children}</Link>
  </li>
}

export default NavBar