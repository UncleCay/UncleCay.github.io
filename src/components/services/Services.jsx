import React from 'react'
import './services.css'
import webdev from '../../assets/webdev__icon2.jpg'
import psdToCode from '../../assets/psd_to_code.PNG'

const Services = () => {
  return (
    <section id="services">
      <div className='service__container'>
      <h1>Services</h1>
      <div className='serviceCards'>
        <div className="serviceCard">
          <img src={webdev} alt="Caleb Orakpor - webdev_icon"/>
          <h3>WEB DEVELOPMENT</h3>
          <p> 
            We use clean codes and a customized approach to infuse creativity and interactivity into your already existing websites or from scratch.
          </p>
        </div>
        <div className="serviceCard">
          <img src={psdToCode} alt="Caleb Orakpor - psd-code_icon"/>
          <h3>PSD TO CODE</h3>
          <p> 
            We convert PSD, Sketch, Ai, Figma files, and Adobe XD files into pixel-perfect standards that are compliant with HTML5/CSS3/Bootstrap3/4 templates.
          </p>
        </div>
      </div>
      <div className="serviceMuscle">
      <div className="muscle startMuscle">
          <h3>Languages I Speak</h3>
          <ul>
            <li><span className="bullet"></span>HTML,</li>
            <li><span className="bullet"></span>CSS,</li>
            <li><span className="bullet"></span>Javascript,</li>
            <li><span className="bullet"></span>React, & Git CL.</li>
          </ul>
        </div>
        <div className="muscle">
          <h3>Dev Tools</h3>
          <ul>
            <li><span className="bullet"></span>VS Code,</li>
            <li><span className="bullet"></span>GitHub,</li>
            <li><span className="bullet"></span>Git Bash,</li>
            <li><span className="bullet"></span>Bootstrap.</li>
          </ul>
        </div>
        <div className="muscle">
          <h3>Design Tools</h3>
          <ul>
            <li><span className="bullet"></span>Paint graphics editor,</li>
            <li><span className="bullet"></span>Figma,</li>
            <li><span className="bullet"></span>WordPress,</li>
            <li><span className="bullet"></span>Pen & Paper sketch.</li>
          </ul>
        </div>
        <div className="muscle endMuscle">
          <h3>My Qualities</h3>
          <ul>
            <li><span className="bullet"></span>Good Communication,</li>
            <li><span className="bullet"></span>Active Listening,</li>
            <li><span className="bullet"></span>Critical Thinking,</li>
            <li><span className="bullet"></span>Organisation and Time Management.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services

        /*<div className="serviceCard">
          <img src={ui_ux} alt="Caleb Orakpor - ui-ux_icon"/>
          <h2>UI/UX</h2>
          <p> I design from scratch and improve 
            user-interface and user-experience of already existing website and web application
            using Figma and Paint graphics editor.
          </p>
        </div>
        <div className="serviceCard">
          <img src={image_editor} alt="Caleb Orakpor - Image_editor_icon"/>
          <h2>IMAGE EDITING</h2>
          <p> Using tools like Paint graphics editor and Adobe Photoshop,
            I can modify any kind of image file to your specifications.
          </p>
        </div>*/