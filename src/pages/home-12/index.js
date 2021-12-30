import React from 'react';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleEight from '../../components/Layout/Header/HeaderStyleEight';
import Footer from '../../components/Layout/Footer';
import HomeTwelveMain from './HomeTwelveMain';


const HomeTwelve = () => {
    return (
        <React.Fragment>
            <HeaderStyleEight
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-12'
            />
            <HomeTwelveMain />
            <Footer
                footerClass="rs-footer style1"
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwelve;