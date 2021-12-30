import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import partnerLogo1 from '../../assets/img/brand/style2/1.png';
import partnerLogo2 from '../../assets/img/brand/style2/2.png';
import partnerLogo3 from '../../assets/img/brand/style2/3.png';
import partnerLogo4 from '../../assets/img/brand/style2/4.png';
import partnerLogo5 from '../../assets/img/brand/style2/5.png';
import partnerLogo6 from '../../assets/img/brand/style2/6.png';

const BrandHomeFive = () =>  {

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
            480: {
                items: 2,
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
        <div className="rs-partner style2 pt-50 pb-50">
            <div className="container">
                <OwlCarousel options={options} >
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo1} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo4} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo5} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo6} alt="" />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default BrandHomeFive;