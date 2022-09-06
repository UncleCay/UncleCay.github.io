import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
/*import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'*/
import Home from './components/home/Home'

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <Home />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
    </div>
  )
}

export default App
