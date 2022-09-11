import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
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
                <input type="text" placeholder='Name' name="name"/>
                <span></span>
              </div>
              <div className="form__input__group email__span">
                <input type="email" placeholder='Email' name="email"/>
                <span></span>
              </div>
            </div>
            <div className="form__input__group">
              <input type="text" placeholder='Subject' name="subject"/>
              <span></span>
            </div>
            <div className="form__input__group">
            <textarea type="text" placeholder='Message' name="message"/>
            <span></span>
            </div>
          </div>
          <button type="submit" className="submit__btn">Send Message</button>
        </form>
        <div className="contact__map">
          <div className="google__map">
            <iframe src=""></iframe>
          </div>
          <div className="map__content">
            <p></p>
            <span>
              <br />
            </span>
              <br />
            <span></span>
          </div>
        </div>
    </section>
  )
}

export default Contact
