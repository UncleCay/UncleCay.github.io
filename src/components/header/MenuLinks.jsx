import React from 'react'
import CV from '../../assets/Resume.pdf'
import {BsGithub, BsWhatsapp, BsLinkedin} from 'react-icons/bs'

const MenuLinks = (props) => {

  return (
    <div className={props.barCrossed ? "menu__links slideLeft" : "menu__links slideRight fadeOut"}>
      <div className='menu__list'>
        <ul>
            <li><a href={CV} target='_blank' onClick={props.handleClick} rel="noreferrer">Download CV</a></li>
            <li><a href="#about" onClick={props.handleClick}>About</a></li>
            <li><a href="#services" onClick={props.handleClick}>Services</a></li>
            <li><a href="#experience" onClick={props.handleClick}>Experience</a></li>
            <li><a href="#project" onClick={props.handleClick}>Projects</a></li>
            <li><a href="#testimonials" onClick={props.handleClick}>My Quote</a></li>
            <li><a href="#contact" onClick={props.handleClick}>Contact</a></li>
        </ul>
      </div>
      <div className='menu__socials'>
        <a href="https://github.com/UncleCay" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://linkedin.com/in/caleb-orakpor" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://wa.me/2348135102532" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
      </div>
      <div>
      <a href="#home">
      <p className="brand__name">
          <span className="inner__circle"></span>
          <span className="char-one">C</span><span className="char-two">A</span><span className="char-three">L</span><span className="char-four">E</span><span className="char-five">B </span><span className="char-connect-one">* </span>
          <span className="char-six">C</span><span className="char-seven">A</span><span className="char-eight">L</span><span className="char-nine">E</span><span className="char-ten">B </span><span className="char-connect-two">* </span>
          <span className="char-eleven">C</span><span className="char-twelve">A</span><span className="char-thirteen">L</span><span className="char-fourteen">E</span><span className="char-fifteen">B </span><span className="char-connect-three">* </span>
        </p>
      </a>
      </div>
    </div>
  )
}

export default MenuLinks
