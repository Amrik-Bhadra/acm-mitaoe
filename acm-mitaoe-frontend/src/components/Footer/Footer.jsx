import React from 'react'
import './Footer.css'
import logo from '../../assets/images/ACM logo.png'
import { FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer-container'>
            <div className="footer-row-1 footer-row">
                <div className='footer-logo-box'>
                    <img src={logo} alt="acm_logo_footer" className='footer-logo'/>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="">About ACM</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Objectives</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Socials</h3>
                        <ul>
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Address</h3>
                        <p>MIT Academy of Engineering, Alandi road, Pune - 412 105, Maharashtra (India).</p>
                    </div>
                </div>
            </div>
            <div className="footer-row-2 footer-row">
                <div className="copyright-div footer-2-div">
                    <FaCopyright className='footer-icons' />
                    <p>Copyright 2024 ACM MITAOE</p>
                </div>
                <div className="contact-div footer-2-div">
                    <MdEmail className='footer-icons' />
                    <p>acmstudentchapter@mitaoe.ac.in</p>
                </div>
            </div>
    </div>
  )
}

export default Footer