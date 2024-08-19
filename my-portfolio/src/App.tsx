import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <>
        <NavBar/>
        <Banner/>
        <About/>
        <Skills/>
    </>
  )
}

export default App
