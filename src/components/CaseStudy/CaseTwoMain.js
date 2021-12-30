import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


import projectImg1 from '../../assets/img/project/c-01.jpg';
import projectImg2 from '../../assets/img/project/c-02.jpg';
import projectImg3 from '../../assets/img/project/c-03.jpg';
import projectImg4 from '../../assets/img/project/ca-1.jpg';
import projectImg5 from '../../assets/img/project/ca-2.jpg';
import projectImg6 from '../../assets/img/project/ca-3.jpg';
import projectImg7 from '../../assets/img/project/ca-4.jpg';

import caseImg1 from '../../assets/img/project/case-1.jpg';
import caseImg2 from '../../assets/img/project/case-2.jpg';
import caseImg3 from '../../assets/img/project/case-3.jpg';
import caseImg4 from '../../assets/img/project/case-4.jpg';
import caseImg5 from '../../assets/img/project/case-5.jpg';
import caseImg6 from '../../assets/img/project/case-6.jpg';

import bgImg1 from '../../assets/img/bg/case.jpg';
import bgImg2 from '../../assets/img/bg/bg-2.jpg';

const bgStyle1 = {
    backgroundImage:`url(${bgImg1})`
}

const bgStyle2 = {
    backgroundImage:`url(${bgImg2})`
}

const settings = {
    className: "case-active",
    dots: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
};

const CaseTwo = () => {

    return (
        <React.Fragment>
            {/* <!-- case-studies-start --> */}
            <div className="case-studies pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-75">
                                <span className="border-left-1"></span>
                                <span>case studies</span>
                                <span className="border-right-1"></span>
                                <h1>Our Recent Case Studies</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-studies-wrapper mb-30">
                                <div className="case-studies-img">
                                    <img src={projectImg1} alt="" />
                                    <div className="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><Link to ="/case-study/style-1">Creative Idea Buildup</Link></h3>
                                    </div>
                                </div>
                                <div className="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-studies-wrapper mb-30">
                                <div className="case-studies-img">
                                    <img src={projectImg2} alt="" />
                                    <div className="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><Link to ="/case-study/style-1">Creative Idea Buildup</Link></h3>
                                    </div>
                                </div>
                                <div className="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-studies-wrapper mb-30">
                                <div className="case-studies-img">
                                    <img src={projectImg3} alt="" />
                                    <div className="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><Link to ="/case-study/style-1">Creative Idea Buildup</Link></h3>
                                    </div>
                                </div>
                                <div className="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- case-studies-end --> */}

            {/* <!-- our-case-area-start --> */}
            <div className="our-case-area pt-120  pr-55 pl-55 pb-220" style={bgStyle1}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                                <span className="border-left-1"></span>
                                <span>our project</span>
                                <span className="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg5} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg6} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg7} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg5} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg6} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg7} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg5} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg6} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="our-case-wrapper">
                                        <div className="our-case-img">
                                            <Link to ="/case-study/style-1"><img src={projectImg7} alt="" /></Link>
                                        </div>
                                        <div className="our-case-text">
                                            <h3><Link to ="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <Link to ="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-angle-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-case-area-end --> */}

            {/* <!-- case-area-start --> */}
            <div className="case-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-80">
                                <span className="border-left-1"></span>
                                <span>our project</span>
                                <span className="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg1} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg2} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg3} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg4} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg5} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="case-wrapper mb-30">
                                <div className="case-img">
                                    <Link to ="/case-study/style-1"><img src={caseImg6} alt="" /></Link>
                                </div>
                                <div className="case-text">
                                    <span>Idea generator</span>
                                    <h3><Link to ="/case-study/style-1">Software Development</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- case-area-end --> */}

            {/* <!-- cta-area-start --> */}
            <div className="cta-area pt-125 pb-95" style={bgStyle2}>
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

export default CaseTwo;