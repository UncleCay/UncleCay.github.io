import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="project__cards">
        <div className="project__card__row">
          <div className="project__card project__one">
            
              <a href="#project">view project</a>
            <span className="project__description">
              <h2>Meme Generator</h2>
              </span>
          </div>
          <div className="project__card project__two">
          
              <a href="#project">view project</a>
            <span className="project__description">
              <h2>Schedule Manager</h2>
              </span>
          </div>
          <div className="project__card project__three">
          
              <a href="#project">view project</a>
            <span className="project__description">
              <h2>...COMMING SOON...</h2>
              <h2>Automated Food Vending Machine</h2>
              </span>
          </div>
        </div>
      </div>
      <div className="project__foot"></div>
    </section>
  )
}

export default Project
