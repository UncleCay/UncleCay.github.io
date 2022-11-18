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
            <h1 className="txtLine4">I'm based in Lagos, Nigeria.</h1>
            <h1 className="txtLine5">I'm passionate about resposive web app</h1>
            </span>
          </div>
        </div>
        <HomeSocials />
      </div>
  )
}

export default Home
