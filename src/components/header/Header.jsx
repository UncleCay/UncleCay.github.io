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
  return (
    <header className="header__top">
      <h2 className="brand__name" title="Logo">OC</h2>
      <div className="header__links">
          <a className="header__icons_cv" href="http://BsGithub.com" target="_blank"><BsGithub /></a>
          <a className="header__icons_cv" href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
          <a className="header__icons_cv" href={CV} target="_blank">CV</a>
          <a className="lets__talk" href="#contact">Let's Talk</a>
        <div className={bars ? "menu__bars" : "menu__bars change"} onClick={changeBar}>
            <div className="bar1 bar"></div>
            <div className="bar2 bar"></div>
            <div className="bar3 bar"></div>
        </div>
      </div>
        <MenuLinks barMode={bars}/>
    </header>
  )
}

export default Header
