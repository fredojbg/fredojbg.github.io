import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SinglePost from './SinglePost';

import blogImg1 from '../../assets/img/blog/1.jpg';
import blogImg2 from '../../assets/img/blog/2.jpg';
import blogImg3 from '../../assets/img/blog/3.jpg';
import blogImg4 from '../../assets/img/blog/4.jpg';

const BlogPart = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                stagePadding: 0,

            },
            992: {
                items: 2,
                stagePadding: 0,

            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <React.Fragment>
            <OwlCarousel options={options} >
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg1}
                    blogCategory= 'Web Development'
                    blogTitle = 'Tech Products That Makes Its Easier to Stay at Home'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogAuthor = 'admin'
                    blogButtonText = 'Learn More'
                    blogPublishedDate = '20 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg2}
                    blogCategory= 'IT Services'
                    blogTitle = 'Open Source Job Report Show More Openings Fewer'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogAuthor = 'admin'
                    blogButtonText = 'Learn More'
                    blogPublishedDate = '22 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg3}
                    blogCategory= 'Artificial Intelligence'
                    blogTitle = 'Types of Social Proof What its Makes Them Effective'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogAuthor = 'admin'
                    blogButtonText = 'Learn More'
                    blogPublishedDate = '26 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg4}
                    blogCategory= 'Digital Technology'
                    blogTitle = 'Tech Firms Support Huawei Restriction, Balk at Cost'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogAuthor = 'admin'
                    blogButtonText = 'Learn More'
                    blogPublishedDate = '28 December 2020'
                />
            </OwlCarousel>
        </React.Fragment>
    );

}

export default BlogPart;