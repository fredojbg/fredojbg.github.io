import React from 'react';
import HeaderStyleSeven from '../../components/Layout/Header/HeaderStyleSeven';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer';
import HomeTenMain from './HomeTenMain';

const HomeTen = () => {
    return (
        <React.Fragment>
            <HeaderStyleSeven
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-10'
            />
            <HomeTenMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTen;