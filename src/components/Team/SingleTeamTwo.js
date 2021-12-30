import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeamTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="images-part">
                <img 
                    src={props.teamImage} 
                    alt={props.Title}
                />
                <div className="social-icon">
                    <ul>
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
            <div className="team-content text-center">
                <h4 className="person-name">
                    <Link to='/team/team-details'>
                        {props.Title}
                    </Link>
                </h4>
                <span className="designation">{props.Designation}</span>                
            </div>
        </div>
	)
}

export default SingleTeamTwo