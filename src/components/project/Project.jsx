import React from 'react'
import './project.css'
import projectImage from '../../assets/wood-texture.jpg'

const Project = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="project__cards">
        <div className="project__card__row">
          <div className="project__card">
            <img src={projectImage} alt="project Img"/>
            <span className="project__description">
              <p>project description goes here</p>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="project Img"/>
            <span className="project__description">
              <p>project description goes here</p>
              </span>
          </div>
        </div>
        <div className="project__card__row">
          <div className="project__card">
          <img src={projectImage} alt="project Img"/>
            <span className="project__description">
              <p>project description goes here</p>
              </span>
          </div>
          <div className="project__card">
          <img src={projectImage} alt="project Img"/>
            <span className="project__description">
              <p>project description goes here</p>
              </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
