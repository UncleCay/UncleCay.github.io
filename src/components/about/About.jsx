import React from 'react'
import './about.css'
import Me from '../../assets/me3.png'
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
          <h2>
          <strong> Hello World!</strong> <br />
           My name is Caleb. I'm a front-end reactjs web developer located in Nigeria.
          </h2>
          <br />
          <p>
          I design and develop websites and web applications using HTML, CSS and JavaScript.
          When working on a project, I pay attention to the smallest details addressing problems with patience.
          Web design and development help me to flex my creative mind and allow me to satisfy my desire for constant self-growth.
          </p>
          <p>
          I prioritize responsiveness, scalability, user-friendliness, and simplicity when I design. 
          I also strive to make my code concised, reusable, understandable, and maintainable.
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

export default About
