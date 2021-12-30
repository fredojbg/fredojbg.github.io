import React from 'react';
import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';


import Newsletter from '../../Common/Newsletter';

import footerLogo1 from '../../../assets/img/logo/logo.png';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-logo">
                                <Link to="/" ><img src={footerLogo ? footerLogo : footerLogo1} alt="Logo" /></Link>
                            </div>
                            <div className="textwidget pb-30">
                                <p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                            </div>
                            <ul className="footer-social md-mb-30">
                                <li>
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-44 md-pl-14 md-mb-30">
                            <h3 className="widget-title">IT Services</h3>
                            <ul className="site-map">
                                <li><Link to="/service/software-development">Software Development</Link></li>
                                <li><Link to="/service/Web-development">Web Development</Link></li>
                                <li><Link to="/service/analytic-solutions">Analytic Solutions</Link></li>
                                <li><Link to="/service/cloud-and-devOps">Cloud and DevOps</Link></li>
                                <li><Link to="/service/product-design">Product Design</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 className="widget-title">Contact Info</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">374 FA Tower, William S Blvd 2721, IL, USA</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <Link to="#">(+880)155-69569</Link>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <Link to="#">support@rstheme.com</Link>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock"></i>
                                    <div className="desc">
                                        Opening Hours: 10:00 - 18:00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h3 className="widget-title">Newsletter</h3>
                            <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p>
                            <p>
                                {/* newsletter-area-start */}
                                <Newsletter />
                                {/* newsletter-area-end */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;