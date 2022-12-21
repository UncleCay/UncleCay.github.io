import React from 'react'
import './nav.css'
import {FiChevronsDown, FiChevronsUp} from 'react-icons/fi'

const Nav = () => {
  
  return (
    <nav>
      <div className="nav__links">
          <a href="#home"   title="Scroll Up"><FiChevronsUp /></a>
          <a href="#footer"  className="go__down" title="Scroll Down"><FiChevronsDown /></a>
      </div>
    </nav>
  )
}

export default Nav