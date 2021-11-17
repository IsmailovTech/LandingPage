import React from 'react';
import "../footer/Footer.css"
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
  



const Footer = () => {
    return (
        <div>
            <div className="footer-main">
                <div className="footer container">
                    <div className="footer1">
                        <h1>Ibrokhim Ismoilov</h1>
                        <div className="icons-f">
                        <FaTelegram id="teleg" size="48px" />
                        <FaLinkedin id="link" size="48px" />
                        <FaInstagram id="insta" size="48px" />
                        </div>
                    </div>
                
                    <div className="footer-nav">
                        <ul className="footer-ul">First
                            <li><a href="#">First</a></li>
                            <li><a href="#">Second</a></li>
                            <li><a href="#">Third</a></li>
                            <li><a href="#">Fourth</a></li>
                        </ul>
                        <ul className="footer-ul">Second
                            <li><a href="#">First</a></li>
                            <li><a href="#">Second</a></li>
                            <li><a href="#">Third</a></li>
                            <li><a href="#">Fourth</a></li>
                        </ul>
                        <ul className="footer-ul">Third
                            <li><a href="#">First</a></li>
                            <li><a href="#">Second</a></li>
                            <li><a href="#">Third</a></li>
                            <li><a href="#">Fourth</a></li>
                        </ul>
                        <ul className="footer-ul">Fourth
                            <li><a href="#">First</a></li>
                            <li><a href="#">Second</a></li>
                            <li><a href="#">Third</a></li>
                            <li><a href="#">Fourth</a></li>
                        </ul>
                    </div>

                    <p className="last-p">
                    © Copyrights 2021 <span>Privacy policy</span> Terms of service
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
