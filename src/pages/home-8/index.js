import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeEightMain from './HomeEightMain';

import footerLightLogo from '../../assets/img/logo/white-logo.png';

const HomeEight = () => {
    return (
        <React.Fragment>
            <Header 
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-8'
            />
            <HomeEightMain/>
            <Footer
                footerClass="rs-footer style2"
                footerLogo={footerLightLogo}
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeEight;