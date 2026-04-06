import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
