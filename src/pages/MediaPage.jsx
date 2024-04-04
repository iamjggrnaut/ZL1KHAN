import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import img1 from '../assets/22.JPG'
import img2 from '../assets/33.JPG'
import img3 from '../assets/44.JPG'
import img4 from '../assets/55.JPG'
import img5 from '../assets/66.PNG'
import img6 from '../assets/77.JPG'
import img7 from '../assets/1.JPG'
import img8 from '../assets/2.JPEG'
import img9 from '../assets/3.JPG'
import img10 from '../assets/4.JPG'
import img11 from '../assets/88.JPG'
import img12 from '../assets/99.JPG'
import img13 from '../assets/101.JPG'
import img14 from '../assets/102.JPG'
import insta from '../assets/insta.png'
import round from '../assets/round.png'

import { FaTelegramPlane } from 'react-icons/fa'

const MediaPage = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selected, setSelected] = useState()

    return (
        <div className='media-page'>
            <div className="media-top">
                <h2 style={{ fontWeight: 'bold', color: 'red', fontSize: '56px' }}>HIGHLIGHTS</h2>
                <a href='#media-content' className='secondary-btn' >View</a>
            </div>
            <div id="media-content">
                <div className="container">
                    <div className="gallery-content pb-5">
                        <div className="row">
                            {
                                images && images.map((img, i) => (
                                    <div className="col d-flex justify-content-center" key={i}>
                                        <img className='small-img' src={img} alt=""
                                            onClick={() => {
                                                setSelected(img);
                                                handleShow()
                                            }}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
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

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: '100%' }} src={selected} alt="" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MediaPage