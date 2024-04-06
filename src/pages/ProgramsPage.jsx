import React from 'react'
import photo1 from '../assets/3.JPG'
import photo2 from '../assets/1.JPG'
import photo3 from '../assets/2.JPEG'

import { FaTelegramPlane } from 'react-icons/fa'
import insta from '../assets/insta.png'
import round from '../assets/round.png'

const ProgramsPage = () => {

    return (
        <div className='programs-page'>
            <div className="prog-hero">
                <h2 className='fw-bold prog-cta'>
                    <span style={{ color: 'red' }}>CHOOSE</span> YOUR PROGRAM
                    AND <span style={{ color: 'red' }}>START</span> YOUR <span style={{ color: 'red' }}>TRANSFORAMTION</span> TODAY
                </h2>
                <a href='#program-list' className='secondary-btn mt-4' >Explore</a>
            </div>
            <br />
            <div className="container" id='program-list'>

                <div className="row">
                    <div className="col mb-5">
                        <img src={photo1} className='prog-img' alt="" />
                    </div>
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 1 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>240$</span> <span style={{ color: 'green' }}>79$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>✅ Feedback to me</p>
                        <p>✅ Meal plan</p>
                        <p>✅ choice of sports nutrition</p>
                        <p>✅ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 2 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>147$</span> <span style={{ color: 'green' }}>49$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                    </div>
                    <div className="col mb-5">
                        <img src={photo2} className='prog-img hidden' alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-5">
                        <img src={photo3} className='prog-img hidden' alt="" />
                    </div>
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 3 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>57$</span> <span style={{ color: 'green' }}>19$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>❌ Chat with participants</p>
                        <p>❌ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                    </div>
                </div>

            </div>
            <div id="contact">
                {/* <h4 className='fw-bold'>Contact us</h4>
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
                </div> */}
                <img src={round} alt="" />
            </div>
        </div>
    )
}

export default ProgramsPage