import React from 'react'
import './about.css'
import Me from '../../assets/about__me.png'
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
           <span className="about__scroll">Hello World!</span><br />
           <span className='about__scroll'>My name is Caleb. I'm a front-end React developer.</span>
          </h2>
          <p>
          <span className="about__scroll">I started with Paint graphic editor, but the moment I executed “hello world” on the development consolde, I knew right away that this was my passion and since then, I have been writing more than just “hello world”. </span>
          <span className="about__scroll">I design and develop responsive websites using React. </span>
          <span className="about__scroll">When working on a project, I pay attention to the smallest details addressing problems with patience. </span>
          <span className="about__scroll">Web design and development help exercise my creative thinking and satisfy my desire for constant self-growth. </span> 
          <span className="about__scroll">When I design, I put my priority on responsiveness, scalability, simplicity, and user-friendliness. </span>
          <span className="about__scroll">A concise, reusable, intelligible, and maintainable code is another goal of mine. I strive for a constant self growth.</span>
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
