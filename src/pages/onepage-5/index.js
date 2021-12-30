import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeFiveOnepageMain from './HomeFiveOnepageMain';

const HomeFiveOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeFiveOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeFiveOnePage;
