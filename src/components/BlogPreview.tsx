import React from 'react';
import { NavLink } from 'react-router-dom';
import blogImage from '../assets/images/pngs/blog-image.png';

interface BlogPreviewProps {
    post: {
        id: string;
        image: string;
        title: string;
        previewText: string;
        category: string;
        date: string;
    },
    index: number,
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ post, index }) => {

    const isFullWidth = () => {
        return ((index + 1) % 4 === 0);
    }

    console.log(post)

    return (
        isFullWidth() ? (
            <>
                <NavLink className="blog__preview py-3 row d-none d-lg-flex" to={`/blog/${post.id}`}>
                    <img src={post.image} alt="blog preview image" className='img-fluid col-lg-7' />
                    <div className="col-lg-5">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="pill purple__pill mt-2 me-4">{post.category}</div>
                            <p className='mt-2'>{post.date}</p>
                        </div>
                        <h5 className='mt-3'>{post.title}</h5>
                        <p className='grey mt-3'>{post.previewText}</p>
                    </div>
                </NavLink>
                <NavLink className="blog__preview col-lg-4 col-md-6 py-3 d-lg-none" to={`/blog/${post.id}`}>
                    <img src={post.image} alt="blog preview image" className='img-fluid' />
                    <h5 className='mt-2'>{post.title}</h5>
                    <p className='grey mt-2'>{post.previewText}</p>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="pill purple__pill mt-2 me-4">{post.category}</div>
                        <p className='mt-2'>{post.date}</p>
                    </div>
                </NavLink>
            </>
        ) : (
            <NavLink className="blog__preview col-lg-4 col-md-6 py-3" to={`/blog/${post.id}`} >
                <img src={post.image ? post.image : blogImage} alt="blog preview image" className='img-fluid' />
                <h5 className='mt-2'>{post.title}</h5>
                <p className='grey mt-2'>{post.previewText}</p>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="pill purple__pill mt-2 me-4">{post.category}</div>
                    <p className='mt-2'>{post.date}</p>
                </div>
            </NavLink>
        )
    );
};

export default BlogPreview;