import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/bg/home-11.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const BannerHomeEleven = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style7 modify3 rs-rain-animate" style={bgStyle}>                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"> 
                            <div className="banner-content">
                                <span className="sub-title zIndex1">Modern. Professional. Reliable.</span>
                                <h2 className="title zIndex1" data-animation="fadeInLeft" data-delay=".3s">We Are Digital Agency &amp; Technology Solution</h2>
                                <p className="desc zIndex1" data-animation="fadeInLeft" data-delay=".5s">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                <ul className="banner-btn zIndex1">
                                    <li><Link to="/about" className="readon started">Get Started</Link></li>
                                </ul>
                            </div>
                        </div>                            
                    </div>
                </div>
                <div className="line-inner style2 orange-dark">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerHomeEleven;