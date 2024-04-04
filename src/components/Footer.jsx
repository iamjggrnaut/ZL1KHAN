import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import insta from '../assets/insta.png'

const Footer = () => {

    return (
        <div className='footer'>
            <div className="container footer-container">
                <div className="left-footer">
                    <h3 className="ws-name" style={{ fontSize: '20px' }}>
                        ZL1KHAN TRAINING
                    </h3>
                    <p>Copyright, 2024</p>
                </div>
                <div className="right-footer pb-3">
                    <p className='mb-1'>Designed and developed by</p>
                    <span>Rustam Akhmedov</span>
                    <div className='mt-2 d-flex gap-3 align-items-center'>
                        <FaTelegramPlane style={{ fontSize: '36px', padding: '8px', borderRadius: '100%', backgroundColor: 'deepskyblue' }} />
                        <img style={{ width: '44px' }} src={insta} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer