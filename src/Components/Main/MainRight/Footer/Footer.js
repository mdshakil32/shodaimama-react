import React from 'react';
import "./Footer.css";

// import logo from "../../../../../assets/header/logo.png";
import footerlogo from "../../../../assets/header/logo.png";
import paymentImg from "../../../../assets/payment/payments.png";
// import payments from "../../../../../assets/payment/payments.png";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-wrapper">
                <div className="footer-contact-part">
                    {/* <!-- single-contact-col  --> */}
                    <div className="single-contact-part social-media-col">
                        <div className="footer-company-logo">
                            <img src={footerlogo} alt=""/>
                        </div>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="app-btn">
                            <button>SHODAIMAMA APP</button>
                        </div>
                        <p className="copyright">
                            <i>ShodaiMama © 2021</i>
                        </p>
                    </div>
                    {/* <!-- single-contact-col 2nd  --> */}
                    <div className="single-contact-part">
                        <h1 className="single-contact-title">Useful Links</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">About ShodaiMama</a> </li>
                            <li><a href="#">FAQ</a> </li>
                            <li><a href="#">Contact Us</a> </li>
                            <li><a href="#">Career</a> </li>
                        </ul>
                    </div>
                    {/* <!-- single-contact-col 3rd  --> */}
                    <div className="single-contact-part">
                        <h1 className="single-contact-title">Helpful Links</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">Why Choose ShodaiMama</a> </li>
                            <li><a href="#">Privacy policy </a> </li>
                            <li><a href="#">Terms & Condition</a> </li>
                            <li><a href="#">Delivery, Return & Refund</a> </li>
                        </ul>
                    </div>
                    {/* <!-- single-contact-col 4th  --> */}
                    <div className="single-contact-part">
                        <h1 className="single-contact-title">Contact Us</h1>
                        <ul className="footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt footer-common-icon"></i>
                                <p>House 18, block: k, South Banasree, Dhaka</p>
                            </li>
                            <li>
                                <i className="far fa-envelope footer-common-icon"></i>
                                <p>info@shodaimama.com </p>
                            </li>
                            <li>
                                <i className="fas fa-headset footer-common-icon"></i>
                                <p>support@shodaimama.com</p>
                            </li>
                            <li>
                                <p className="contact-phone"> Help : +8801894874999</p>
                            </li>
                        </ul>
                    </div>
            
                </div>
                <div className="footer-payment-part">
                    <img src={paymentImg} alt=""/>
                </div>
                </div>
        </div>
    );
};

export default Footer;