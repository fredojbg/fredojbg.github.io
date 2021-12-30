import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTwoOnepageMain from './HomeTwoOnepageMain';

const HomeTwoOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeTwoOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeTwoOnePage;
