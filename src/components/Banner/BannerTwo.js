import React from 'react';
import { Link } from 'react-router-dom';

const BannerTwo = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style2 pt-330 pb-330 lg-pt-200 lg-pb-200">
                <div className="container">
                    <div className="banner-content">
                        <div className="bnr-subtitle">It Software & Design</div>
                        <h1 className="bnr-title">Leading It & Software</h1>
                        <h3 className="bnr-titlesmall">Development Company</h3>
                        <div className="btn-part"><Link className="readon buy-now get-in" to="/about">Get In Touch</Link></div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerTwo;