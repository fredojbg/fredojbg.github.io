import React from 'react';
import HeaderStyleThree from '../../components/Layout/Header/HeaderStyleThree';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer';
import HomeThreeMain from './HomeThreeMain';

const HomeThree = () => {
    return (
        <React.Fragment>
            <HeaderStyleThree
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-3'
            />
            <HomeThreeMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeThree;