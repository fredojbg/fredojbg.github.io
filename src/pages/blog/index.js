import React from 'react';
import Header from '../../components/Layout/Header';
import BlogMain from '../../components/Blog';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import Footer from '../../components/Layout/Footer';
import ScrollToTop from '../../components/Common/ScrollTop';
import SearchModal from '../../components/Layout/Header/SearchModal';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/4.jpg';

const Blog = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='blog'
                activeMenu='/blog'
            />
            <div>
                <SiteBreadcrumb
                    pageTitle="Blog"
                    titleClass="page-title"
                    pageName="Blog"
                    breadcrumbsImg={bannerbg}
                />

                {/* Blog Main */}
                <BlogMain />
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


export default Blog;

