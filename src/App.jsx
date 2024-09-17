import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
// import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Navbar/>
      <div id='About'>
        <About/>
      </div>
      <Hero/>
      <Project/>
      <Contact />
      {/* <Routes>
        <Route exact path='/' element={<Hero/>} />
        <Route exact path='/' element={<About/>} />
        <Route exact path='/' element={<Project/>} />
        <Route exact path='/' element={<Contact/>} />
      </Routes> */}
    </div>
  )
}

export default App
