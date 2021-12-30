import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import CarouselDefault from '../Elements/OwlCarousel/CarouselDefault';

import projectImg1 from '../../assets/img/project/ca-1.jpg';
import projectImg2 from '../../assets/img/project/ca-2.jpg';
import projectImg3 from '../../assets/img/project/ca-3.jpg';
import projectImg4 from '../../assets/img/project/ca-4.jpg';

import bgImg from '../../assets/img/bg/case.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const CaseSettings = {
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
            <div>
                {/* <!-- project-area-start --> */}
                <div className="project-area pt-130 pb-185  pl-140 pr-140">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <CarouselDefault />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- project-area-end --> */}

                {/* <!-- our-case-area-start --> */}
                <div className="our-case-area pt-120  pr-55 pl-55 pb-220" style={bgStyle}>
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
                                <Slider {...CaseSettings}>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg1} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg2} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg3} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg1} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg2} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg3} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg1} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Idea For Business <span>(IT Management)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg2} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Product Design <span>(Design & Idea)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg3} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Cyber Security <span>(Database System)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <Link to="/case-study/style-1"><img src={projectImg4} alt="" /></Link>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><Link to="/case-study/style-1">Crerative Mind <span>(IT Consultant)</span></Link></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <Link to="/case-study/style-1"> <span className="cases-button">learn more <i className="fa fa-long-arrow-right"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- our-case-area-end --> */}
            </div>
        </React.Fragment>
    );
}

export default CaseTwo;