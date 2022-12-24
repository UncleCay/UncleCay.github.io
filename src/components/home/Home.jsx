import React from 'react'
import './home.css'

const Home = () => {

  return (
      <div id="home">
        <div className="home__intro">
          <div className="text__container">
            <h1 className="txtLine1">Welcome!</h1>
            <span className="intro__texts">
            <h2 className="txtLine2">My name is <span className="my__name">Caleb Orakpor,</span></h2>
            <h2 className="txtLine3">I'm a front-end React developer,</h2>
            <h2 className="txtLine4">Located in Lagos, Nigeria.</h2>
            <h2 className="txtLine5">This is my portfolio website.</h2>
            </span>
          </div>
        </div>
          <div className="contact__link">
            <h3><a href="#contact"><button>Contact Me</button></a> For Your Responsive Web desing and development</h3>
          </div>
      </div>
  )
}

export default Home
