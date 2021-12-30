import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import brandNormalLogo1 from '../../assets/img/brand/style2/1.png';
import brandNormalLogo2 from '../../assets/img/brand/style2/2.png';
import brandNormalLogo3 from '../../assets/img/brand/style2/3.png';
import brandNormalLogo4 from '../../assets/img/brand/style2/4.png';
import brandNormalLogo5 from '../../assets/img/brand/style2/5.png';
import brandNormalLogo6 from '../../assets/img/brand/style2/6.png';


import brandHoverLogo1 from '../../assets/img/brand/style2/1.png';
import brandHoverLogo2 from '../../assets/img/brand/style2/2.png';
import brandHoverLogo3 from '../../assets/img/brand/style2/3.png';
import brandHoverLogo4 from '../../assets/img/brand/style2/4.png';
import brandHoverLogo5 from '../../assets/img/brand/style2/5.png';
import brandHoverLogo6 from '../../assets/img/brand/style2/6.png';

const Brand = () =>  {

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: true,
        stagePadding: 0,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
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
        <div className="rs-partner style4 modify1 pt-80 xs-pt-40 pb-120 md-pb-80 xs-pb-40">
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