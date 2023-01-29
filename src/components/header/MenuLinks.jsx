import React from 'react'
import CV from '../../assets/CV.pdf'
import {BsGithub, BsWhatsapp, BsLinkedin, BsTwitter} from 'react-icons/bs'

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
        <a href="https://linkedin.com/caleb-orakpor-12ab81209" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://wa.me/2348135102532" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>
      <div>
      <a href="#home">
        <h2 className="brand__name"><span className="inner__circle"></span>
          <span className="char-one">C</span><span className="char-two">A</span><span className="char-three">L</span><span className="char-four">E</span><span className="char-five">B </span>
          <span className="char-six">O</span><span className="char-seven">R</span><span className="char-eight">A</span><span className="char-nine">K</span><span className="char-ten">P</span><span className="char-eleven">O</span><span className="char-twelve">R</span>
        </h2>
      </a>
      </div>
    </div>
  )
}

export default MenuLinks
