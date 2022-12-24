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
            <img src={Me} alt="Caleb Orakpor"/>
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
           Hello World!<br />
           My name is Caleb. I'm a front-end React developer, located in Nigeria.
          </h2>
          <p>
          From playing with a Bitmap image editor to HTML and CSS, now on Javascript, React, and more.
          I design and develop responsive websites using React.
          When working on a project, I pay attention to the smallest details addressing problems with patience.
          Web design and development help exercise my creative thinking and satisfy my desire for constant self-growth. 
          When I design, I put a high priority on responsiveness, scalability, user-friendliness, and simplicity.
          A concise, reusable, intelligible, and maintainable code is another goal of mine.
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
