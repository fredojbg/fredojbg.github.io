import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/img/logo/first-preto.png';

const TopHeader = () => {

    return (
        <div className="topbar-area hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo-part">
                            <Link to="/"><img src={Logo} alt="Logo" width="58%" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-10 text-right">
                        <ul className="rs-contact-info">
                            <li className="contact-part">
                                <i className="flaticon-location"></i>
                                <span className="contact-info">
                                    <span>Endereco</span>
                                    Av dos Autonomistas, 430
                                </span>
                            </li>
                            <li className="contact-part">
                                <i className="flaticon-email"></i>
                                <span className="contact-info">
                                    <span>E-mail</span>
                                    <a href="mailto:support@rstheme.com"> alfredo@firstaction.com.br</a>
                                </span>
                            </li>
                            <li className="contact-part">
                                <i className="flaticon-call"></i>
                                <span className="contact-info">
                                    <span>Phone</span>
                                    +11 942598189
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;