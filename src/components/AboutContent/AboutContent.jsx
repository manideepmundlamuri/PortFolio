import React from 'react'
import './AboutContent.css'
import react1 from '../../assets/react1.jpg'
import react2 from '../../assets/react2.webp'
import { Link } from 'react-router-dom'
const AboutContent = () => {
    return (
        <>
            <div className="about">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>I am a skilled MERN stack developer with expertise in building dynamic and scalable web applications.</p>
                    <Link to='/contact'>
                        <button className='btn'>CONTACT</button>
                    </Link>
                </div>
                <div className="right">
                    <div className="img-container">
                        <div className="img-stack top">
                            <img src={react1} className='img' alt="" />
                        </div>
                        <div className="img-stack bottom">
                            <img src={react2} className='img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent
