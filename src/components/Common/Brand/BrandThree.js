import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import brandLogo1 from '../../../assets/img/brand/style2/1.png';
import brandLogo2 from '../../../assets/img/brand/style2/2.png';
import brandLogo3 from '../../../assets/img/brand/style2/3.png';
import brandLogo4 from '../../../assets/img/brand/style2/4.png';
import brandLogo5 from '../../../assets/img/brand/style2/5.png';
import brandLogo6 from '../../../assets/img/brand/style2/6.png';

const BrandThree = (props) =>  {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage:`url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

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
        <div className={ brandClass ? brandClass : 'rs-partner style2 pt-120 md-pt-80'}  style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
                <OwlCarousel options={options} >
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo1} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo4} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo5} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo6} alt="" />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default BrandThree;