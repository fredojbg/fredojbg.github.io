import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesWidget = () => {
    return (
        <div className="categories mb-50">
            <div className="widget-title">
                <h3 className="title">Categories</h3>
            </div>
            <ul>
                <li><Link to="#">Application Testing</Link></li>
                <li><Link to="#">Artifical Intelligence</Link></li>
                <li><Link to="#">Digital Technology</Link></li>
                <li><Link to="#">IT Services</Link></li>
                <li><Link to="#">Software Development</Link></li>
                <li><Link to="#">Web Development</Link></li>
            </ul>
        </div>
    )
}

export default CategoriesWidget;