import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdContactPage} from 'react-icons/md'
import thinking from '../../assets/thinking.png'

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
          <div className="btn_about">
            <span></span>
            <a href="#contact" className="card">
              <button>
              <MdContactPage className="about__icon"/>
              <h5>Contact Me</h5>
              </button>
            </a>
          </div>
          <div className="btn_about">
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
          <h3>Please Allow Me To Introduce Myself</h3>
          <p>
           I'm Caleb, a front-end reactjs developer, 
           with over 2 years of experience in responsive web development.<br />

            I love to write a Scalable and Readable lines of code that are easy to change and maintain.
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
      <div>My focus: <span>Scalable Code</span><span>Readable Code</span>
          <span>Reusable Code</span><span>Responsive Design</span>
          <span>Mobile-first App</span><span>Simple and eyecatchy Design</span>
          <span>User Friendly Design</span>
      </div><br />
      <div className="skills">
        <h3>CORE SKILLS:</h3>
        <h4 className="skills__slide1">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
        <h4 className="skills__slide2">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
      </div>
    </section>
  )
}

export default About
