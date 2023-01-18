import React from 'react'
import './project.css'
import projectImage from '../../assets/project__image.jpeg'

const Project = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="project__cards">
        <div className="project__card__row">
          <div className="project__card">
            <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
        </div>
        <div className="project__card__row">
          <div className="project__card">
          <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="Caleb Orakpor - projects_preview"/>
            <span className="project__description">
              <h2>...COMING UP SOON...</h2>
              </span>
          </div>
        </div>
      </div>
      <div className="project__foot"></div>
    </section>
  )
}

export default Project
