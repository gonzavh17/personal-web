import React from 'react'
import { Home } from './Home'
import { AboutMe } from './AboutMe'
import Works from './Works'
import { Skills } from './Skills'
import NavBar from './NavBar'
import Cursor from './Cursor'


const LandPage = () => {
  return (
    <div>
      
      <NavBar/>
        <Cursor/>
        <Home/>
        <AboutMe/>
        <Cursor/>
        <Skills/>
    </div>
  )
}

export default LandPage