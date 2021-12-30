import React, { Component, useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import ModalVideo from 'react-modal-video';
import AppointmentForm from '../../Appointment/Appointment';

const SliderDefault = () =>  { 

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

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
        <div className="slider-area">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <OwlCarousel options={options} >
                <div className="single-slider">
                    <div className="slider-height pt-100 pb-100" style={{ backgroundImage:`url(${'assets/img/slider/slider-1.jpg'})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 pt-40 pr-140"> 
                                    <div className="slider-content">
                                        <h2 className="sl-title">IT Consulting Services<br></br> For Your Business</h2>
                                        <p  className="sl-desc">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                        <div className="slider-video">
                                            <a className="popup-video" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 pl-70">
                                    <AppointmentForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default SliderDefault;