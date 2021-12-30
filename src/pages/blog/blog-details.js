import React from 'react';
import Header from '../../components/Layout/Header';
import BlogDetailsMain from '../../components/BlogDetails';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/4.jpg';

const BlogDetails = () => {
    return (
        <React.Fragment>

            <Header
                parentMenu='blog'
                activeMenu='/blog-details'
            />

            <SiteBreadcrumb
                pageTitle="Servo Project Joins The Linux Foundation Fold Desco"
                titleClass="page-title new-title pb-10"
                pageCategory="It Services"
                pageName="Servo Project Joins The Linux Foundation Fold Desco"
                breadcrumbsImg={bannerbg}
            />

            {/* Blog Main */}
            <BlogDetailsMain />
            {/* Blog Main End */}

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer />

            <SearchModal />
        </React.Fragment>
    );
}


export default BlogDetails;

