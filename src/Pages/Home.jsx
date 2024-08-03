import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work/Work'


const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroImage/>
     <Work/>
     <Footer/>
    </div>
  )
}

export default Home
