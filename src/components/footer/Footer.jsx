import React from 'react'
import './footer.css'
import {BsGithub, BsWhatsapp, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <a href="http://github.com/UncleCay" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="http://linkedin.com/caleb-orakpor-12ab81209" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="http://wa.me/2348135102532" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>
      <p>&#169; Caleb Orakpor - All Rights Reserved<br /><span><AiFillPhone />+23481 3510 2532</span><br />orakporcaleb@gmail.com</p>
    </footer>
  )
}

export default Footer
