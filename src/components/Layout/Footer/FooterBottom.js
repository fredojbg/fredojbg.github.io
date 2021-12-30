import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 text-right md-text-center md-mb-10 order-last">
                        <ul className="copy-right-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright md-text-center md-mb-10">
                            <p>© 2021 All Rights Reserved. Developed By <a href="https://rstheme.com/" target="_blank">RSTheme</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;