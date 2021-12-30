import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/bg/bg-2.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
}

const Cta = () => {

    return (
        <div className="cta-area pt-125 pb-95" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="cta-text mb-30">
                            <span>do you have any project ?</span>
                            <h1>Let’s Talk About Business Soluations With Us</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="cta-button text-lg-right mb-30">
                            <Link className="btn btn-white btn-none" to="/contact"><span className="btn-text">join with us <i className="fa fa-long-arrow-right"></i></span> </Link>
                            <Link className="cta-link" to="#"><i className="fa fa-phone"></i> +812 (345) 789 88</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;