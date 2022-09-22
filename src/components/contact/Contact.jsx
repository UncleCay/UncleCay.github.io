import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <form className="contact__form">
          <div className="contact__heading">
            <h2>Contact Me</h2>
            <p>
              I'm interested in remote job opportunities
              fdfhl dfhdf dfdfod dfh dfpafdpdp dpfhd
              dpfdfoy  ufdhpfhp fdidp ifdpfdia dfh
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
          <div className="submit__btn">
            <span></span>
            <button type="submit">Send Message</button>
          </div>
        </form>
        <div className="contact__map">
          <div className="google__map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63041.17342008881!2d7.4711039999999995!3d9.0570752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1663021122403!5m2!1sen!2sng"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="my__location">
            </iframe>
            <div className="map__content">
              <p>Orakpor Caleb</p>
              <span>
                my address 
                <br />
                numbers with name
              </span>
                <br />
              <span>@: orakporcaleb@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
