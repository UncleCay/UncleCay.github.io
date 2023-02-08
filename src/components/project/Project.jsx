import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="project__cards">
        <div className="project__card__row">
          <div className="project__card project__one">
            
            <span className="project__description">
              <h2>Schedule Manager</h2>
            </span>
              <a href="https://github.com/UncleCay/schedule-manager" target="_blank" rel="noreferrer">Source Code</a>
          </div>
          <div className="project__card project__two">
          
            <span className="project__description">
              <h2>Meme Generator</h2>
            </span>
              <a href="https://github.com/UncleCay/meme-generator" target="_blank" rel="noreferrer">Source Code</a>
          </div>
          <div className="project__card project__three">
      
            <span className="project__description">
              <h2>...COMMING SOON...</h2>
              <h2>Automated Food Vending Machine</h2>
            </span>
              <a href="#project" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </div>
      <div className="project__foot"></div>
    </section>
  )
}

export default Project
