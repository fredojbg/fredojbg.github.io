import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeSixOnepageMain from './HomeSixOnepageMain';

const HomeSixOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeSixOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeSixOnePage;
