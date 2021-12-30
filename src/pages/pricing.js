import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SearchModal from '../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import ScrollToTop from '../components/Common/ScrollTop';
import PricingMain from '../components/Pricing';

// Breadcrumbs Background Image
import bannerbg from '../assets/img/breadcrumbs/2.jpg';

const Pricing = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='pages'
                activeMenu='/pricing'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Pricing"
                    titleClass="page-title"
                    pageName="Pricing"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* Price Main */}
                <PricingMain />
                {/* Price Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default Pricing;