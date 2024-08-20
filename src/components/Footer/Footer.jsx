import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            {/* Fluorescent line above the footer */}
            <div className="fluorescent-line"></div> {/* Line above the footer */}
            <footer className="footer-section bg-dark text-white py-4">
                <div className="footer-divider">
                    <div className="footer-left">
                        <img 
                            src="./images/IEEELogo.png" 
                            alt="IEEE Logo" 
                            className="footer-logo" 
                        />
                    </div>
                    <div className="footer-center">
                        <a 
                            href="https://wa.me/" 
                            className="text-white me-3"
                        >
                            <i className="fab fa-whatsapp fa-2x"></i>
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            className="text-white me-3"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a 
                            href="https://facebook.com" 
                            className="text-white me-3"
                        >
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a 
                            href="https://instagram.com" 
                            className="text-white me-3"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div className="footer-right">
                        <img 
                            src="./images/VortexLogo.png" 
                            alt="Stylized Graphic" 
                            className="footer-logo" 
                        />
                    </div>
                </div>
                <div className="footer-links">
                    <a 
                        href="#about" 
                        className="text-white"
                    >
                        Lorem ipsum
                    </a>
                    <a 
                        href="#contact" 
                        className="text-white"
                    >
                        consectetur
                    </a>
                    <a 
                        href="#terms" 
                        className="text-white"
                    >
                        Lorem ipsum
                    </a>
                    <a 
                        href="#privacy" 
                        className="text-white"
                    >
                        consectetur
                    </a>
                </div>
                <div className="footer-bottom mt-4">
                    <p className="text-center">~ IEEE EB AOT ~</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
