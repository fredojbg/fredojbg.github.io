import React from 'react';

const TopHeaderStyleTwo = () => {

    return (
        <div className="topbar-area style2 hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="topbar-contact">
                            <li>
                                <i className="fa fa-envelope-open"></i>
                                <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                <a href="tel:++1(990)999–5554">+1 (990) 999–5554</a>
                            </li>
                            <li>
                                <i className="fa fa-map-marker"></i>
                                05 kandi BR. New York
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-right">
                        <div className="toolbar-sl-share">
                            <ul>
                                <li className="opening"> <em>
                                    <i className="fa fa-clock"></i> 08:00am-6:00pm</em>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeaderStyleTwo;