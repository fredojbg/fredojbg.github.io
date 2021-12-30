import React, { useState, useEffect, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import TopHeader from './TopBar';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';

import Logo from '../../../assets/img/logo/logo.png';
import whiteLogo from '../../../assets/img/logo/white-logo.png';

const Header = (props) => {
	const { parentMenu, secondParentMenu, activeMenu } = props;
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
											<i className = "fa fa-bars"></i>
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
							<div className="expand-btn-inner search-icon hidden-sticky hidden-md">
								<ul>
									<li className="sidebarmenu-search">
										<a onClick={searchModalAdd} className="rs-search" href="#">
											<i className ="flaticon-search"></i>
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

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeMenu={activeMenu} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default Header;