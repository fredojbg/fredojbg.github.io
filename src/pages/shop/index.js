import React from 'react';
import ShopMain from './ShopMain';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

const Shop = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='shop'
                activeMenu='/shop'
            />
            <div>
                <SiteBreadcrumb
                    pageTitle="Shop"
                    titleClass="page-title"
                    pageName="Products"
                    breadcrumbsImg={bannerbg}
                />

                {/* Blog Main */}
                <ShopMain />
                {/* Blog Main End */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}


export default Shop;

