import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';


const BannerHomeSeven = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);


    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div className="rs-banner style4">  
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />              
                <div className="container">
                    <div className="banner-content">
                        <span className="sub-title">Technology &amp; It Solutions </span>
                       <h1 className="title">Excellent IT services for your success</h1>
                        <p className="desc">
                            We are Leading Technology Solutions Providing Company all over the world doing over 40 years.
                        </p>
                        <ul className="banner-btn">
                            <li><Link className="readon discover" to="/about">Discover More</Link></li>
                            <li>
                                <div className="rs-videos">
                                    <div className="animate-border white-color">
                                        <a className="popup-border popup-videos" onClick={() => { openModal(); }}>
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerHomeSeven;