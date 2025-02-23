import React from 'react';
import aboutHeroImg from '../assets/images/aboutHeroImg.png';
import storyImg from '../assets/images/storyImg.png';
import me from '../assets/images/me.jpg';
import projectGlobalink from '../assets/images/project-globalink.png';
import projectWatersmith from '../assets/images/project-watersmith.png';
import projectPromptGuardian from '../assets/images/project-prompt-guardian.png';
import projectTheVault from '../assets/images/mystery-box.png';
import projectLease from '../assets/images/project-lease.png';
import projectTobyTeq from '../assets/images/tobyteq.png';
import { useGsapAnimations } from '../hooks/useGsapAnimation';

const About: React.FC = () => {

    useGsapAnimations();
    
    return (
        <div className='about__page'>
            <section className="hero">
                <div className="container d-flex flex-column justify-content-center align-items-center py-5 text-center">
                    <h1 className='reveal__text'>
                        About Veoc Tech
                    </h1>

                    <p className='mt-3 fade__text'>
                        We are a design agency built on depth, creativity and impact. From strategy to execution, every project is crafted with precision, backed by a global network of exceptional talent. We are a group of passionate experts that prioritize creativity and results above all else.
                    </p>

                    <img src={aboutHeroImg} alt="hero image" className='mt-4 img-fluid' />

                    <button className="book__call mt-5">Book a call</button>
                </div>
            </section>

            <section className="our__story py-5">
                <div className="container">
                    <div className="glass p-lg-5 p-3">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 d-flex flex-column justify-content-between">
                                <h2 className='mb-3 reveal__text'>Our Story</h2>
                                <p className='mb-3 fade__text'>
                                    Exceptional work doesn’t happen by accident. It is born from sharp strategy, deep expertise, and the relentless  pursue of excellence. Over the past 2 years, we’ve worked with several globally recognized brands across  every scale and industry, delivering results that resonates.
                                </p>
                                <p className='mb-3 fade__text'>
                                    At the core, we’re a small team with great ambitions, strengthened by a carefully curated pool of freelancers, handpicked from the best talents in the world. Many of these experts have shaped industry-leading strategies as directors in top companies, bringing unmatched expertise to every project. Together, we create  solutions that are as bold as the brands we work with.
                                </p>
                                <div className='my-lg-2 my-md-2 my-3'>
                                    <h5 className='fade__text'>Olayinka D. Adeyefa</h5>
                                    <p className='fade__text'>Co-founder, CEO, Veoc Tech</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <img src={storyImg} alt="story image" className='img-fluid inset__reveal__image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="staff py-5">
                <div className="container text-center">
                    <h2 className='mb-3 px-lg-5 pt-5 reveal__text'>
                        We bring a wealth of skills and experience from a wide range of backgrounds.
                    </h2>
                    <p className="mb-3 fade__text">
                        Our philosophy is simple; hire great people, give them the resources and support to do their best work.
                    </p>
                    <div className="d-flex justify-content-center buttons">
                        <button className='me-1'>Book a Call</button>
                        <button className='outline'>Get in Touch</button>
                    </div>
                </div>

                <div className="marquee mt-5">
                    <ul>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul aria-hidden="true">
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee__content">
                                <img src={me} alt="story image" className='img-fluid' />
                                <div className="name__and__position p-2">
                                    <p>John Doe</p>
                                    <small>Co-founder, CEO, Veoc Tech</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            
            <section className="explore py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <small className="mt-5 fade__text">A collection of what we've crafted</small>
                    <h3 className="mt-2 reveal__text">Explore Our Projects</h3>

                    <div className="all__projects__div py-5">
                        <div className="d-flex align-items-center all__projects">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                                    <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                        <h4 className='mb-3 reveal__text'>WaterSmith</h4>
                                        <p className="mb-2 fade__text">A website for chartered accounting professionals in Canada to help clients file taxes, financial and audit advisory, and other accounting services.</p>
                                        <p className="mb-2 fade__text">A website for chartered accounting professionals in Canada to help clients file taxes, financial and audit advisory, and other accounting services.</p>
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
                                        <h4 className='mb-3 reveal__text'>G.Link</h4>
                                        <p className="mb-2 fade__text">A product for people to connect with warehouses for container shipping and storage of goods.</p>
                                        <p className="mb-2 fade__text">A product for people to connect with warehouses for container shipping and storage of goods.</p>
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
                                        <h4 className='mb-3 reveal__text'>Lease</h4>
                                        <p className="mb-2 fade__text">is a mobile app designed with user experience suggestions designed to solve some UX problems Airbnb users were facing.</p>
                                        <p className="mb-2 fade__text">is a mobile app designed with user experience suggestions designed to solve some UX problems Airbnb users were facing. </p>
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
                                        <h4 className='mb-3 reveal__text'>PromptGuardian</h4>
                                        <p className="mb-2 fade__text">A software as a service product designed to help software engineers easily detect vulnerabilities
                                        in thei fade__textr code.</p>
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
                                        <h4 className='mb-3 reveal__text'>Mystery Box</h4>
                                        <p className="mb-2 fade__text">A curated luxury warehouse box featuring luxury brands like Amiri, Off-White and others. Users can
                                        shop and make inqu fade__textiries on brands of their choice.</p>
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
                                        <h4 className='mb-3 reveal__text'>TobyTeq</h4>
                                        <p className="mb-2 fade__text">A portfolio website designed for an Upwork top-rated freelance video editor to showcase his skill set and some testimonials from clients.</p>
                                        <p className="mb-2 fade__text">A portfolio website designed for an Upwork top-rated freelance video editor to showcase his skill set and some testimonials from clients.</p>
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
                                        <img src={projectTobyTeq} alt="tobyteq project" className='img-fluid' />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="d-flex justify-content-start w-100">
                        <button className="my-5">View more projects</button>
                    </div>

                    <div className="contact__info w-100">
                        <h5 className='mb-3 reveal__text'>Reach out to us today</h5>
                        <p className="mb-3 fade__text">Whether you need support or want to learn more, we are here to assist you</p>

                        <div className="row pt-3">
                            <div className="col-lg-4 col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                    <div className="d-flex flex-column justify-content-between align-items-start ms-3">
                                        <h6 className='mb-2 fade__up__text'>Email</h6>
                                        <a href="mailto:veoctech@gmail.com">veoctech@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                    <div className="d-flex flex-column justify-content-between align-items-start ms-3">
                                        <h6 className='mb-2 fade__up__text'>Email</h6>
                                        <a href="mailto:veoctech@gmail.com">veoctech@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                    <div className="d-flex flex-column justify-content-between align-items-start ms-3">
                                        <h6 className='mb-2 fade__up__text'>Email</h6>
                                        <a href="mailto:veoctech@gmail.com">veoctech@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                    
                </div>
            </section>
        </div>
    );
};

export default About;