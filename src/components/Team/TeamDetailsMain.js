import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import teamImg  from '../../assets/img/team/1.jpg';

import teamIcon1  from '../../assets/img/icon/t-1.png';
import teamIcon2  from '../../assets/img/icon/t-2.png';
import teamIcon3  from '../../assets/img/icon/t-3.png';

import videoBG from "../../assets/img/bg/ex-1.jpg";
import bgImg1 from "../../assets/img/bg/bg-2.jpg";

const bgStyle1 = {
    backgroundImage:`url(${bgImg1})`
}


const TeamDetails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            {/* single-team-area-start */}
            <div className="single-team-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="single-img">
                                <img src={teamImg} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6  col-lg-6 mb-30">
                            <div className="single-team-wrapper">
                                <div className="single-team-text">
                                    <h1>I’m David Jeson</h1>
                                    <span>sr IT Consultant</span>
                                    <p>Must explain to you how all this mistaken idea of denouncing ple
                                        asure and praising pain was born and I will give you a complete count of the system and expound the actual teachings of the great explorer of the truth master-builder of human happiness one rejects</p>
                                    <div className="team-single">
                                        <div className="single-team-info">
                                            <div className="single-team-icon">
                                                <img src={teamIcon1} alt="" />
                                            </div>
                                            <div className="team-info">
                                                <span>Call For Me</span>
                                                <h4>+812 (345) 789 99</h4>
                                            </div>
                                        </div>
                                        <div className="single-team-info">
                                            <div className="single-team-icon">
                                                <img src={teamIcon2} alt="" />
                                            </div>
                                            <div className="team-info">
                                                <span>Email Me</span>
                                                <h4>supportme@gmail.com</h4>
                                            </div>
                                        </div>
                                        <div className="single-team-info">
                                            <div className="single-team-icon">
                                                <img src={teamIcon3} alt="" />
                                            </div>
                                            <div className="team-info">
                                                <span>Fax Me</span>
                                                <h4>567 - 890 - 123</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-2-icon">
                                        <span>Follow Me</span>
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
            {/* <!-- single-team-area-end --> */}

            {/* <!-- our-skill-area-start --> */}
            <div className="our-skill-area">
                <div className="container">
                    <div className="skill-bg">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="progress-wrapper pr-25">
                                    <div className="progress-bar-text">
                                        <div className="progress-skill">
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>Design Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `80%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="1s" data-wow-delay=".5s">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>Marketing Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `90%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                        <span>90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>UX/UI Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `85%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                        <span>85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="progress-wrapper pl-25">
                                    <div className="progress-bar-text progress-bar-2-text">
                                        <div className="progress-skill">
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>Design Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: `80%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="1s" data-wow-delay=".5s">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>Marketing Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: `90%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                        <span>90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-skill mb-35">
                                                <div className="bar-title">
                                                    <h4>UX/UI Strategy</h4>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: `85%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                        <span>85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-skill-area-end --> */}

            {/* <!-- experience-area-satrt --> */}
            <div className="experience-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="experience-text">
                                <h1>Experience</h1>
                                <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder of human happiness. No one rejects dislikes</p>
                                <p>Born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="experience-single mb-30">
                                <div className="experience-img">
                                    <img src={videoBG} alt="" />
                                    <div className="experience-video">
                                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='LTXD6XZXc3U' onClose={() => { openModal(); }} />
                                        <a className="popup-video" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- experience-area-end --> */}


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
                                <a className="btn btn-white btn-none" href="#"><span className="btn-text">join with us <i className="fa fa-long-arrow-right"></i></span> </a>
                                <a className="cta-link" href="#"><i className="fa fa-phone"></i> +812 (345) 789 88</a>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- cta-area-end --> */}
        </React.Fragment>
    );
}

export default TeamDetails;