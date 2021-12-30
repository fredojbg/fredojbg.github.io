import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeam = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="team-wrap">
                <div className="image-inner">
                    <img 
                        src={props.teamImage} 
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="team-content text-center">
                <h4 className="person-name">
                    <Link to='/team/team-details'>
                        {props.Title}
                    </Link>
                </h4>
                <span className="designation">{props.Designation}</span>
                <ul className="team-social">
                    <li>
                        <a href="#" ><i className="fa fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#" ><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" ><i className="fa fa-pinterest"></i></a>
                    </li>
                    <li>
                        <a href="#" ><i className="fa fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
	)
}

export default SingleTeam