
import { Link } from 'react-router-dom';

const SinglePost = ( props ) => {
    const {blogClass, blogImage, blogTitle, blogDesc, blogCategory, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item mb-44'}>
            <div className="image-wrap">
                <Link to="/blog/blog-details">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
                <ul className="post-categories">
                    <li>
                        <Link to="#">
                            {blogCategory ? blogCategory : 'Application Testing'}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : ' January 21, 2021'}</li>
                    <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                </ul>
                <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <p className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}</p>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link to="/blog/blog-details">
                        {blogButtonText ? blogButtonText : 'Continue Reading'}
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePost