import React from 'react';
import { Link } from 'react-router-dom';

import whiteLogo from '../../assets/img/logo/white.png';
import bgImg1 from '../../assets/img/bg/bg-7.jpg';

const bgStyle1 = {
    backgroundImage:`url(${bgImg1})`
}

const FooterStyleTwo = () => {

    return (
        <footer>
            <div className="footer-area pt-80" style={bgStyle1} >
                <div className="container">
                    <div className="newsletter-bg pb-50 mb-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 mb-30">
                                <div className="single-newsletter ">
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input placeholder="Enter Your Email :" type="email" />
                                            <button className="btn" type="submit"><span className="btn-text">subscribe <i className="fa fa-long-arrow-right"></i></span> <span className="btn-border"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 mb-30">
                                <div className="footer-2-icon text-lg-right">
                                    <Link to ="service/service-details"><i className="fa fa-facebook-f"></i></Link>
                                    <Link to ="service/service-details"><i className="fa fa-twitter"></i></Link>
                                    <Link to ="service/service-details"><i className="fa fa-instagram"></i></Link>
                                    <Link to ="service/service-details"><i className="fa fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <div className="footer-logo">
                                    <Link to="/"><img src={whiteLogo} alt="" /></Link>
                                </div>
                                <div className="footer-text">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sitluptatem accusantium doloremque laudantium totam rem apereaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    <Link className="btn" to="/contact"><span className="btn-text">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
									<li><Link to ="service/service-details">User Strategy </Link></li>
									<li><Link to ="service/service-details">Product Designing </Link></li>
									<li><Link to ="service/service-details">Marketing Strategy</Link></li>
									<li><Link to ="service/service-details">IT Consultancy</Link></li>
									<li><Link to ="service/service-details">Server Security</Link></li>
									<li><Link to ="service/service-details">Product Marketing</Link></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30 pl-50">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
									<li><Link to ="service/service-details">About Us</Link></li>
									<li><Link to ="service/service-details">Need a Consultant?</Link></li>
									<li><Link to ="service/service-details">Our Services</Link></li>
									<li><Link to ="service/service-details">Have Any Questions?</Link></li>
									<li><Link to ="service/service-details">Meet Our Team</Link></li>
									<li><Link to ="service/service-details">Contact Us</Link></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>But I must explain to you
                                        how all this mistaken</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+812  (345) 778 88</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="flaticon-email"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>support@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>227 Marion Street, Columbia</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area footer-2-bottom mt-50 pb-24 pt-24">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="copyright">
                                    <p><i className="fa fa-copyright"></i> Copyright 2021 <Link to ="#">Braintech</Link>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-bottem-text text-md-right">
                                    <p>Design By <a href ="https://rstheme.com/">RSTheme</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterStyleTwo;