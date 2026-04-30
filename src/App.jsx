import React from 'react'
import Navbar from './component/Navbar'
import Navbarr from './component/Navbarr'
import Main from './session/Main'
import Experience from './session/Experience'
import CertificationCard from './component/CertificationCard'
import Skills from './session/Skills'
import Projects from './session/Projects'
import Contact from './session/Contact'
import Background from './session/Background'
import BigContent from './layout/BigContent'

function App() {
  return (
    <div>
      <BigContent>
        <Navbarr />
        <Main />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Background />
      </BigContent>
    </div>
  )
}

export default App