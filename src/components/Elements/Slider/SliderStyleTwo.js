import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

const SliderStyleTwo = () =>  {
    const navPrevIcon = () => ("<i class='fa fa-angle-left'></i>");
    const navNextIcon = () => ("<i class='fa fa-angle-right'></i>"); 

    const options = {
        items: 1,
        nav: true,
        dots: false,
        margin: 0,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        loop: true,
        center: false,
        navText: [navPrevIcon,navNextIcon],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
        }
    };

    return (
        <React.Fragment>
            <div className="rs-slider style1">
            <OwlCarousel options={options} >
                <div className="slider-content slide1">
                    <div className="container">
                        <div className="content-part">
                            <div className="sl-sub-title">Top-North Software</div>
                            <h1 className="sl-title mb-mb-10">Development</h1>
                            <div className="sl-desc">
                                Using modern technogoly & modern frameworks
                            </div>
                            <div className="sl-btn">
                                <Link className="readon learn-more slider-btn" to="/about">Get in touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="slider-content slide2">
                    <div className="container">
                        <div className="content-part text-center">
                            <div className="sl-sub-title">We Increase Your</div>
                            <h1 className="sl-title mb-mb-10">Business Success</h1>
                            <div className="sl-desc">
                                Using modern technogoly and IT Services
                            </div>
                            <ul className="slider-btn">
                                <li><Link className="readon learn-more slider-btn" to="/about">Free Consultation</Link></li>
                                <li>
                                    <div className="slider-video">
                                        <a className="popup-videos" href="https://www.youtube.com/watch?v=atMUy_bPoQI">
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </React.Fragment>
    );
}

export default SliderStyleTwo;