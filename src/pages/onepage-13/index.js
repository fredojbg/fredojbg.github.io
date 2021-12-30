import React from 'react';
import Footer from '../../components/Layout/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import HomeThirteenOnepageMain from './HomeThirteenOnepageMain';
import SearchModal from '../../components/Layout/Header/SearchModal';
import OnepageHeaderStyleFour from '../../components/Layout/Header/OnepageHeaderFour';

import logo from '../../assets/img/logo/white-logo.png';

const HomeThirteenOnePage = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <OnepageHeaderStyleFour 
                headerClass='rs-header style3 modify3 header-transparent'
                headerNormalLogo={logo}
                offCanvas='enable'
            />
            <HomeThirteenOnepageMain />
            <Footer
                footerClass="rs-footer style1"
            />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeThirteenOnePage;
