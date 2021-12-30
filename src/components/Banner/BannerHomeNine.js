import React from 'react';
import { Link } from 'react-router-dom';


import bannerIcon from '../../assets/img/banner/style2/best-seller.png';
import bannerImg from '../../assets/img/banner/style2/bnr-ly2.png';
import shapeImg from '../../assets/img/banner/style2/bnr-ly1.png';

import bgImg from '../../assets/img/bg/banner-9.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const BannerHomeNine = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style5" style={bgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-8">
                            <div className="banner-content">
                                <div className="icon-seller mb-20">
                                    <img
                                        src={bannerIcon}
                                        alt=""
                                    />
                                </div>
                                <h1 className="title">#1 World Best<span> Application</span><br></br>Testing Tools-Braintech</h1>
                                <p className="desc">
                                    We are leading technology solutions proving company all over
                                    the world doing over 40 years. 
                                </p>
                                <div className="btn-part">
                                    <Link className="readon started get-new" to="/about">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-img">
                    <div className="images-part hidden-sm"> 
                        <img
                            src={bannerImg}
                            alt=""
                        />
                    </div>
                    <img
                        className="layer-img"
                        src={shapeImg}
                        alt=""
                    />                    
                </div>                
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeNine;