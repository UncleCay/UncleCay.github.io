import React from 'react'
import './header.css'
import MenuLinks from './MenuLinks';

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
        <h2 className="brand__name"><a href="#home">OC</a></h2>
      <div className={crossBars ? "menu__bars change" : "menu__bars"} onClick={changeBar}>
        <h4 className="menu__label">
          <span className="char1">M</span>
          <span className="char2">e</span>
          <span className="char3">n </span>
          <span className="char4">u</span>
          <span className="char5">B</span>
          <span className="char6">u</span>
          <span className="char7">t</span>
          <span className="char8">t</span>
          <span className="char9">o</span>
          <span className="char10">n</span>
        </h4>
              <div className="bar1 bar"></div>
              <div className="bar2 bar"></div>
              <div className="bar3 bar"></div>
        </div>
        <MenuLinks barCrossed={crossBars} handleClick={menuLinkClick}/>
    </header>
  )
}

export default Header
