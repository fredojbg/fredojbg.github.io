import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import BrandTwo from '../../components/Common/Brand/BrandTwo'


import bannerimg from '../../assets/img/banner/bannerhome-6.png';
import bnrAnimImg from '../../assets/img/banner/b4-dot-6.png';

const BannerHomeSix = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style3 modify2">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
                <div className="container">
                    <div className="row y-bottom">
                        <div className="col-lg-6 md-mt-50 order-last">
                            <div className="banner-img">
                                <img
                                    src={bannerimg}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content mb-120">
                                <h1 className="title">Business Intelligence & Data Analysis</h1>
                                <p className="desc">Our process that relies on methods and techniques to taking raw data - mining for insights and years of experience will help you become the industry leader.</p>
                                <ul className="banner-btn">
                                    <li><Link className="readon started" to="/about">Get Started</Link></li>
                                    <li>
                                        <div className="video-icon">
                                            <a className="animate-border" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* brand-area-start */}
                            <BrandTwo />
                            {/* brand-area-end */}
                        </div>
                    </div>
                </div>
                <div className="rs-animation">
                    <img className="dance3" src={bnrAnimImg} alt="images" />
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeSix;