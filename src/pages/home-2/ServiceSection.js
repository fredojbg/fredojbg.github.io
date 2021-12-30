import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../assets/img/service/icons/1.png';
import serviceIcon2 from '../../assets/img/service/icons/2.png';
import serviceIcon3 from '../../assets/img/service/icons/3.png';
import serviceIcon4 from '../../assets/img/service/icons/4.png';
import serviceIcon5 from '../../assets/img/service/icons/5.png';
import serviceIcon6 from '../../assets/img/service/icons/6.png';
import leftShape from '../../assets/img/service/shape-2.png';
import rightShape from '../../assets/img/service/shape-3.png';

const Service = () => {

    return (
        <div id="rs-service" className="relative rs-services style4 modify1 services3 gray-bg pt-120 md-pt-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text"
                    subtitle="Services"
                    titleClass="title"
                    title="We Are Offering All Kinds of IT Solutions Services"
                    effectClass="heading-line"
                />                
            </div>
            <div className="bg-section pb-120 md-pb-80">
                <div className="container">
                    <div className="row gray-bg pb-36 pl-26 pr-26 md-pl-0 md-pr-0">
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon1}
                                serviceURL="software-development"
                                Title="Software Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon2}
                                serviceURL="web-development"
                                Title="Web Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon3}
                                serviceURL="analytic-solutions"
                                Title="Analytic Solutions" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon4}
                                serviceURL="clould-devOps"
                                Title="Clould & DevOps" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon5}
                                serviceURL="product-design"
                                Title="Product & Design" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon6}
                                serviceURL="data-center"
                                Title="Data Center" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                    </div>
                    <div className="btn-part text-center mt-66">
                        <Link className="readon learn-more contact-us" to="/service">View All Services</Link>
                    </div>
                </div>
                <div className="shape-part">
                    <div className="left-side">
                        <img src={leftShape} alt="" /> 
                    </div>
                    <div className="right-side">
                        <img src={rightShape} alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;