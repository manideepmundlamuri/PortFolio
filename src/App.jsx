
import React from "react"
import './index.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/project" element={<Projects/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
    </>
  )
}

export default App
