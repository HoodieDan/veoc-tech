import React from 'react';
import blogImage from '../assets/images/pngs/blog-image.png';

const BlogWriteup: React.FC = () => {
    return (
        <div className='blog__writeup'>
            <section className='hero'>
                <div className="container py-5">
                    <div className="d-flex flex-wrap gap-3">
                        <div className="pill px-5 py-3">
                            <p className="">UI/UX Design</p>
                        </div>
                        <div className="pill px-5 py-3">
                            <p className="">UI/UX Design</p>
                        </div>
                    </div>

                    <h1 className="my-3 w-100">
                        The Power of Design: How a Great UX/UI Transforms Businesses
                    </h1>

                    <div className="d-flex gap-3">
                        <p><span className="text-gray">Written By:</span> Jumai Idowu</p>
                        <p><span className="text-gray">Updated On:</span> December 13, 2023</p>
                    </div>

                    <img src={blogImage} alt="blog image" className="img-fluid my-4" />

                    <div className="writeup row">
                        <div className="col-lg-4 col-md-4 mb-4 text-gray">
                            <p className='mb-2'>CONTENT</p>
                            <p className="mb-1">1. INTRODUCTION</p>
                        </div>

                        <div className="col-lg-8 col-md-8">
                            <h6 className='mb-2'>Introduction</h6>
                            <p>In today's digital-first world, businesses rely on compelling design to stand out. Whether it's a website, mobile app, or enterprise software, user experience (UX) and user interface (UI) design are crucial for success. A well-crafted design can increase engagement, improve conversion rates, and build brand trust. But what exactly makes great design so powerful?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogWriteup;