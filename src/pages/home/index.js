import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeMain from './HomeMain';

const Home = () => {
	return (
		<React.Fragment>
			<Header
				parentMenu='home'
				secondParentMenu='multipage'
				activeMenu='/home-1'
			/>
			<HomeMain />
			<Footer footerClass="rs-footer" />
			<SearchModal />
		</React.Fragment>
	);
}

export default Home;
