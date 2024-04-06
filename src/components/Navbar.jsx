import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <div className="container nav-container">
                <h3 className="ws-name" onClick={() => navigate('/')}>
                    ZL1KHAN TRAINING
                </h3>
                <div className="nav-menu">
                    <a className='navlink fw-bold fs-4' style={{ color: 'red' }} href={'/programs'}>PROGRAMS</a>
                    {/* <a className='navlink' href={'/gallery'}>gallery</a> */}
                    <a className='navlink fs-4' href={'#contact'}>CONTACT US</a>
                </div>
                <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a>
            </div>
        </div>
    )
}

export default Navbar