import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about__container">
        <div className="img__container">
          <div className="img__div">
            <img src={Me}/>
          </div>
          <div className="cards">
            <article className="card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
              <article className="card">
                <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
          </div>
        </div>
        <div className="about__content">
          <h3>blaljdjldf</h3>
          <p>
            dfhdlkfhd khfdhdfj hfdhdkjhfklhfd khfkdhfk<br />
            dlfjdl jfdlfjdo ifo ejoejf ;lefld dklfj dklfj dfj
            fdljfl djfldgge oihgei hoei;hfa lihd ;lfh;fdljf
            fldj;fkdj f;ldj;lk djfdjfdlj fldj f;djf;d jf;dj
          </p>
        </div>
      </div>
      <div className="skills">
        <h3>SKILLS:</h3>
        <h4 className="skills__slide1">HTML CSS BOOTSTRAP JAVASCRIPT(ES6) REACTJS FIGMA GIT/GITHUB</h4>
        <h4 className="skills__slide2">HTML CSS BOOTSTRAP JAVASCRIPT(ES6) REACTJS FIGMA GIT/GITHUB</h4>
      </div>
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
