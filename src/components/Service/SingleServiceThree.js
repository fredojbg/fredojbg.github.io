import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceThree = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-icon">
                <img 
                    src={props.serviceImage} 
                    alt={props.Title}
                />
            </div>
            <div className="services-content">
                <h2 className="services-title">
                    <Link to='/service/service-details'>
                        {props.Title}
                    </Link>
                </h2>
                <p className="desc">
                    {props.Text}
                </p>
                <div className="services-btn2">
                    <Link to='/service/service-details'>
                        {props.serviceBtn}
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceThree