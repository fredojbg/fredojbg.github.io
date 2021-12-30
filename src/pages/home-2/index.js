import React from 'react';
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleTwo';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTwoMain from './HomeTwoMain';
import Footer from '../../components/Layout/Footer';

const HomeTwo = () => {
    return (
        <React.Fragment>
            <HeaderStyleTwo
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu="/home-2"
            />
            <HomeTwoMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwo;

