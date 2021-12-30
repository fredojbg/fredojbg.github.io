import SingleService from '../../components/Service/SingleService';

// Service Image Icons
import serviceIcon1 from '../../assets/img/service/style6/1.png';
import serviceIcon2 from '../../assets/img/service/style6/2.png';
import serviceIcon3 from '../../assets/img/service/style6/3.png';
import serviceIcon4 from '../../assets/img/service/style6/4.png';
import serviceIcon5 from '../../assets/img/service/style6/5.png';
import serviceIcon6 from '../../assets/img/service/style6/6.png';

import bgImg from '../../assets/img/bg/services-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const Service = () => {

    return (
        <div id="rs-service" className="rs-services main-home style3 pt-120 pb-120 md-pt-80 md-pb-80" style={bgStyle}>
            <div className="container relative">
                <div className="sec-left">
                    <h2 className="title">Our Featured Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-24">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            serviceURL="computer-repair"
                            Title="Computer Repair" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon2}
                            serviceURL="mobile-repair"
                            Title="Mobile Repair" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            serviceURL="data-protection"
                            Title="Data Protection" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-24">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon4}
                            serviceURL="network-setup"
                            Title="Network Setup" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-24">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon5}
                            serviceURL="data-backup"
                            Title="Data Backup" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon6}
                            serviceURL="remote-assistance"
                            Title="Remote Assistance" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;