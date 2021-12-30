import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/bg/bg-2.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const CaseOne = () => {

    return (
        <React.Fragment>

            {/* <!-- cta-area-start --> */}
            <div className="cta-area pt-125 pb-95" style={bgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="cta-text mb-30">
                                <span>do you have any project ?</span>
                                <h1>Let’s Talk About Business Soluations With Us</h1>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="cta-button text-lg-right mb-30">
                                <Link className="btn btn-white btn-none" to="/contact"><span className="btn-text">contact us <i className="fa fa-long-arrow-right"></i></span> </Link>
                                <Link className="btn btn-white btn-none btn-margin" to="/contact"><span className="btn-text">join with us <i className="fa fa-long-arrow-right"></i></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- cta-area-end --> */}
        </React.Fragment>
    );
}

export default CaseOne;