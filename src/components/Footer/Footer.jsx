import React from 'react'
import './Footer.css'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            <div>
                                <p>2-87 MMV PALEM</p>
                                <p>Prakasam</p>
                            </div>
                            </div>
                            <div className='phone'>
                                <h4>
                                    <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                                    9347583332
                                </h4>
                            </div>
                            <div className='gmail'>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                                    manideepmundlamuri@gmail.com
                                </h4>
                            </div>
                        
                    </div>
                    <div className="right">
                        <h4>About Mine 👋</h4>
                        <p>I am a passionate MERN stack developer skilled in MongoDB, Express.js, React.js, and Node.js. With hands-on experience in building dynamic and responsive web applications, I have a strong understanding of both front-end and back-end technologies. My projects reflect my ability to solve complex problems and deliver high-quality solutions. I am always eager to learn new technologies and take on challenging projects. My goal is to contribute to innovative and impactful software development.</p>
                        <div className='social'>
                            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                            <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
