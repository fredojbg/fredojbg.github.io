import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import CallUs from './CallUsSection';
import Service from './ServiceSection';
import Process from './ProcessSection';
import Pricing from './PricingSection';
import Testimonial from './TestimonialSection';
import Project from '../../components/Project';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerDefault from '../../components/Banner/BannerDefault';

const HomeMain = () => {
	return (
		<React.Fragment>
			{/* banner-start */}
			<BannerDefault />
			{/* banner-start */}

			{/* about-area-start */}
			<About />
			{/* about-area-end */}

			{/* services-area-start */}
			<Service />
			{/* services-area-end */}

			{/* call us section start */}
			<CallUs />
			{/* call us section end */}
			
			{/* process-area-start */}
			<Process />
			{/* process-area-end */}

			{/* project-area-start */}
			<Project />
			{/* project-area-end */}

			{/* Pricing-area-start */}
			<Pricing />
			{/* Pricing-area-end */}

			{/* Testimonial-area-start */}
			<Testimonial />
			{/* Testimonial-area-end */}

			{/* Blog-area-start */}
			<Blog />
			{/* Blog-area-end */}	

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeMain;