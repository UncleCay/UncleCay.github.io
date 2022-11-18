import React from 'react'
import './services.css'
import webdev from '../../assets/webdev__icon.jpg'

const Services = () => {
  return (
    <section id="services">
      <h1>Services</h1>
      <div className='serviceCards'>
        <div className="serviceCard">
          <img src={webdev} alt="web dev"/>
          <h2>WEB DEVELOPMENT</h2>
          <h3>dlfffldjld</h3>
          <p>jfljldjdjld ldjfdljfd
            jdljfldjfld jdljfdljdl
          </p>
          <h4>fjdldjldjfjd</h4>
        </div>
        <div className="serviceCard">
          <img />
          <h2>Web Developer</h2>
          <h3>dlfffldjld</h3>
          <p>jfljldjdjld ldjfdljfd
            jdljfldjfld jdljfdljdl
          </p>
          <h4>fjdldjldjfjd</h4>
        </div>
        <div className="serviceCard">
          <img />
          <h2>Web Developer</h2>
          <h3>dlfffldjld</h3>
          <p>jfljldjdjld ldjfdljfd
            jdljfldjfld jdljfdljdl
          </p>
          <h4>fjdldjldjfjd</h4>
        </div>
      </div>
      <div className="lowerBackground"></div>
    </section>
  )
}

export default Services
