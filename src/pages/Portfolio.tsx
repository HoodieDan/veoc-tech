import React from 'react';
import projectWatersmith from '../assets/images/project-watersmith.png';
import projectPromptGuardian from '../assets/images/project-prompt-guardian.png';
import projectGlobalink from '../assets/images/project-globalink.png';
import projectTheVault from '../assets/images/mystery-box.png';
import projectLease from '../assets/images/project-lease.png';
import projectIdkk from '../assets/images/tobyteq.png';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <section className="hero">
                <div className="container d-flex flex-column justify-content-center align-items-center p-5 text-lg-center text-md-center">
                    <h1>
                        A design agency that prioritizes depth 
                        over scale, creativity over trends and
                        results over everything.
                    </h1>

                    <p className='mt-3'>
                        We are a design agency built on depth, creativity and impact. From strategy to execution,
                        every project is crafted with precision, backed by a global network of exceptional talent.
                    </p>

                    <button className="book__call mt-5">Book a call</button>

                    <p className="big mt-5">
                        Exceptional work doesn’t happen by accident. It is born from sharp strategy, deep expertise, and the relentless 
                        pursue of excellence. Over the past 2 years, we’ve worked with several globally recognized brands across 
                        every scale and industry, delivering results that resonates.
                        <br />
                        <br />
                        At the core, we’re a small team with great ambitions, strengthened by a carefully curated pool of freelancers,
                        handpicked from the best talents in the world. Many of these experts have shaped industry-leading strategies
                        as directors in top companies, bringing unmatched expertise to every project. Together, we create  solutions
                        that are as bold as the brands we work with.
                    </p>

                    <h4 className="mt-5">
                        Olayinka D. Adeyefa
                    </h4>
                    <p className="bigger mb-3">Co-Founder, CEO, Veoc Tech</p>
                </div>
            </section>

            <section className="explore py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <small className="mt-5">A collection of what we've crafted</small>
                    <h2 className="mt-2">Explore Our Projects</h2>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>WaterSmith</h3>
                                <p className="mb-2">A website for chartered accounting professionals in Canada to help clients file taxes, financial and audit advisory, and other accounting services.</p>
                                <p className="mb-2">A website for chartered accounting professionals in Canada to help clients file taxes, financial and audit advisory, and other accounting services.</p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Website</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>Accounting</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectWatersmith} alt="watersmith project" className='img-fluid' />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>G.Link</h3>
                                <p className="mb-2">A product for people to connect with warehouses for container shipping and storage of goods.</p>
                                <p className="mb-2">A product for people to connect with warehouses for container shipping and storage of goods.</p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Website</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>Logistics</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectGlobalink} alt="global link project" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>Lease</h3>
                                <p className="mb-2">is a mobile app designed with user experience suggestions designed to solve some UX problems Airbnb users were facing.</p>
                                <p className="mb-2">is a mobile app designed with user experience suggestions designed to solve some UX problems Airbnb users were facing. </p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Mobile App</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>Hospitality</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectLease} alt="lease project image" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>PromptGuardian</h3>
                                <p className="mb-2">A software as a service product designed to help software engineers easily detect vulnerabilities
                                in their code.</p>
                                <p className="mb-2">A software as a service product designed to help software engineers easily detect vulnerabilities
                                in their code.</p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Website</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>SaaS</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectPromptGuardian} alt="prompt guardian project" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>Mystery Box</h3>
                                <p className="mb-2">A curated luxury warehouse box featuring luxury brands like Amiri, Off-White and others. Users can
                                shop and make inquiries on brands of their choice.</p>
                                <p className="mb-2">A curated luxury warehouse box featuring luxury brands like Amiri, Off-White and others. Users can
                                shop and make inquiries on brands of their choice.</p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Website</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>E-commerce</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectTheVault} alt="the vault project" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                            <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                <h3 className='mb-3'>TobyTeq</h3>
                                <p className="mb-2">A portfolio website designed for an Upwork top-rated freelance video editor to showcase his skill set and some testimonials from clients.</p>
                                <p className="mb-2">A portfolio website designed for an Upwork top-rated freelance video editor to showcase his skill set and some testimonials from clients.</p>
                                <div className="d-flex mt-4">
                                    <div className="pill px-3 py-2 me-2">
                                        <small>Website</small>
                                    </div>
                                    <div className="pill px-3 py-2">
                                        <small>Portfolio</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                            <div className="project__image">
                                <img src={projectIdkk} alt="tobyteq project" className='img-fluid' />
                            </div>
                        </div>
                    </div>  

                    <button className="my-5">View more projects</button>                  
                    
                </div>
            </section>
        </div>
    );
};

export default Portfolio;