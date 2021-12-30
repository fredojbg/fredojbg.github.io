import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeThreeOnepageMain from './HomeThreeOnepageMain';

const HomeThreeOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeThreeOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeThreeOnePage;
