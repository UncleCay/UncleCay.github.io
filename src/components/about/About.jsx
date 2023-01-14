import React from 'react'
import './about.css'
import Me from '../../assets/me5.png'
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
           <span className="hello">Hello World!</span><br />
           <span className='my__name'>My name is Caleb. I'm a front-end React developer, located in Nigeria.</span>
          </h2>
          <p>
          <span className="p__span">From playing with a Paint graphics editor to HTML and CSS, now on Javascript, React, and more.</span>
          <span className="p__span">I design and develop responsive websites using React.</span>
          <span className="p__span">When working on a project, I pay attention to the smallest details addressing problems with patience.</span>
          <span className="p__span">Web design and development help exercise my creative thinking and satisfy my desire for constant self-growth.</span> 
          <span className="p__span">When I design, I put a high priority on responsiveness, scalability, user-friendliness, and simplicity.</span>
          <span className="p__span">A concise, reusable, intelligible, and maintainable code is another goal of mine.</span>
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
