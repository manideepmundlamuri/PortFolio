import React from 'react'
import './HeroImage.css'
import introImg from '../../assets/intro-think.png'
import { Link } from 'react-router-dom'

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img className='intro-img' src={introImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, IM A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to='/project' className='btn'>PROJECTS</Link>
                    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
                </div>
            </div>

        </div>
    )
}

export default HeroImage
