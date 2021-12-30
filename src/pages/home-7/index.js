import React from 'react';
import HeaderStyleSix from '../../components/Layout/Header/HeaderStyleSix';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer';
import HomeSevenMain from './HomeSevenMain';

const HomeSeven = () => {
    return (
        <React.Fragment>
            <HeaderStyleSix
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-7'
            />
            <HomeSevenMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeSeven;