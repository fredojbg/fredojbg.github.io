import React from 'react';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../assets/img/service/style1/1.png';
import serviceIcon2 from '../../assets/img/service/style1/2.png';
import serviceIcon3 from '../../assets/img/service/style1/3.png';
import serviceIcon4 from '../../assets/img/service/style1/4.png';

const ServiceTwo = () => {

    return (
        <div className="rs-services main-home style1 pt-100 md-pt-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            serviceURL="it-management"
                            Title="IT Management" 
                            Text="Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu. " 
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-50">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon2}
                            serviceURL="cloud-services"
                            Title="Cloud Services" 
                            Text="Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu. " 
                        />
                    </div>
                    <div className="col-lg-3 col-md-6  md-mb-50">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            serviceURL="data-security"
                            Title="Data Security" 
                            Text="Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu. " 
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon4}
                            serviceURL="machine-learning"
                            Title="Machine Learning" 
                            Text="Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu. " 
                        />
                    </div>                        
                </div>
            </div>
        </div>
    );
}

export default ServiceTwo;