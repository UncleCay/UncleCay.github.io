import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Project from './components/project/Project'
/*import Testimonials from './components/testimonials/Testimonials'*/
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <Home />
      <Nav />
      <About />
      <Services />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
