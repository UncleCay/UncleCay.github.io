import React from 'react'
import { FcCellPhone } from 'react-icons/fc'
import { HiMail } from 'react-icons/hi'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <form className="contact__form">
          <div className="contact__heading">
            <h1>Contact Me</h1>
            <p>
              I'm interested in web development job and freelance opportunities.<br />
              However, if you have other request or question, don't hesitate to contact me.
            </p>
          </div>
          <div className="form__input__wrapper">
            <div className="name__email">
              <div className="form__input__group">
                <input type="text" placeholder='Name' name="name" className="name"/>
                <span></span>
              </div>
              <div className="form__input__group email__span">
                <input type="email" placeholder='Email' name="email" className="email"/>
                <span></span>
              </div>
            </div>
            <div className="form__input__group">
              <input type="text" placeholder='Subject' name="subject" className="subject"/>
              <span></span>
            </div>
            <div className="form__input__group">
            <textarea type="text" placeholder='Message' name="message" className="message"/>
            <span></span>
            </div>
          </div>
          <div className="errmsg"></div>
          <div className='submit__btn'>
          <div className="btn__color__fill">
            <span></span>
            <button type="submit">Send Message</button>
          </div>
          </div>
        </form>
        <div className="contact__map">
          <div className="google__map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.563649943426!2d3.3867207557453898!3d6.453655393503275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc9b07cf55%3A0xc4ae10b395418b9b!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1671654528746!5m2!1sen!2sng"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="my__location">
            </iframe>
            <div className="map__content">
              <p>Lagos, Nigeria. </p>
                <FcCellPhone />: +234 813 510 2532
                <br />
              <span><HiMail />: orakporcaleb@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
