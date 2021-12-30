import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';

import bgImg from '../../assets/img/bg/call-action.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const CTA = () => {

    return (
        <div className="rs-call-action pt-120 pb-120 md-pt-74 md-pb-80" style={bgStyle}>
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-text white-color"
                    subtitle="Let’s Talk"
                    titleClass="title title4 white-color"
                    title="We run add kinds of IT services that grow your success"
                />
                <div className="call-btn text-center mt-30">
                    <Link className="readon discover started" to="/contact">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default CTA;