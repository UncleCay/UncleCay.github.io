/*
import React from 'react'
import './homeTwo.css'
import {useEffect} from 'react'

const HomeTwo = () => {
  
  useEffect(() => {
  (function () {

    const link = document.querySelectorAll('section > .hover-this');
    const cursor = document.querySelector('.cursor');
  
    const animateit = function (e) {
          const h1 = this.querySelector('h1');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
  
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
  
          h1.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
          if (e.type === 'mouseleave') h1.style.transform = '';
    };
  
    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };
  
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
  
  })();
});

  return (
    <section id="home_two">
      <div className='text-zone'>
        <a href="#" className="hover-this">
          <h1>
            <span className="intro_line1"><span id="one">H</span><span id="two">i,</span></span><br />
            <span className="intro_line2"><span id="three">I'</span><span id="four">m </span> 
            <span id="five">C</span><span id="six">a</span><span id="seven">l</span><span id="eight">e</span><span id="nine">b,</span></span><br />
            <span className="intro_line3"><span id="ten">w</span><span id="eleven">e</span><span id="twelve">b </span>
            <span id="thirteen">d</span><span id="fourteen">e</span><span id="fifteen">v</span><span id="sixteen">e</span><span id="seventeen">l</span><span id="eighteen">o</span><span id="nineteen">p</span><span id="twenty">e</span><span id="twentyone">r</span></span>
          </h1>
        </a>
        <p className="gray-text"><span className="intro_line4">Front End React Developer</span></p>
        <br />
        <a href="#contact" className="contact-button">
          <div>
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">Contact Me!</span>
          </div>
        </a>
        <div className="cursor"></div>
      </div>
    </section>
  )
}

export default HomeTwo
*/
