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
      <a href="#home">
        <p className="brand__name">
          <span className="inner__circle"></span>
          <span className="char-one">C</span><span className="char-two">A</span><span className="char-three">L</span><span className="char-four">E</span><span className="char-five">B </span><span className="char-connect-one">* </span>
          <span className="char-six">C</span><span className="char-seven">A</span><span className="char-eight">L</span><span className="char-nine">E</span><span className="char-ten">B </span><span className="char-connect-two">* </span>
          <span className="char-eleven">C</span><span className="char-twelve">A</span><span className="char-thirteen">L</span><span className="char-fourteen">E</span><span className="char-fifteen">B </span><span className="char-connect-three">* </span>
        </p>
      </a>
      <div className={crossBars ? "menu__bars change" : "menu__bars"} onClick={changeBar}>
              <div className="bar1 bar"></div>
              <div className="bar2 bar"><p>MENU</p></div>
              <div className="bar3 bar"></div>
        </div>
        <MenuLinks barCrossed={crossBars} handleClick={menuLinkClick}/>
    </header>
  )
}

export default Header
