import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector('#root'));

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const messageInput = document.querySelector('.message')

const contactForm = document.querySelector('.contact__form')

contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    validateInput()
})

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