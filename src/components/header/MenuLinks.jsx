import React from 'react'
import CV from '../../assets/cv.pdf'

const MenuLinks = (props) => {

  return (
    <div className={props.barMode ? "menu__links fadeOut" : "menu__links fadeIn"}>
        <ul>
            <li><a href={CV} target='_blank' onClick={props.handleClick}>Download CV</a></li>
            <li><a href="#about" onClick={props.handleClick}>About</a></li>
            <li><a href="#experience" onClick={props.handleClick}>Experience</a></li>
            <li><a href="#services" onClick={props.handleClick}>Services</a></li>
            <li><a href="#project" onClick={props.handleClick}>Projects</a></li>
            <li><a href="#testimonials" onClick={props.handleClick}>Testimonials</a></li>
            <li><a href="#contact" onClick={props.handleClick}>Contact</a></li>
        </ul>
    </div>
  )
}

export default MenuLinks
