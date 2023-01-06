import React from 'react'
import './home.css'

const Home = () => {

  return (
      <div id="home">
        <div className="home__intro">
          <div className="text__container">
            <h1 className="txtLine1">Welcome!</h1>
            <span className="intro__texts">
            <h2 className="txtLine2">My name is Caleb, <span>Orakpor.</span></h2>
            <h2 className="txtLine3">I'm a front-end React<span> developer</span></h2>
            <h2 className="txtLine4">Located in Lagos, <span>Nigeria</span></h2>
            <h2 className="txtLine5">This is my portfolio <span>website</span></h2>
            </span>
          </div>
          <div className="contact__link">
          <p className="gray__text"><span className="intro__line4">For your responsive web development</span></p>
        <a href="#contact" className="contact__button">
          <div>
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">Contact Me!</span>
          </div>
        </a>
          </div>
        </div>
      </div>
  )
}

export default Home

//<h3><a href="#contact"><button>Contact Me</button></a> for Your Responsive Website</h3>