import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage2 from '../components/HeroImage2/HeroImage2'
import Work from '../components/Work/Work'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text='Some of my most recent works' />
      <Work/>
      <Footer />
    </div>
  )
}

export default Projects
