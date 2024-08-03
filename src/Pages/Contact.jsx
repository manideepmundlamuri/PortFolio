import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage2 from '../components/HeroImage2/HeroImage2'
import ContactForm from '../components/ContactForm/ContactForm'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading='CONTACT.' text="Lets have a chat" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
