import React from 'react'
import {BsGithub, BsWhatsapp, BsLinkedin, BsFacebook} from 'react-icons/bs'
const HomeSocials = () => {
  return (
    <div className='home__socials'>
      <div className="homesoc__icons">
        <span className="icon__row">
        <a href="https://github.com/UncleCay" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/caleb-orakpor-12ab81209" target="_blank"><BsLinkedin /></a>
        </span>
        <span className="icon__row">
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="https://wa.me/2348135102532" target="_blank"><BsWhatsapp /></a>
        </span>
      </div>
    </div>
  )
}

export default HomeSocials
