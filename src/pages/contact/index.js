import React, { Component } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ContactMain from './ContactMain';


const Contact = () => {
    return (
        <React.Fragment>
            {/* Header */}
            <Header
                parentMenu='contact'
                activeMenu="/contact"
            />
            {/* Header */}

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}

            {/* Footer */}
            <Footer />
            {/* Footer */}

            {/* SearchModal */}
            <SearchModal />
            {/* SearchModal */}
        </React.Fragment>

    );
}


export default Contact;