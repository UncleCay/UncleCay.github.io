import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdContactPage} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about__container">
        <div className="img__container">
          <div className="about__img">
            <img src={Me}/>
          </div>
          <div className="cards">
          <div className="btn__color__fill">
            <span></span>
            <a href="#contact" className="card">
              <button>
              <MdContactPage className="about__icon"/>
              <h5>Contact Me</h5>
              </button>
            </a>
          </div>
          <div className="btn__color__fill">
            <span></span>
              <a href="#project" className="card">
            <button>
                <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
            </button>
              </a>
          </div>
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
          <h3>blaljdjldf</h3>
          <p>
            dfhdlkfhd khfdhdfj hfdhdkjhfklhfd khfkdhfk<br />
            dlfjdl jfdlfjdo ifo ejoejf ;lefld dklfj dklfj dfj
            fdljfl djfldgge oihgei hoei;hfa lihd ;lfh;fdljf
            fldj;fkdj f;ldj;lk djfdjfdlj fldj f;djf;d jf;dj
          </p>
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
        <h3>CORE SKILLS:</h3>
        <h4 className="skills__slide1">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
        <h4 className="skills__slide2">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
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
