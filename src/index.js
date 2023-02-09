import React from 'react';
import App from './App'
import './index.css'
import * as ReactDOM from 'react-dom';
import emailjs from '@emailjs/browser';
import ScrollReveal from 'scrollreveal'
export default ScrollReveal();
/*
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
    <App />
    </StrictMode>);*/

    ReactDOM.render(<App/>, document.querySelector("#root"));
  

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const messageInput = document.querySelector('.message')

const contactForm = document.querySelector('.contact__form')

if (contactForm){
    contactForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    validateInput();
});}

const validateInput = () => {
    let email = emailInput.value
    let message = messageInput.value

    if(!email && !message){
        setError(emailInput.parentElement)
        setError(messageInput.parentElement)
        showMessage("Please fill in the required fields")
    }
    else if(!email && message){
        setError(emailInput.parentElement)
        showMessage("Oops! Email can't be empty")
    }
    else if(email && !message){
        setError(messageInput.parentElement)
        showMessage('Please provide a message')
    }
    else if(email && message){
        emailjs.sendForm(
            'service_jfewc2s', 
            'template_l5fwc59', 
             contactForm,
             'jpD7xof6fTqkR1dYW',
             )
        setSuccess(emailInput.parentElement)
        setSuccess(messageInput.parentElement)
        showMessage("message sent successfully", 'green')
        messageInput.value = ''
        emailInput.value = ''
        nameInput.value = ''
        subjectInput.value = ''
    }
}

const setError = (input) => {
    if(input.classList.contains("success")){
        input.classList.remove("success")
    }else{
        input.classList.add("error")
    }
}

const setSuccess = (input) => {
    if(input.classList.contains("error")){
        input.classList.remove("error")
    }else{
        input.classList.add("success")
    }
}

const msgDiv = document.querySelector('.errmsg')
const showMessage = (errmsg, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = errmsg
    divContent.classList.add('errmsg__content')
    divContent.style.backgroundColor = updateColor
    msgDiv.prepend(divContent)

    msgDiv.style.transform = `translate(${(0, 0)})`
    setTimeout(() => {
        divContent.classList.add("hide")

        divContent.addEventListener('transitionend', () => {
            divContent.remove()
        })
    }, 5000)
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 700,
    reset: true,
    easing: 'ease'
  });
  
  /*SCROLL ABOUT*/
  sr.reveal("#about h1", { delay: 200 });
  sr.reveal(".about__content h2", { delay: 300 });
  sr.reveal(".about__content p", { delay: 400 });
  sr.reveal(".about__content .about__scroll", { delay: 100, interval: 100 });
  sr.reveal(".img__container", { delay: 200 });
  sr.reveal(".about__img", { delay: 200 });
  sr.reveal(".cards", { delay: 400});
  sr.reveal(".cards .btn_about", { delay: 400, interval: 100});
  sr.reveal(".skills", { delay: 400});
  
  /*SCROLL SERVICES*/
  sr.reveal(".serviceCard", {delay: 200, interval:200});
  sr.reveal(".muscle", {delay: 200, interval: 200 });
  
  /*SCROLL EXPERIENCE*/
  sr.reveal(".flip__card", {delay: 200});
  sr.reveal(".cert__links", {delay: 300});
  sr.reveal(".work__experience", {delay: 400});
  
  /*SCROLL PROJECT*/
  sr.reveal("#project div", { reset: false, interval: 200});
  
  /*SCROLL QUOTE*/
  sr.reveal(".testimo__content", { reset: false, delay: 400});

  /*SCROLL CONTACT*/
  sr.reveal("#contact h1", {reset: false, delay: 300});
  sr.reveal("#contact p", {reset: false, delay: 400});
  sr.reveal("#contact .form__input__wrapper", {reset: false, delay: 500});
  sr.reveal("#contact button", {reset: false, delay: 600});