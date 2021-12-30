import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import brandNormalLogo1 from '../../../assets/img/brand/1.png';
import brandNormalLogo2 from '../../../assets/img/brand/2.png';
import brandNormalLogo3 from '../../../assets/img/brand/3.png';
import brandNormalLogo4 from '../../../assets/img/brand/4.png';
import brandNormalLogo5 from '../../../assets/img/brand/5.png';
import brandNormalLogo6 from '../../../assets/img/brand/6.png';


import brandHoverLogo1 from '../../../assets/img/brand/1.png';
import brandHoverLogo2 from '../../../assets/img/brand/2.png';
import brandHoverLogo3 from '../../../assets/img/brand/3.png';
import brandHoverLogo4 from '../../../assets/img/brand/4.png';
import brandHoverLogo5 from '../../../assets/img/brand/5.png';
import brandHoverLogo6 from '../../../assets/img/brand/6.png';

const Brand = (props) =>  {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage:`url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: '#00005B'
    }

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        margin: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1500: {
                items: 5,
            }
        }
    };

    return (
        <div className={ brandClass ? brandClass : 'rs-partner pt-80 pb-70'}  style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
                <OwlCarousel options={options} >
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo1} alt="" />
                                <img className="main-logo" src={brandNormalLogo1}  alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo2} alt="" />
                                <img className="main-logo" src={brandNormalLogo2}  alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo3} alt="" />
                                <img className="main-logo" src={brandNormalLogo3}  alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo4} alt="" />
                                <img className="main-logo" src={brandNormalLogo4}  alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo5} alt="" />
                                <img className="main-logo" src={brandNormalLogo5}  alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src={brandHoverLogo6} alt="" />
                                <img className="main-logo" src={brandNormalLogo6}  alt="" />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Brand;