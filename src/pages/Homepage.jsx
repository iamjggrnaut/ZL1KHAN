import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FaTelegramPlane } from "react-icons/fa";
import insta from '../assets/insta.png'
import round from '../assets/round.png'

const Homepage = () => {

    const navigate = useNavigate()

    return (
        <div className='homepage'>
            <div className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className='fw-bold'>BEAST TRAINING PROGRAM</h1>
                        <p className='hero-description'>
                            Unleash Your Inner Beast: Transform Your Body and <span style={{ color: 'red', fontWeight: 'bold' }}>Dominate</span> with Our Intense Training Program! Get <span style={{ color: 'red', fontWeight: 'bold' }}>Stronger</span>, <span style={{ color: 'red', fontWeight: 'bold' }}>Leaner</span>, and <span style={{ color: 'red', fontWeight: 'bold' }}>Fiercer</span> Today!
                        </p>
                        <div className="d-flex align-items-center gap-3 mt-2 hero-cta">
                            <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a>
                            <span>and train with a <span style={{ color: 'red', fontWeight: 'bold' }}>World Champion</span>!</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-center mt-4' style={{ width: '90vw', minHeight: '30vh' }}>
                            <a href='#about' style={{ textDecoration: 'none', color: 'white' }} className="secondary-btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about">
                <div className="container pt-4">
                    <div className="about-content pt-5 pb-5">
                        <h4 className='fw-bold'>About us</h4>
                        <p className='mt-4 fs-5'>
                            At <span style={{ color: 'red', fontWeight: 'bold' }} >ZL1KHAN TRAINIG</span>, we embody the spirit of champions. Led by a world-renowned expert, our training programs are designed to empower individuals in their weight loss journey or martial arts mastery. With a commitment to excellence and proven results, we invite you to join us and unleash your potential today.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <p className="stat-number">10&nbsp;000+</p>
                                <p>people completed the program</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number">320&nbsp;000+</p>
                                <p>hours of hard and efficient workout</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number">50&nbsp;000+</p>
                                <p>sparring fights arranged</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: '32px' }}>
                            <p style={{ fontSize: '52px', color: 'red', fontWeight: 'bold' }}>10 000+</p>
                            <p style={{ fontSize: '24px' }}>bodies transformed!</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div style={{ width: '60vw', borderBottom: '2px solid white' }}></div>
                            <p className="mt-2 fw-bold text-center fs-5">
                                Don’t miss your chance to get into a better <br /> shape and improve your results!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h4 className='text-center'>Programs</h4>
            <br />
            <div id="programs">
                <div className="container">
                    <div className="program-content">
                        <div className="prog-description">
                            <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING PROGRAM</h3>
                            {/* <p className="w-50">
                                Welcome to the Beast Training Program, where we redefine limits and unleash your inner strength. Led by elite trainers, our program is designed to sculpt bodies and minds alike, fostering resilience, power, and agility. Whether you're aiming to shed weight or conquer the ring, become a beast with us.
                            </p> */}
                            <div className="d-flex align-items-center gap-3">
                                <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a>
                                <button className="secondary-btn fw-bold" style={{ marginLeft: '20px' }} onClick={() => navigate('/programs')}>VIEW ALL PROGRAMS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h4 className='text-center'>Gallery</h4>
            <br />
            <div id="contact">
                <h4 className='fw-bold'>Contact us</h4>
                <div>
                    <span className='fw-bold me-2'>Telegram:</span>
                    <a href='https://t.me/ZLKHAN' style={{ color: 'red', fontWeight: 'bold', }}>ZLKHAN</a>
                </div>
                <h4 className="fw-bold">Follow us</h4>
                <div className="d-flex gap-3 align-items-center pb-5">
                    <a href="https://t.me/ZLKHAN">
                        <FaTelegramPlane style={{ fontSize: '36px', cursor: 'pointer', padding: '8px', borderRadius: '100%', backgroundColor: 'deepskyblue' }} />
                    </a>
                    <a href="https://www.instagram.com/zl1khan/">
                        <img style={{ width: '44px', cursor: 'pointer' }} src={insta} alt="" />
                    </a>
                </div>
                <img src={round} alt="" />
            </div>
        </div>
    )
}

export default Homepage