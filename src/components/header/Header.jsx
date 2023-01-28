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
        <h2 className="brand__name">
          <span className="inner__circle"></span>
          <a href="#home"><span className="char-one">C</span><span className="char-two">A</span><span className="char-three">L</span><span className="char-four">E</span><span className="char-five">B </span>
            <span className="char-six">O</span><span className="char-seven">R</span><span className="char-eight">A</span><span className="char-nine">K</span><span className="char-ten">P</span><span className="char-eleven">O</span><span className="char-twelve">R</span>
          </a>
        </h2>
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
