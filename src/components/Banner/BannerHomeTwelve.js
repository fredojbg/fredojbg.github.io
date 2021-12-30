import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/bg/home-12.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const BannerHomeTwelve = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style8" style={bgStyle}>
                <div className="container">
                    <div className="banner-content text-center">
                        <span className="sub-title">Welcome to Braintech</span>
                        <h1 className="title">We Are Award Winning<span> Web Design </span>Agency
                        </h1>
                        <ul className="banner-btn">
                            <li><Link className="readon started get-ready3" to="/about">Get Started</Link></li>
                            <li><Link className="readon qoute-btn active" to="/contact">Discover More</Link></li>
                        </ul>
                        <div className="arrow-btn hidden-sm">
                            <a href="#rs-service">
                                <span className="up-down"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeTwelve;