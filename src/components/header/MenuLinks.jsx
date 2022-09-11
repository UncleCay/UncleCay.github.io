import React from 'react'
import CV from '../../assets/cv.pdf'

const MenuLinks = (props) => {
  return (
    <div className={props.barMode ? "menu__links fadeOut" : "menu__links fadeIn"}>
        <ul>
            <li><a href={CV} target='_blank'>Download CV</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default MenuLinks
