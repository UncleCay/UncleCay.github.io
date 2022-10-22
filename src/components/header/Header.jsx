import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'
import MenuLinks from './MenuLinks';
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Header = () => {
  const [crossBars, setCrossBars] = React.useState(false);
  const changeBar = () => {
    setCrossBars(prevBar => prevBar = !prevBar);
  }

  const menu = document.querySelector('.menu__links');
  const menuLinkClick = () => {
    menu.classList.add('slideRight');
    setCrossBars(prevBar => prevBar = !prevBar);
  }

  return (
    <header className="header__top">
      <h2 className="brand__name" title="Orakpor Caleb"><a href="#">OC</a></h2>
        <div className={crossBars ? "menu__bars change" : "menu__bars"} onClick={changeBar}>
            <div className="bar1 bar"></div>
            <div className="bar2 bar"></div>
            <div className="bar3 bar"></div>
        </div>
        <MenuLinks barCrossed={crossBars} handleClick={menuLinkClick}/>
    </header>
  )
}

export default Header
