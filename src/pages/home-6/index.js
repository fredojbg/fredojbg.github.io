import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFive from '../../components/Layout/Header/HeaderStyleFive';
import Footer from '../../components/Layout/Footer';
import HomeSixMain from './HomeSixMain';

const HomeSix = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <HeaderStyleFive
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify1 header-transparent'
                offCanvas='enable'
                activeMenu='/home-6'
            />
            <HomeSixMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeSix;