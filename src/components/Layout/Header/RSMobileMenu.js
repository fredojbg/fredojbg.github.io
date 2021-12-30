import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RSMobileMenu = ({ setMenuOpen, menuOpen, activeMenu }) => {

	const [home, setHome] = useState(false)
	const [homeMultipage, setHomeMultipage] = useState(false)
	const [homeOnepage, setHomeOnepage] = useState(false)
	const [about, setAbout] = useState(false)
	const [services, setServices] = useState(false)
	const [blog, setBlog] = useState(false)
	const [pages, setPages] = useState(false)
	const [servicePages, setServicePages] = useState(false)
	const [caseStudies, setCaseStudies] = useState(false)
	const [shopPages, setShopPages] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'homeMultipage') {
			setHome(true)
			setHomeMultipage(!homeMultipage)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'homeOnepage') {
			setHome(true)
			setHomeMultipage(false)
			setHomeOnepage(!homeOnepage)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'about') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(!about)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'services') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(!services)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(!blog)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(!pages)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'servicePages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(!servicePages)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'caseStudies') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(false)
			setCaseStudies(!caseStudies)
			setShopPages(false)
		}
		else if (menu === 'shopPages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(!shopPages)
		}
	};

	return (
		<div className="container relative">
			<div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
				<div className="mobile-menu">
					<ul className="nav-menu">
						<li className={home ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link onClick={() => { openMobileMenu('home'); }} className={activeMenu === "/" ? "active-menu" : ""}>Home</Link>
							<ul className={home ? "sub-menu current-menu" : "sub-menu"}>
								<li className={homeMultipage ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('homeMultipage'); }}>Multipages</Link>
									<ul className={homeMultipage ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/" className={activeMenu === "/" ? "active-menu" : ""}>Main Demo</Link>
										</li>
										<li>
											<Link to="/home-2" className={activeMenu === "/home-2" ? "active-menu" : ""}>Digital Agency 01</Link>
										</li>
										<li>
											<Link to="/home-3" className={activeMenu === "/home-3" ? "active-menu" : ""}>IT Solution 01</Link>
										</li>
										<li>
											<Link to="/home-4" className={activeMenu === "/home-4" ? "active-menu" : ""}>Digital Agency 02</Link>
										</li>
										<li>
											<Link to="/home-5" className={activeMenu === "/home-5" ? "active-menu" : ""}>Software Solution</Link>
										</li>
										<li>
											<Link to="/home-6" className={activeMenu === "/home-6" ? "active-menu" : ""}>Data Analysis</Link>
										</li>
										<li>
											<Link to="/home-7" className={activeMenu === "/home-7" ? "active-menu" : ""}>IT Solution 02</Link>
										</li>
										<li>
											<Link to="/home-8" className={activeMenu === "/home-8" ? "active-menu" : ""}>Gadgets Repairs</Link>
										</li>
										<li>
											<Link to="/home-9" className={activeMenu === "/home-9" ? "active-menu" : ""}>Application Testing</Link>
										</li>
										<li>
											<Link to="/home-10" className={activeMenu === "/home-10" ? "active-menu" : ""}>IT Solution 03</Link>
										</li>
										<li>
											<Link to="/home-11" className={activeMenu === "/home-11" ? "active-menu" : ""}>Digital Agency Dark</Link>
										</li>
										<li>
											<Link to="/home-12" className={activeMenu === "/home-12" ? "active-menu" : ""}>Web Design Agency</Link>
										</li>
										<li>
											<Link to="/home-13" className={activeMenu === "/home-13" ? "active-menu" : ""}>Branding Agency</Link>
										</li>
									</ul>
								</li>
								<li className={homeOnepage ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('homeOnepage'); }}>Onepages</Link>
									<ul className={homeOnepage ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/" className={activeMenu === "/onepage-1" ? "active-menu" : ""}>Main Demo</Link>
										</li>
										<li>
											<Link to="/onepage-2" className={activeMenu === "/onepage-2" ? "active-menu" : ""}>Digital Agency 01</Link>
										</li>
										<li>
											<Link to="/onepage-3" className={activeMenu === "/onepage-3" ? "active-menu" : ""}>IT Solution 01</Link>
										</li>
										<li>
											<Link to="/onepage-4" className={activeMenu === "/onepage-4" ? "active-menu" : ""}>Digital Agency 02</Link>
										</li>
										<li>
											<Link to="/onepage-5" className={activeMenu === "/onepage-5" ? "active-menu" : ""}>Software Solution</Link>
										</li>
										<li>
											<Link to="/onepage-6" className={activeMenu === "/onepage-6" ? "active-menu" : ""}>Data Analysis</Link>
										</li>
										<li>
											<Link to="/onepage-7" className={activeMenu === "/onepage-7" ? "active-menu" : ""}>IT Solution 02</Link>
										</li>
										<li>
											<Link to="/onepage-8" className={activeMenu === "/onepage-8" ? "active-menu" : ""}>Gadgets Repairs</Link>
										</li>
										<li>
											<Link to="/onepage-9" className={activeMenu === "/onepage-9" ? "active-menu" : ""}>Application Testing</Link>
										</li>
										<li>
											<Link to="/onepage-10" className={activeMenu === "/onepage-10" ? "active-menu" : ""}>IT Solution 03</Link>
										</li>
										<li>
											<Link to="/onepage-11" className={activeMenu === "/onepage-11" ? "active-menu" : ""}>Digital Agency Dark</Link>
										</li>
										<li>
											<Link to="/onepage-12" className={activeMenu === "/onepage-12" ? "active-menu" : ""}>Web Design Agency</Link>
										</li>
										<li>
											<Link to="/onepage-13" className={activeMenu === "/onepage-13" ? "active-menu" : ""}>Branding Agency</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>About</Link>
						</li>
						<li className={services ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('services'); }}>Service</Link>
							<ul className={services ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/service/software-development" className={activeMenu === "/software-development" ? "active-menu" : ""}>Software Development</Link>
								</li>
								<li>
									<Link to="/service/web-development" className={activeMenu === "/web-development" ? "active-menu" : ""}>Web Development</Link>
								</li>
								<li>
									<Link to="/service/analytic-solutions" className={activeMenu === "/analytic-solutions" ? "active-menu" : ""}>Analytic Solutions</Link>
								</li>
								<li>
									<Link to="/service/cloud-and-devops" className={activeMenu === "/cloud-and-devops" ? "active-menu" : ""}>Cloud and DevOps</Link>
								</li>
								<li>
									<Link to="/service/project-design" className={activeMenu === "/project-design" ? "active-menu" : ""}>Project Design</Link>
								</li>
								<li>
									<Link to="/service/data-center" className={activeMenu === "/data-center" ? "active-menu" : ""}>Data Center</Link>
								</li>
							</ul>
						</li>
						<li className={pages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('pages'); }}>Pages</Link>
							<ul className={pages ? "sub-menu current-menu" : "sub-menu"}>
								<li className={servicePages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('servicePages'); }}>Services</Link>
									<ul className={servicePages ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/service/service-1" className={activeMenu === "/service-1" ? "active-menu" : ""}>Service 1</Link>
										</li>
										<li>
											<Link to="/service/service-2" className={activeMenu === "/service-2" ? "active-menu" : ""}>Service 2</Link>
										</li>
										<li>
											<Link to="/service/service-3" className={activeMenu === "/service-3" ? "active-menu" : ""}>Service 3</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="/team" className={activeMenu === "/team" ? "active-menu" : ""}>Our Team</Link>
								</li>
								<li>
									<Link to="/team/team-details" className={activeMenu === "/team-details" ? "active-menu" : ""}>Single Team</Link>
								</li>
								<li className={caseStudies ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('caseStudies'); }}>Case Studies</Link>
									<ul className={caseStudies ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/case-study/style-1" className={activeMenu === "/case-studies-1" ? "active-menu" : ""}>Case Studies Style 1</Link>
										</li>
										<li>
											<Link to="/case-study/style-2" className={activeMenu === "/case-studies-2" ? "active-menu" : ""}>Case Studies Style 2</Link>
										</li>
										<li>
											<Link to="/case-study/style-3" className={activeMenu === "/case-studies-3" ? "active-menu" : ""}>Case Studies Style 3</Link>
										</li>
										<li>
											<Link to="/case-study/style-4" className={activeMenu === "/case-studies-4" ? "active-menu" : ""}>Case Studies Style 4</Link>
										</li>
										<li>
											<Link to="/case-study/style-5" className={activeMenu === "/case-studies-5" ? "active-menu" : ""}>Case Studies Style 5</Link>
										</li>
										<li>
											<Link to="/case-study/style-6" className={activeMenu === "/case-studies-6" ? "active-menu" : ""}>Case Studies Style 6</Link>
										</li>
										<li>
											<Link to="/case-study/style-7" className={activeMenu === "/case-studies-7" ? "active-menu" : ""}>Case Studies Style 7</Link>
										</li>
									</ul>
								</li>
								<li className={shopPages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('shopPages'); }}>Shop</Link>
									<ul className={shopPages ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/shop" className={activeMenu === "/shop" ? "active-menu" : ""}>Shop</Link>
										</li>
										<li>
											<Link to="/shop/shop-single" className={activeMenu === "/shop-single" ? "active-menu" : ""}>Shop Single</Link>
										</li>
										<li>
											<Link to="/shop/cart" className={activeMenu === "/cart" ? "active-menu" : ""}>Cart</Link>
										</li>
										<li>
											<Link to="/shop/checkout" className={activeMenu === "/checkout" ? "active-menu" : ""}>Checkout</Link>
										</li>
										<li>
											<Link to="/shop/my-account" className={activeMenu === "/my-account" ? "active-menu" : ""}>My Account</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="/pricing" className={activeMenu === "/pricing" ? "active-menu" : ""}>Pricing</Link>
								</li>
								<li>
									<Link to="/faq" className={activeMenu === "/faq" ? "active-menu" : ""}>Faq</Link>
								</li>
							</ul>
						</li>
						<li className={blog ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('blog'); }}>Blog</Link>
							<ul className={blog ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>Blog</Link>
								</li>
								<li>
									<Link to="/blog/blog-details" className={activeMenu === "/blog-details" ? "active-menu" : ""}>Blog details</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMobileMenu;