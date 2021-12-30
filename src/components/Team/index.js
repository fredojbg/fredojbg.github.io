import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import SingleTeam from './SingleTeam';


import teamImg1 from '../../assets/img/team/1.jpg';
import teamImg2 from '../../assets/img/team/2.jpg';
import teamImg3 from '../../assets/img/team/3.jpg';

const Team = () => {

    return (
        <React.Fragment>
            <div className="rs-team modify1 pt-120 pb-94 md-pt-80 md-pb-74">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-45"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Team"
                        titleClass="title white-color"
                        title="Who We Are"
                        effectClass="heading-line"
                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg1}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg2}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg3}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team