import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector('#root'))

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
        setError()
    }else{
        setSuccess()
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
