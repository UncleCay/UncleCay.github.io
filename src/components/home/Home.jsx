import React from 'react'
import './home.css'
import HomeSocials from './HomeSocials'

const Home = () => {

  return (
      <div className="home">
        <div className="home__intro">
          <div className="text__container">
            <h1 className="txtLine1">Welcome!</h1>
            <span className="intro__texts">
            <h1 className="txtLine2">My name is <span className="my__name">Orakpor Caleb,</span></h1>
            <h1 className="txtLine3">I'm a front-end reactjs developer,</h1>
            <h1 className="txtLine4">Located in Lagos, Nigeria.</h1>
            <h1 className="txtLine5">This is my portfolio website.</h1>
            </span>
          </div>
        </div>
          <div className="contact__link">
            <h3><a href="#contact"><button>Contact Me</button></a> For Your Responsive Website and Application</h3>
          </div>
      </div>
  )
}

export default Home
