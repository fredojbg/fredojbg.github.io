import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
	const { pageTitle, titleClass, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

	const breadcrumbsImgStyle = {
		backgroundImage: `url(${breadcrumbsImg})`
	}

	return (
		<div className="rs-breadcrumbs" style={breadcrumbsImgStyle}>
			<div className="container">
				<div className="breadcrumbs-inner text-center">
					<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
					<ul>
						<li>
							<Link to="/" className="active">{parentCategory ? parentCategory : 'Home'}</Link>
						</li>
						{pageCategory ? 
							<>
								<li>
									<Link to="/" className="active">{pageCategory ? pageCategory : 'Category'}</Link>
								</li> 
								<li>{pageName ? pageName : 'Page Name'}</li>
							</> : <li>{pageName ? pageName : 'Page Name'}</li>							
						}
						
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SiteBreadcrumb;




