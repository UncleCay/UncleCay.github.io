import React from 'react'
import CV from '../../assets/cv.pdf'

const MenuLinks = (props) => {
  return (
    <div className={props.barMode ? "menu__links fadeOut" : "menu__links fadeIn"}>
        <ul>
            <li><a href={CV} target='_blank'>Download CV</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default MenuLinks
