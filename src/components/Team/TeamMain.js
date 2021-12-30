import React from 'react';
import { Link } from 'react-router-dom';

import teamImg1 from "../../assets/img/team/team-01.jpg";
import teamImg2 from "../../assets/img/team/team-02.jpg";
import teamImg3 from "../../assets/img/team/team-03.jpg";
import teamImg4 from "../../assets/img/team/team-04.jpg";
import teamImg5 from "../../assets/img/team/team-05.jpg";
import teamImg6 from "../../assets/img/team/team-06.jpg";
import teamImg7 from "../../assets/img/team/team-07.jpg";
import teamImg8 from "../../assets/img/team/team-08.jpg";

import shapeImg from "../../assets/img/shape/shape-6.png";
import bgImg1 from "../../assets/img/bg/bg-2.jpg";

const bgStyle1 = {
    backgroundImage:`url(${bgImg1})`
}

const Team = () => {
    return (
        <React.Fragment>
            {/* <!-- team-area-start --> */}
            <div className="team-area pt-95 pb-100 pos-rel">
                <div className="shape d-none d-xl-block">
                    <div className="shape-item team-02 bounce-animate"><img src={shapeImg} alt="" /></div>
                </div>
                <div className="container">
                    <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                        <div className="section-title text-center  mb-75">
                            <h1>Meet Our Experienced Team Member</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg1} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Solvina D Naliz</h4>
                                    <span>Web developer</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg2} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Jerry D.Silva</h4>
                                    <span>UI Designer</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg3} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>David Walillams</h4>
                                    <span>sr consultant</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg4} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Michel Z. Jones</h4>
                                    <span>CEO & Founder</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg5} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Gakilta HJ Nakila</h4>
                                    <span>Web developer</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg6} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>MIchel Jhonsone</h4>
                                    <span>UI Designer</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg7} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Sisxtan Monila</h4>
                                    <span>sr consultant</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="team-wrapper">
                                <div className="team-img">
                                    <img src={teamImg8} alt="" />
                                </div>
                                <div className="team-text">
                                    <h4>Kane Alex Pitar</h4>
                                    <span>CEO & Founder</span>
                                    <div className="team-icon">
                                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                                        <a href="#" ><i className="fa fa-twitter"></i></a>
                                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                                        <a href="#" ><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team-area-end --> */}

            {/* <!-- cta-area-start --> */}
            <div className="cta-area pt-125 pb-95" style={bgStyle1}>
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
            {/* <!-- cta-area-end --> */}
        </React.Fragment>
    );
}

export default Team;