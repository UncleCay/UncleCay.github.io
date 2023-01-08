import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <form className="contact__form">
          <div className="contact__heading">
            <h1>Contact Me</h1>
            <p>
            Are you looking for a responsive web developer? or any other inquiries?<br />
           You can Send an email via the form or chat with me using the Whatsapp icon at the bottom page.
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
      </div>
    </section>
  )
}

export default Contact

       /* <div className="contact__map">
          <div className="google__map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932557248!2d3.1438705913608556!3d6.548376812440139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1671655610669!5m2!1sen!2sng"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Caleb Orakpor - Location - Lagos Nigeria">
            </iframe>
            <div className="map__content">
              <p>Lagos, Nigeria. </p>
                <FcCellPhone />: +234 813 510 2532
                <br />
              <span><HiMail />: orakporcaleb@gmail.com</span>
            </div>
          </div>
        </div> */