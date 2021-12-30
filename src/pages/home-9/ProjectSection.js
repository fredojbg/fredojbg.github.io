import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/Common/SectionTitle/SectionTitleTwo';
import SingleProject from '../../components/Project/SingleProject';


import portfolioIcon from '../../assets/img/icon/portfolio.png';

import projectImg1 from '../../assets/img/project/style4/1.jpg';
import projectImg2 from '../../assets/img/project/style4/2.jpg';
import projectImg3 from '../../assets/img/project/style4/3.jpg';
import projectImg4 from '../../assets/img/project/style4/4.jpg';

const Project = () => {

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style6 modify1 pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle 
                        titleIcon={portfolioIcon}
                        title={<>Recent <span>Case Studies</span></>}
                    />
                    <div className="row">
                        <div className="col-md-6 mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg1} 
                                Title="Growth Strategies" 
                                Category="Application Testing" 
                            />
                        </div>
                        <div className="col-md-6 mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg2} 
                                Title="Product Design" 
                                Category="Application Testing" 
                            />
                        </div>                        
                        <div className="col-md-6 md-mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg3} 
                                Title="Analytic Solutions" 
                                Category="Application Testing" 
                            />
                        </div>
                        <div className="col-md-6">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg4} 
                                Title="Product Engineering" 
                                Category="Application Testing" 
                            />
                        </div>
                    </div>
                    <div className="btn-part mt-60 md-mt-30 text-center">
                        <Link className="readon started" to="/case-study/style-1">view Case Studies</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project