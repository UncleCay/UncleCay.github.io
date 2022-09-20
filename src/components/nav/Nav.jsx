import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdLibraryBooks} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import {FiChevronsDown} from 'react-icons/fi'
import {FiChevronsUp} from 'react-icons/fi'

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState("#");
  
  return (
    <nav>
      <div className="nav__links">
          <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} title="home"><AiOutlineHome /></a>
          <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} title="about"><SiAboutdotme /></a>
          <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} title="experience"><MdLibraryBooks /></a>
          <a href="#services" onClick={() => setActiveNav(prev => prev = "#services")} className={activeNav === "#services" ? "active" : ""} title="services"><RiServiceLine /></a>
          <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""} title="project"><MdWorkOutline /></a>
          <span onClick={() => setActiveNav("#footer")} className="go__down" title="go down"><FiChevronsDown /></span>
      </div>
    </nav>
  )
}

export default Nav

//<div onClick={() => setActiveNav("#home")} className="go__up" title="go up"><FiChevronsUp /></div>