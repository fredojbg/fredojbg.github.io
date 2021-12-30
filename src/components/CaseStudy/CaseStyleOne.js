import React from 'react';
import { Link } from 'react-router-dom';

const CaseStyleOne = (props) => {
    const { caseClass } = props;
    return (
        <div className={caseClass ? caseClass : 'project-item'}>
            <div className="project-img">
                <img
                    src={props.caseImage}
                    alt={props.caseTitle}
                />
            </div>
            <div className="project-content">
                <Link className="p-icon" to="/case-study/style-2"><i className="fa fa-angle-right"></i></Link>
                <div className="project-inner">
                    <span className="category"><Link to="#">{props.caseCategory}</Link></span>
                    <h3 className="title"><Link to="/case-study/style-2">{props.caseTitle}</Link></h3>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleOne;