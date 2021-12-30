import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu, secondParentMenu, activeMenu } = props;

    return (
        <React.Fragment>
            <li className={parentMenu === 'home' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}><Link to="" as="/">Home</Link>
                <ul className="sub-menu">
                    <li className="menu-item-has-children">
                        <Link href="#" className={secondParentMenu === 'multipage' ? 'active-menu' : ''}>Multipages</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/" className={activeMenu === "/home-1"  ? "active-menu" : ""}>Main Demo</Link>
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
                    <li className="menu-item-has-children">
                        <Link href="#" className={secondParentMenu === 'onepage' ? 'active-menu' : ''}>Onepages</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/onepage-1" className={activeMenu === "/onepage-1" ? "active-menu" : ""}>Main Demo</Link>
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
            <li className={parentMenu === 'about' ? 'current-menu-item' : ''}>
                <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>About</Link>
            </li>
            <li className={parentMenu === 'service' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#" as="#">Service</Link>
                <ul className="sub-menu">
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
                        <Link to="/service/data-center" lassName={activeMenu === "/data-center" ? "active-menu" : ""}>Data Center</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'page' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="#" className={secondParentMenu === 'services' ? 'active-menu' : ''}>Services</Link>
                        <ul className="sub-menu right ">
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
                    <li>
                        <Link href="#" className={secondParentMenu === 'case-studies' ? 'active-menu' : ''}>Case Studies</Link>
                        <ul className="sub-menu right">
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
                    <li>
                        <Link href="#" className={secondParentMenu === 'shop' ? 'active-menu' : ''}>Shop</Link>
                        <ul className="sub-menu right">
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
            <li className={parentMenu === 'blog' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/blog/blog-details" className={activeMenu === "/blog-details" ? "active-menu" : ""}>Blog details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'current-menu-item' : ''}>
                <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>Contact</Link>
            </li>
        </React.Fragment>
    );
}

export default MenuItems;