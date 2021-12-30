import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopBar';
import OnepageMenuItems from './OnepageMenuItems';
import RSOnepageMobileMenu from './RSOnepageMobileMenu';

import whiteLogo from '../../../assets/img/logo/white-logo.png';
import Logo from '../../../assets/img/logo/logo.png';


const OnepageHeader = (props) => {
	const { item1, item2, item3, item4, item5, item6, item7 } = props;

	const [menuOpen, setMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	return (
		<React.Fragment>
			<div className="full-width-header">
				<header id="rs-header" className="rs-header">
					<TopHeader />
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
							<div className="logo-area hidden-md">
								<Link to="/"><img className="sticky-logo" src={Logo} alt="logo" /></Link>
							</div>
							<div className="rs-menu-area">
								<div className="main-menu">
									<div className="mobile-menu md-display-block">
										<Link to="/" className="mobile-normal-logo"><img src={whiteLogo} alt="logo" /></Link>
										<Link to="/" className="mobile-sticky-logo"><img src={Logo} alt="logo" /></Link>
										<Link to="#" className="rs-menu-toggle" onClick={() => {
											setMenuOpen(!menuOpen)
										}}>
											<i className="fa fa-bars"></i>
										</Link>
									</div>
									<nav className="rs-menu hidden-md">
										<ul className="nav-menu">
											<OnepageMenuItems
												menuItem1={item1 ? item1 : 'Home'}
												menuItem2={item2 ? item2 : 'About'}
												menuItem3={item3 ? item3 : 'Services'}
												menuItem4={item4 ? item4 : 'Project'}
												menuItem5={item5 ? item5 : 'Team'}
												menuItem6={item6 ? item6 : 'Blog'}
												menuItem7={item7 ? item7 : 'Contact'}
											/>
										</ul>
									</nav>
								</div>
							</div>
							<div className="expand-btn-inner search-icon hidden-sticky hidden-md">
								<ul>
									<li className="sidebarmenu-search">
										<a href="#" onClick={searchModalAdd} className="rs-search" href="#">
											<i className="flaticon-search"></i>
										</a>
									</li>
								</ul>
								<div className="toolbar-sl-share">
									<ul className="social">
										<li>
											<a href="#"><i className="fa fa-facebook-f"></i></a>
										</li>
										<li>
											<a href="#"><i className="fa fa-twitter"></i></a>
										</li>
										<li>
											<a href="#"><i className="fa fa-pinterest"></i></a>
										</li>
										<li>
											<a href="#"><i className="fa fa-instagram"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<RSOnepageMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default OnepageHeader;