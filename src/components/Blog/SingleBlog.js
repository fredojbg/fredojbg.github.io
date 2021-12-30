import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ post }) => {
    return (
        <div className="blog-item">
            <div className="image-wrap">
                <Link to="/blog/blog-details">
                    <img src={'/' + post.image} alt="blog image" />
                </Link>
                <ul className="post-categories">
                    <li>
                        <Link to="#">
                            {post.category}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {post.date}</li>
                    <li className="admin"><i className="fa fa-user-o"></i> {post.author}</li>
                </ul>
                <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                        {post.title}
                    </Link>
                </h3>
                <p className="desc">{post.text}</p>
                <div className="blog-button">
                    <Link to="/blog/blog-details">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SingleBlog