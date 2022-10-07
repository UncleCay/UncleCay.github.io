import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'
import MenuLinks from './MenuLinks';
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Header = () => {
  const [bars, setBar] = React.useState(true);
  const changeBar = () => {
    setBar(prevBar => prevBar = !prevBar);
  }

  const menu = document.querySelector('.menu__links');
  const menuLinkClick = () => {
    menu.classList.add('fadeOut')
    setBar(prevBar => prevBar = !prevBar);
  }

  return (
    <header className="header__top">
      <h2 className="brand__name" title="Orakpor Caleb"><a href="#">OC</a></h2>
      <div className="header__links">
          <a className="header__icons" href="http://BsGithub.com" target="_blank"><BsGithub /></a>
          <a className="header__icons" href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <div className={bars ? "menu__bars" : "menu__bars change"} onClick={changeBar}>
            <div className="bar1 bar"></div>
            <div className="bar2 bar"></div>
            <div className="bar3 bar"></div>
        </div>
      </div>
        <MenuLinks barMode={bars} handleClick={menuLinkClick}/>
    </header>
  )
}

export default Header
