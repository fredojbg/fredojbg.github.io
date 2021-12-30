import { Link } from 'react-router-dom';

const SingleServiceSix = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-img">
                <Link to='/service/service-details'>
                    <img 
                        className="main-img"
                        src={props.serviceImg} 
                        alt={props.Title}
                    />
                </Link>
            </div>
            <div className="services-content">
                <div className="services-text">
                    <div className="services-title">
                        <h3 className="title">
                            <Link to='/service/service-details'>
                                {props.Title}
                            </Link>
                        </h3>
                    </div>
                </div>
                <p className="services-txt">
                    {props.Text}
                </p>
                <div className={props.btnClass}>
                    <Link to='/service/service-details'>
                        {props.btnText}
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceSix