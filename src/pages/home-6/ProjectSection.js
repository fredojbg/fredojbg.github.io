import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProjectThree from '../../components/Project/SingleProjectThree';


import projectImg1 from '../../assets/img/project/style2/1.jpg';
import projectImg2 from '../../assets/img/project/style2/2.jpg';
import projectImg3 from '../../assets/img/project/style2/3.jpg';
import projectImg4 from '../../assets/img/project/style2/4.jpg';
import projectImg5 from '../../assets/img/project/style2/5.jpg';
import projectImg6 from '../../assets/img/project/style2/6.jpg';

const Project = () => {

    return (

        <div id="rs-portfolio" className="rs-project style4 sec-bg pt-120 pb-100 md-pt-70 md-pb-50">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text gold-color"
                    subtitle="Projects"
                    titleClass="title title2"
                    title="Our Recent Launched Projects Available into Market"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg1}
                            Title="Product Engineering"
                            Category="Software"
                            projectURL="product-engineering"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg2}
                            Title="Analytic Solutions"
                            Category="Software"
                            projectURL="analytic-solutions"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg3}
                            Title="Product Design"
                            Category="Software"
                            projectURL="product-design"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg4}
                            Title="Growth Strategies"
                            Category="Software"
                            projectURL="growth-strategies"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg5}
                            Title="Platform Integration"
                            Category="Software"
                            projectURL="platform-integration"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleProjectThree
                            itemClass="project-item"
                            projectImage={projectImg6}
                            Title="Innovative Interfaces"
                            Category="Software"
                            projectURL="innovative-interfaces"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project