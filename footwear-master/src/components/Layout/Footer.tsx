import React from 'react'
import "./Footer.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer: React.FC = () => {

    const date = new Date().getFullYear();
    return (
        <>
            <div className='footer-container'>
                <div className="about-footwear-container">
                    <div className="about-footwear-title">ABOUT FOOTWEAR</div>
                    <div className="about-footwear">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                    </div>
                    <div className="social-links-container">
                        <div className="social-link"><a href="#"><i className="bi bi-twitter"></i></a></div>
                        <div className="social-link"><a href="#"><i className="bi bi-facebook"></i></a></div>
                        <div className="social-link"><a href="#"><i className="bi bi-linkedin"></i></a></div>
                        <div className="social-link"><a href="#"><i className="bi bi-browser-chrome"></i></a></div>
                    </div>
                </div>

                <div className="customer-care-container">
                    <div className="customer-care-title">CUSTOMER CARE</div>
                    <div className="customer-care-links-container">
                        <div className="customer-care-link"><a href="#">CONTACT</a></div>
                        <div className="customer-care-link"><a href="#">RETURNS/EXCHANGE</a></div>
                        <div className="customer-care-link"><a href="#">GIFT VOUCHER</a></div>
                        <div className="customer-care-link"><a href="#">WISHLIST</a></div>
                        <div className="customer-care-link"><a href="#">SPECIAL</a></div>
                        <div className="customer-care-link"><a href="#">CUSTOMER SERVICES</a></div>
                        <div className="customer-care-link"><a href="#">SITE MAPS</a></div>
                    </div>
                </div>

                <div className="information-container">
                    <div className="information-title">INFORMATION</div>
                    <div className="information-links-container">
                        <div className="information-link"><a href="#">ABOUT US</a></div>
                        <div className="information-link"><a href="#">DELIVERY INFORMATION</a></div>
                        <div className="information-link"><a href="#">PRIVACY POLICY</a></div>
                        <div className="information-link"><a href="#">SUPPORT</a></div>
                        <div className="information-link"><a href="#">ORDER TRACKING</a></div>
                    </div>
                </div>

                <div className="news-container">
                    <div className="news-title">NEWS</div>
                    <div className="news-links-container">
                        <div className="news-link"><a href="#">BLOG</a></div>
                        <div className="news-link"><a href="#">PRESS</a></div>
                        <div className="news-link"><a href="#">EXHIBITIONS</a></div>
                    </div>
                </div>

                <div className="contact-information-container">
                    <div className="contact-information-title">CONTACT INFORMATION</div>
                    <div className="contact-information">291 SOUTH 21TH STREET, SUITE 721 NEW YORK NY 10016</div>
                    <div className="contact-information-number">+1235 2355 98</div>
                    <div className="contact-information-email"><a href="#">INFO@YOURSITE.COM</a></div>
                    <div className="contact-information-website"><a href="#">YOURSITE.COM</a></div>
                </div>
            </div>

            <div className="copyright-container">
                Copyright ©{date} All rights reserved | Made by&nbsp;<a href="https://github.com/omari-kd">Omari</a>&nbsp;|&nbsp;
                <a href="https://omari-kd.netlify.app">website</a>
            </div>
        </>

    )
}

export default Footer
