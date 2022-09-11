import React from 'react'
import './home.css'
import HomeSocials from './HomeSocials'

const Home = () => {
  return (
      <div className="home">
        <div className="home__intro">
            <h1>Welcome!</h1>
            <h1 className="txtLine2">My name is <span className="my__name">Orakpor Caleb,</span></h1>
            <h1 className="txtLine3">I'm a reactjs front-end developer. <span className="emoji">&#128526;</span></h1>
        </div>
        <HomeSocials />
      </div>
  )
}

export default Home
