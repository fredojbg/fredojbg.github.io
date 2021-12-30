import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';

import Logo from '../../../assets/img/logo/logo.png';

const HeaderStyleEight = (props) => {
	const { parentMenu, secondParentMenu, activeMenu } = props;

	const [menuOpen, setMenuOpen] = useState(false)

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
				<header id="rs-header" className="rs-header style4 modify1 header-transparent">
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container box-layout">
							<div className="row align-items-center">
								<div className="col-lg-2">
									<div className="logo-part hidden-md">
										<Link to="/">
											<img src={Logo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-xl-7 col-lg-8">
									<div className="rs-menu-area md-display-block">
										<div className="main-menu">
											<div className="mobile-menu md-display-block">
												<Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
												<Link to="#" className="rs-menu-toggle primary" onClick={() => {
													setMenuOpen(!menuOpen)
												}}>
													<i className="fa fa-bars"></i>
												</Link>
											</div>
											<nav className="rs-menu hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
														activeMenu={activeMenu}
													/>
												</ul>
											</nav>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-2">
									<div className="expand-btn-inner search-icon hidden-md">
										<ul>
											<li className="sidebarmenu-search">
												<a href="#" onClick={searchModalAdd} className="rs-search" href="#">
													<i className="flaticon-search"></i>
												</a>
											</li>
											<li>
												<i className="fa fa-shopping-cart"></i>
											</li>
											<li className="quote-btn pl-20 hidden-lg">
												<a href="#">Get A Quote</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleEight;