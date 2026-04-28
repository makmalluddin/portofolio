import React from 'react'
import Navbar from './component/Navbar'
import Main from './session/Main'
import Experience from './session/Experience'
import CertificationCard from './component/CertificationCard'
import Skills from './session/Skills'
import Projects from './session/Projects'
import Contact from './session/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Experience />
      <Skills />
      <Projects />
      <Contact  />
      
    </div>
  )
}

export default App