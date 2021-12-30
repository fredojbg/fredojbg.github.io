import React from 'react';
import { Link } from 'react-router-dom';

import rocketImg from '../../assets/img/call-us/rocket.png';

import bgImg from '../../assets/img/bg/call-to-action2.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const CTA = () => {

    return (
        <div className="rs-call-action pb-100 pt-100 md-pt-70 md-pb-70" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="action-wrap">
                            <div className="icon-img">
                                <img src={rocketImg} alt="Images" />
                            </div>
                            <h2 className="title">Let’s Start a Cool Project With <span className="watermark">Braintech</span></h2>
                            <div className="btn-part mt-43">
                                <Link className="readon started" to="/contact">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;