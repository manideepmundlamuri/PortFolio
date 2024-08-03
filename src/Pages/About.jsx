import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage2 from '../components/HeroImage2/HeroImage2'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT" text="Im a friendly Full-Stack Developer " />
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About
