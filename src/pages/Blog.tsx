import React from 'react';
import BlogPreview1 from '../assets/images/pngs/blog-preview-1.png';
import BlogPreview from '../components/BlogPreview';

const Blog: React.FC = () => {

    const previews = [
        {
            sectionName: 'RECENT POSTS',
            tags: ['Feedback', 'Contact'],
            posts: [
                {
                    id: 1,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 2,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 3,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
            ]
        },
        {
            sectionName: 'FEATURED BLOGS',
            tags: ['Feedback', 'Contact'],
            posts: [
                {
                    id: 1,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 2,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 3,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
                {
                    id: 4,
                    image: BlogPreview1,
                    title: '18 Uservoice alternatives and competitors for managing user feeback',
                    previewText: 'Discover the top 14 feature voting tools for SaaScompanies. Learn how to prioritize productdevelopment and boost customer satisfaction.',
                    category: 'Customer Feedback',
                    date: 'March 8, 2024',
                },
            ]
        },
    ]

    return (
        <div className='blog__page'>
            <section className='search'>
                <div className="container p-lg-5 text-center">
                    <h1>We do not deliver results only, we also write about what we do </h1>
                    <div className="d-flex search__bar align-items-center mt-3">
                        <input type="text" placeholder='Search by name or category e.g AI' />
                        <button><small>Search</small></button>
                    </div>
                </div>
            </section>

            <section className="py-5 blog__previews">
                <div className="container">
                    {
                        previews.map((preview) => (
                            <>
                                <div className="header d-flex justify-content-between align-items-center flex-wrap mb-3 mt-5">
                                    <h5 className='me-3 py-3'>{preview.sectionName}</h5>
                                    <div className="d-flex flex-wrap py-lg-0 py-md-0 py-3">
                                        {
                                            preview.tags.map((tag) => (
                                                <div className="pill">{tag}</div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        preview.posts.map((post, index) => (
                                            <BlogPreview post={post} index={index} />
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Blog;