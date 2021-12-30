import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';
import CartMain from '../../components/Shop/CartMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

const Cart = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='shop'
                activeMenu='/cart'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Cart"
                    titleClass="page-title"
                    pageName="Cart"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* Cart Main */}
                <CartMain />
                {/* Cart Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default Cart;