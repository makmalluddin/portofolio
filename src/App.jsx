import React from 'react'
import Navbar from './component/Navbar'
import Navbarr from './component/Navbarr'
import Main from './session/Main'
import Experience from './session/Experience'
import Skills from './session/Skills'
import Projects from './session/Projects'
import Contact from './session/Contact'
import BigContent from './layout/BigContent'
import Background from './session/Background'
import Footer from './session/Footer'


function App() {
  return (
    <div >
      <BigContent>
        <Navbar />
        <Main />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </BigContent>
    </div>
  )
}

export default App