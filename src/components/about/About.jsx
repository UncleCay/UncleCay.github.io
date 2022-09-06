import React from 'react'
import './about.css'
import Me from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="skills"><h3>SKILLS:</h3><h4 className="skills__slide1">HTML CSS BOOTSTRAP JAVASCRIPT(ES6) REACTJS FIGMA GIT/GITHUB</h4><h4 className="skills__slide2">HTML CSS BOOTSTRAP JAVASCRIPT(ES6) REACTJS FIGMA GIT/GITHUB</h4></div>
      <div><img src={Me}/></div>
    </section>
  )
}
      /*<div class="stage">
        <div class="cubespinner">
          <div class="face1">html</div>
          <div class="face2">css</div>
          <div class="face3">react</div>
          <div class="face4">bootstrap</div>
          <div class="face5">javascript</div>
          <div class="face6">figma</div>
        </div>
      </div>*/
export default About
