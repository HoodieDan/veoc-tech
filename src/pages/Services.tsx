import React from 'react';
import projectWatersmith from '../assets/images/project-watersmith.png';
import projectPromptGuardian from '../assets/images/project-prompt-guardian.png';
import projectGlobalink from '../assets/images/project-globalink.png';
import projectTheVault from '../assets/images/project-the vault.png';
import projectIdk from '../assets/images/project-idk.png';
import projectIdkk from '../assets/images/project-idkk.png';
import solution from '../assets/images/solution.png';
import client from '../assets/images/client.png';
import coding from '../assets/images/coding.svg';
import awareness from '../assets/images/awareness.svg';
import palette from '../assets/images/palette.svg';

const Services: React.FC = () => {
    return (
        <div className='services__page'>
            <section className="hero__section">
                <div className="container d-flex flex-column justify-content-center align-items-center p-5 text-center">
                    <h1>
                        The go to Agency for High converting websites and <span className="purple">great visuals to beat your competitors</span>
                    </h1>

                    <p className='mt-3'>
                        We’ll design a website for your startup that you’ll be proud to share and get customers
                        excited about what you’re building- without the hassle of a traditional agency.
                    </p>

                    <button className="book__call mt-5">Book a call</button>
                </div>
            </section>

            <section className="scattered__images desktop">
                <div className="row flex-nowrap justify-content-center align-items-center">
                    <img src={projectGlobalink} alt="globalink project image" className="col-4 m-0 p-0" />
                    <img src={projectWatersmith} alt="watersmith project image" className="col-4 m-0 p-0" />
                    <img src={projectIdk} alt="project image" className="col-4 m-0 p-0" />
                </div>
                <div className="row flex-nowrap justify-content-center">
                    <img src={projectTheVault} alt="the vault project image" className="col-4 m-0 p-0" />
                    <img src={projectPromptGuardian} alt="prompt guardian project image" className="col-4 m-0 p-0" />
                    <img src={projectIdkk} alt="project image" className="col-4 m-0 p-0" />
                </div>
            </section>

            <section className="the__problem py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                    <div className="pill mb-2 py-2 px-3">
                        <small>The Problem</small>
                    </div>
                    <h3 className="text-center mb-5">
                        Website Design and Redesign that’ll give you a competitive edge while clearing any and all doubts about if your company is the right choice 
                    </h3>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-lg-5 mt-3 p-5 d-flex flex-column align-items-center">
                            <img src={coding} alt="coding" className='mb-2 img-fluid' />
                            <h6>
                                You’ve heard that good
                                design is extremely expensive 
                                and time-consuming
                            </h6>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-5 mt-3 p-5 d-flex flex-column align-items-center">
                            <img src={palette} alt="palette" className='mb-2 img-fluid' />
                            <h6>
                                Your current team or partner
                                is not  specialized enough for
                                the kind of quality you need
                            </h6>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-5 mt-3 p-5 d-flex flex-column align-items-center">
                            <img src={awareness} alt="brand awareness image" className='mb-2 img-fluid' />
                            <h6>
                                You don’t want to lose 
                                your branding and 
                                recognition despite 
                                wanting a better 
                                representation on 
                                your site
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our__solution py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                    <div className="pill mb-2 py-2 px-3">
                        <small>Our Solution</small>
                    </div>
                    <h3 className="text-center">
                        We help start-ups and established companies bring a fresh and unmatched perspective to their websites  
                    </h3>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 mt-3 p-5">
                            <h3 className="mb-2">1. Visual Alignment</h3>
                            <p>
                                We’ll go through a simple moodboarding process together and then 
                                you’ll see your first concept board that shows an updated look and
                                feel through sample websites sections, typography, colors, and
                                imagery. This allows us to align on everything before we go too far
                                along, making sure we can iterate as we go. No big, drawn out
                                reveals.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 p-5 desktop">
                            <img src={solution} alt="solution" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 mt-3 p-5">
                            <h3 className="mb-2">2. Homepage Design</h3>
                            <p>
                                Next, we will move into designing your new homepage. This is where we design all the sections that make up your homepage to match the look and feel from our approved concept board. You’ll end this step with a high fidelity Figma file ready for development.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 mt-3 p-5">
                            <h3 className="mb-2">3. Additional Pages Design & Development</h3>
                            <p>
                                Once we’ve designed your homepage and seen how we can work together, we can continue with the designs for the rest of your site and then move into development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing py-5">
                <div className="container py-5">
                    <div className="d-flex flex-column justify-content-center align-items-center ">  
                        <div className="pill mb-2 py-2 px-3">
                            <small>Pricing</small>
                        </div>
                        <h3 className="text-center mb-3">
                            We have created a flexible plan for companies seeking a first time design or redesign   
                        </h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 mt-3 p-5">
                            <div className="price__card p-lg-5 p-md-5 p-3">
                                <div className="pill px-3 py-1">
                                    <small>Branding + Web Design</small>
                                </div>
                                <h4 className='mt-4'>Landing Page or Mini Site (1-4 pages)</h4>
                                <p className="mt-3">For startups that want to quickly explore a new
                                visual direction on their website.</p>
                                <p className="mt-3">A completely new homepage design.</p>
                                <p className="mt-3">Updated typography, colors and layout.</p>
                                <p className="mt-3">Up to 3 iterative concept directions.</p>
                                <p className="mt-3">3-4 supplemental marketing illustrations.</p>
                                <p className="mt-3">Figma file deliverable, ready for dev.</p>
                                <p className="mt-3">Webflow dev add on available (+$2,000)</p>
                                {/* <h5 className="mt-3">$2,995, 2+ weeks</h5> */}
                                <button className="outline mt-3">Book a discovery call</button>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mt-3 p-5">
                            <div className="price__card p-lg-5 p-md-5 p-3 h-100 d-flex flex-column justify-content-between align-items-start">
                                <div className="pill px-3 py-1">
                                    <small>Branding + Web Design</small>
                                </div>
                                <div>
                                    <h4 className='mt-4'>E-com or Enterprise Site (5-15 pages)</h4>
                                    <p className="mt-3">For early stage teams that need a brand refresh, a few essential page designs, and web style guide.</p>
                                    <p className="mt-3">6 essential page designs</p>
                                    <p className="mt-3">Reusable block-based sections</p>
                                    <p className="mt-3">Web style guide</p>
                                    <p className="mt-3">Figma file deliverable, ready for dev</p>
                                    <p className="mt-3">Webflow dev add on available (+$5,000)</p>
                                    {/* <h5 className="mt-3">$6,995, 3+ weeks</h5> */}
                                </div>
                                <button className="outline mt-3">Book a discovery call</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                    <div className="d-flex flex-column justify-content-center align-items-center mb-5">  
                        <div className="pill mb-2 py-2 px-3">
                            <small>Review</small>
                        </div>
                        <h3 className="text-center mb-3">
                            What our clients feel working with us 
                        </h3>
                    </div>
                    <div className="testimonial d-flex flex-column justify-content-center align-items-center mb-5">
                        <h4 className="mb-3 text-center">
                            “It’s always a hit or miss when you work with
                            freelancers or agencies and this was definitely a hit. Their
                            accountability is extremely high."
                        </h4>

                        <div className="client d-flex">
                            <div className="client__image me-3">
                                <img src={client} alt="client image" />
                            </div>
                            <div className="d-flex flex-column justify-content-around">
                                <h6>Bernard Barouch</h6>
                                <small>Founder, Chronotype</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial d-flex flex-column justify-content-center align-items-center mb-5">
                        <h4 className="mb-3 text-center">
                            “Veoc Tech was an absolute blast to work with. Everything was on time, in budget and expertly done. Couldn’t be happier.”
                        </h4>

                        <div className="client d-flex">
                            <div className="client__image me-3">
                                <img src={client} alt="client image" />
                            </div>
                            <div className="d-flex flex-column justify-content-around">
                                <h6>Logan Evans</h6>
                                <small>Founder, CEO, Sugar Security</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial d-flex flex-column justify-content-center align-items-center mb-5">
                        <h4 className="mb-3 text-center">
                            “Working with Veoc Tech is a no-brainer if you’re an early stage start-up in need a of a clean, nice design.”
                        </h4>

                        <div className="client d-flex">
                            <div className="client__image me-3">
                                <img src={client} alt="client image" />
                            </div>
                            <div className="d-flex flex-column justify-content-around">
                                <h6>Mikko Seppa</h6>
                                <small>Founder, Head Q</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;