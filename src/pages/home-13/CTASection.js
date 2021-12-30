import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/Common/SectionTitle/SectionTitle';

import bgImg from '../../assets/img/bg/cta-bg13.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-repeat': 'no-repeat', 
    'background-position': 'center center', 
    'background-size': 'cover'
}


const CTA = () => {

    return (
        <div className="rs-call-action pb-70 pt-70" style={bgStyle}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <SectionTitle
                            sectionClass="sec-title3 md-mb-30"
                            subtitleClass="sub-text style2"
                            subtitle="Let's Chat"
                            titleClass="title title2"
                            title="Have a Project, Let's Start Today."
                        />
                    </div>
                    <div className="col-lg-5 text-right md-text-left">
                        <div className="btn-part">
                            <Link className="readon more-about" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;