import React from 'react'
import './home.css'

const Home = () => {

  return (
      <div id="home">
        <div className="home__intro">
          <div className="text__container">
            <h1 className="txtLine1">
              <span className='intro__char'>W</span><span>e</span><span className='intro__char'>l</span><span className='intro__char'>c</span><span className='intro__char'>o</span><span className='intro__char'>m</span><span className='intro__char'>e</span><span className='intro__char'>!</span></h1>
            <span className="intro__texts">
              <h2 className="txtLine2">
                <span className='intro__char'>M</span><span className='intro__char'>y </span><span className='intro__char'>n</span><span className='intro__char'>a</span><span className='intro__char'>m</span><span className='intro__char'>e </span>
                <span className='intro__char'>i</span><span className='intro__char'>s </span><span className='intro__char'>C</span><span className='intro__char'>a</span><span className='intro__char'>l</span><span className='intro__char'>e</span><span className='intro__char'>b, </span>
                <span className='intro__char'>O</span><span className='intro__char'>r</span><span className='intro__char'>a</span><span className='intro__char'>k</span><span className='intro__char'>p</span><span className='intro__char'>o</span><span className='intro__char'>r</span></h2>
              <h2 className="txtLine3">
                <span className='intro__char'>I'</span><span className='intro__char'>m </span><span className='intro__char'>a </span>
                <span className='intro__char'>f</span><span className='intro__char'>r</span><span className='intro__char'>o</span><span className='intro__char'>n</span><span className='intro__char'>t-</span><span className='intro__char'>e</span><span className='intro__char'>n</span><span className='intro__char'>d </span>
                <span className='intro__char'>d</span><span className='intro__char'>e</span><span className='intro__char'>v</span><span className='intro__char'>e</span><span className='intro__char'>l</span><span className='intro__char'>o</span><span className='intro__char'>p</span><span className='intro__char'>e</span><span className='intro__char'>r</span></h2>
              <h2 className="txtLine4">
                <span className='intro__char'>L</span><span className='intro__char'>o</span><span className='intro__char'>c</span><span className='intro__char'>a</span><span className='intro__char'>t</span><span className='intro__char'>e</span><span className='intro__char'>d </span>
                <span className='intro__char'>i</span><span className='intro__char'>n </span><span className='intro__char'>L</span><span className='intro__char'>a</span><span className='intro__char'>g</span><span className='intro__char'>o</span><span className='intro__char'>s, </span>
                <span className='intro__char'>N</span><span className='intro__char'>i</span><span className='intro__char'>g</span><span className='intro__char'>e</span><span className='intro__char'>r</span><span className='intro__char'>i</span><span className='intro__char'>a</span></h2>
              <h2 className="txtLine5">
                <span className='intro__char'>T</span><span className='intro__char'>h</span><span className='intro__char'>i</span><span className='intro__char'>s </span><span className='intro__char'>i</span><span className='intro__char'>s </span><span className='intro__char'>m</span><span className='intro__char'>y </span>
                <span className='intro__char'>p</span><span className='intro__char'>o</span><span className='intro__char'>r</span><span className='intro__char'>t</span><span className='intro__char'>f</span><span className='intro__char'>o</span><span className='intro__char'>l</span><span className='intro__char'>i</span><span className='intro__char'>o </span>
                <span className='intro__char'>w</span><span className='intro__char'>e</span><span className='intro__char'>b</span><span className='intro__char'>s</span><span className='intro__char'>i</span><span className='intro__char'>t</span><span className='intro__char'>e</span></h2>
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