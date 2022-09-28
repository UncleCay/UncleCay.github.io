import React from 'react'
import './footer.css'
import {BsGithub, BsWhatsapp, BsLinkedin, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="http://BsGithub.com" target="_blank"><BsGithub /></a>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="http://whatsapp.com" target="_blank"><BsWhatsapp /></a>
      </div>
      <p></p>
      <h4>Developed by Orakpor Caleb. &#169; copyright <strong>DevCaleb. </strong>All Rights Reserved</h4>
    </footer>
  )
}

export default Footer
