import React from 'react'
import {BsGithub, BsWhatsapp, BsLinkedin, BsFacebook} from 'react-icons/bs'
const HomeSocials = () => {
  return (
    <div className='home__socials'>
      <div className="homesoc__icons">
        <span className="icon__row">
        <a href="http://BsGithub.com" target="_blank"><BsGithub /></a>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        </span>
        <span className="icon__row">
        <a href="http://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="http://whatsapp.com" target="_blank"><BsWhatsapp /></a>
        </span>
      </div>
    </div>
  )
}

export default HomeSocials
