import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeOnepageMain from './HomeOnepageMain';

const HomeOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader />
            <HomeOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeOnePage;
