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
            <h1 className="txtLine3">I'm a reactjs front-end developer <span className="emoji"></span></h1>
            <h1 className="txtLine4">This is my portfolio website<span className="emoji"></span></h1>
            <h1 className="txtLine5">Feel free to contact me anytime<span className="emoji">&#128526;</span></h1>
            </span>
          </div>
        </div>
        <HomeSocials />
      </div>
  )
}

export default Home
