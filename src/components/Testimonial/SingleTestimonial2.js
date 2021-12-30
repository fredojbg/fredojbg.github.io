import React from 'react';

const SingleTestimonial2 = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="author-desc">
                <div className="desc">
                    <img 
                        src={props.quoteImage} 
                        alt={props.Title}
                        className="quote" 
                    />
                    {props.Description}
                </div>
            </div>
            <div className="testi-content">
                <div className="images-wrap">
                    <img
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
                <a href='#' className="name">{props.Title}</a>
                <span className="designation">{props.Designation}</span>
            </div>
        </div>
	)
}

export default SingleTestimonial2