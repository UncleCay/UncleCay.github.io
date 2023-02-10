import React from 'react'
import './project.css'
import {BsCaretRightFill} from 'react-icons/bs'

const Project = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="project__cards">
        <div className="project__card__row">
          <div className="project__card project__one">
            
            <span className="project__description">
              <h2>Schedule Manager</h2>
              <p>This app allows you to;</p>
              <p><BsCaretRightFill /> Set a task with date</p>
              <p><BsCaretRightFill /> Add/Remove reminder on a task</p>
              <p><BsCaretRightFill /> Remove a task entirely at will</p>
              <p>It was designed with HTML, CSS, JavaScript, React, and RESTful API</p>
            </span>
              <a href="https://github.com/UncleCay/schedule-manager" target="_blank" rel="noreferrer">Source Code</a>
          </div>
          <div className="project__card project__two">
          
            <span className="project__description">
              <h2>Meme Generator</h2>
              <p>This app allows you to;</p>
              <p><BsCaretRightFill /> Select a random meme from an API</p>
              <p><BsCaretRightFill /> Add a top and bottom text on the meme image</p>
              <p>It was designed with HTML, CSS, JavaScript, React, and RESTful API</p>
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
