import React from 'react'
import CV from '../../assets/cv.pdf'
import {BsGithub, BsWhatsapp, BsLinkedin, BsFacebook} from 'react-icons/bs'

const MenuLinks = (props) => {

  return (
    <div className={props.barCrossed ? "menu__links slideLeft" : "menu__links slideRight fadeOut"}>
      <div className='menu__list'>
        <ul>
            <li><a href={CV} target='_blank' onClick={props.handleClick}>Download CV</a></li>
            <li><a href="#about" onClick={props.handleClick}>About</a></li>
            <li><a href="#services" onClick={props.handleClick}>Services</a></li>
            <li><a href="#experience" onClick={props.handleClick}>Experience</a></li>
            <li><a href="#project" onClick={props.handleClick}>Projects</a></li>
            <li><a href="#contact" onClick={props.handleClick}>Contact</a></li>
           
        </ul>
      </div>
      <div className='menu__socials'>
        <a href="http://BsGithub.com" target="_blank"><BsGithub /></a>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="http://whatsapp.com" target="_blank"><BsWhatsapp /></a>
      </div>
    </div>
  )
}

export default MenuLinks
