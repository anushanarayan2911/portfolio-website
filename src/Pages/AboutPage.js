import React from 'react'
import About from '../components/About'
import { homeObjOne } from '../components/About/data'
import Navbar from '../components/Navbar'

const AboutPage = (id="about") => {
  return (
    <>
      <Navbar/>
      <About/>
    </>
    
  )
}

export default AboutPage