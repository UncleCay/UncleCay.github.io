import React from 'react'
import './experience.css'
import CV from '../../assets/cv.pdf'
import CT from '../../assets/certification_logo2.jpg'
import EDU from '../../assets/education_logo2.png'

const Experience = () => {
  return (
    <section id="experience">
        <h1>Experience</h1>
      <div className="experience__wrapper">
        <div className="flip__card">
          <div className="qualifications">
            <div className="quali__card__back">
              <div className="logo_div">
                <img src={EDU} alt="Education" />
                <h2>Education</h2>
              </div>
              <p>Bachelor of Engineering - Electronic Engineering<br />University of Nigeria Nsukka (UNN)<br />
                <span>2014-2019</span></p>
            </div>
            <div className="quali__card__front">
              <div className="logo_div">
                <img src={CT} alt="Certification" />
                <h2>Certifications</h2>
              </div>
              <p> Responsive Web development - Udemy<br />
              <span>Febuary 27, 2020.</span></p><br />
              <p>Javascript Algorithm and Data Structure - Freecodecamp<br />
              <span>July 13, 2022.</span></p>
            </div>
          </div>
        </div>
      </div>
        <div className="work__experience">
          <div>
            <p>For my work experience and more, Click the botton below to view my CV</p>
            <a href={CV} target='_blank'><button>My Resume</button></a>
          </div>
        </div>
    </section>
  )
}

export default Experience
