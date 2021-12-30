import React from 'react';
import Footer from '../../components/Layout/Footer';
import HomeElevenOnepageMain from './HomeElevenOnepageMain';
import SearchModal from '../../components/Layout/Header/SearchModal';
import OnepageHeaderStyleTwo from '../../components/Layout/Header/OnepageHeaderTwo';

import footerWhiteLogo from '../../assets/img/logo/white-logo.png';

const HomeElevenOnePage = () => {
    return (
        <React.Fragment>
            <div className="black-bg">
                <OnepageHeaderStyleTwo />
                <HomeElevenOnepageMain />
                <Footer
                    footerLogo={footerWhiteLogo}
                    footerClass="rs-footer style2 modify1 black-dark"
                />
                <SearchModal />
            </div>
        </React.Fragment>
    );
}

export default HomeElevenOnePage;
