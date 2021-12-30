import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';
import CanvasMenu from './CanvasMenu';


import whiteLogo from '../../../assets/img/logo/white-logo.png';
import Logo from '../../../assets/img/logo/logo.png';

const HeaderStyleFour = (props) => {
	const { headerClass, parentMenu, secondParentMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, primaryMenuToggle, offCanvas, activeMenu } = props;

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

	const canvasMenuAdd = () => {
		document.body.classList.add('nav-expanded');
	};
	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	return (
		<React.Fragment>
			<div className="full-width-header">
				<header id="rs-header" className={headerClass ? headerClass : 'rs-header style3 header-transparent'}>
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3">
									<div className="logo-part hidden-md">
										<Link to="/">
											<img className="normal-logo" src={headerNormalLogo ? headerNormalLogo : whiteLogo} alt="" />
											<img className="sticky-logo" src={headerStickyLogo ? headerStickyLogo : Logo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-lg-9 text-right md-text-left">
									<div className="rs-menu-area">
										<div className="main-menu">
											<div className="mobile-menu md-display-block">
												<Link to="/" className="mobile-normal-logo"><img className="normal-logo" src={mobileNormalLogo ? mobileNormalLogo : whiteLogo} alt="" /></Link>
												<Link to="/" className="mobile-sticky-logo"><img src={Logo} alt="logo" /></Link>
												<Link to="#" className={primaryMenuToggle ? "rs-menu-toggle primary" : "rs-menu-toggle"} onClick={() => {
													setMenuOpen(!menuOpen)
												}}>
													<i className="fa fa-bars"></i>
												</Link>
											</div>
											<nav className="rs-menu pr-100 lg-pr-50 md-pr-0 hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
														activeMenu={activeMenu}
													/>
												</ul>
											</nav>
										</div>
										<div className="expand-btn-inner search-icon hidden-md">
											{
												offCanvas ?
													<ul>
														<li className="sidebarmenu-search">
															<a href="#" onClick={searchModalAdd} className="rs-search" href="#">
																<i className="flaticon-search"></i>
															</a>
														</li>
														<li>
															<a href="#" onClick={canvasMenuAdd} id="nav-expander" className="humburger nav-expander">
																<span className="dot1"></span>
																<span className="dot2"></span>
																<span className="dot3"></span>
																<span className="dot4"></span>
																<span className="dot5"></span>
																<span className="dot6"></span>
																<span className="dot7"></span>
																<span className="dot8"></span>
																<span className="dot9"></span>
															</a>
														</li>
													</ul> :
													<ul>
														<li className="sidebarmenu-search">
															<a href="#" onClick={searchModalAdd} className="hidden-xs rs-search" href="#">
																<i className="flaticon-search"></i>
															</a>
														</li>
													</ul>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				</header>
				<CanvasMenu />
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleFour;