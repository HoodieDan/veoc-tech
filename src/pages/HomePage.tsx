import React, { useState } from 'react';
import heroImg from '../assets/images/hero-img.png';
import projectWatersmith from '../assets/images/project-watersmith.png';
import projectPromptGuardian from '../assets/images/project-prompt-guardian.png';
import projectGlobalink from '../assets/images/project-globalink.png';
import check from '../assets/images/check.svg';
import star from '../assets/images/star.svg';
import stopwatch from '../assets/images/stopwatch.svg';
import partner1 from '../assets/images/partner-1.png';
import partner2 from '../assets/images/partner-2.png';
import partner3 from '../assets/images/partner-3.png';
import partner4 from '../assets/images/partner-4.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const HomePage: React.FC = () => {
        const [faqIsOpen, setFaqIsOpen] = useState<number | null>(null);
        const faqs = [
            {
                question: 'How do I get started?',
                answer: 'Yeah'
            },
            {
                question: 'How does it work?',
                answer: 'Yeah'
            },
            {
                question: 'What if I dont like the design?',
                answer: 'Yes'
            },
            {
                question: 'I already have a Figma project. Can you develop it?',
                answer: 'Yessir'
            },
            {
                question: 'Can you do mobile apps?',
                answer: 'Yep'
            },
            {
                question: 'How about deliverables?',
                answer: 'Yep'
            },
            {
                question: 'Do you offer refunds?',
                answer: 'No'
            },
        ]

        const toggleDropdown = (index: number) => {
            if (faqIsOpen === index) {
                setFaqIsOpen(null);
            } else {
                setFaqIsOpen(index);
            }
        };
        return (
        <div className='home__page'>
            <section className="hero__section">
                <div className="container d-flex flex-column justify-content-center align-items-center p-5 text-center">
                    <h1>
                        We Help Companies 
                        <br />
                        Leverage Design to Win the
                        <br />
                        Customer Acquisition Game 
                    </h1>

                    <p className='mt-3'>
                        Through a powerful blend of creativity and precision, we ensure that every interaction resonates with your audience and strengthens your online presence.
                    </p>

                    <img src={heroImg} alt="hero image" className='mt-4 img-fluid desktop' />

                    <button className="book__call mt-5">Book a call</button>
                </div>
            </section>

            <section className="our__works py-5">
                <div className="container pt-5 pb-4">
                    <h2>Our Works</h2>
                </div>
                <div className="project__images__div">
                    <div className="project__images d-flex align-items-center">
                        <img src={projectWatersmith} alt="watersmith project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectPromptGuardian} alt="prompt guardian project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectGlobalink} alt="globalink project image" className="me-4" style={{ display: 'inline-block' }} />
                    </div>
                </div>
                <div className="container py-5">
                    <h2>Building Websites & Products that combine <span className="purple">aesthetics</span>, <span className="purple">functionality</span> to deliver great <span className="purple">results</span></h2>

                    <div className="stats d-flex flex-wrap">
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>40+</h1>
                            <p>Finalized Projects</p>
                        </div>
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>96%</h1>
                            <p>Conversion Rate Improvement</p>
                        </div>
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>6+</h1>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why__work">
                <div className="container py-5">
                    <h2>Why work with us</h2>

                    <div className="row justify-content-center cards">
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={check} alt="check" className='mb-3' />
                                <h4 className="mb-3">Expertise</h4>
                                <p>
                                    With us, you can experience veterans with over half a decade of design and development experience  capable of delivering the most complex and visually stunning projects across multiple industries.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={star} alt="star" className='mb-3' />
                                <h4 className="mb-3">Communication</h4>
                                <p>
                                    We have a commitment to swift and regular communication, keeping our stakeholders in the loop  with progress and following up on the responses and feedbacks to ensure your maximum satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={stopwatch} alt="stopwatch" className='mb-3' />
                                <h4 className="mb-3">Accelerated Speed</h4>
                                <p>
                                    From the discovery call to a quick action plan within 24 hours, we get to work right away, ensuring your project is delivered on time and with precision. We also ensure our workflow aligns with your schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row features py-3">
                        <div className="col-lg-4 col-md-6 mt-lg-3 mt-5">
                            <h3>User Interface</h3>
                            <h3 className="mt-2">User Experience</h3>
                            <h3 className="mt-2">Responsive Design</h3>
                            <h3 className="mt-2">Custom Code</h3>
                            <h3 className="mt-2">Component Libraries</h3>
                            <h3 className="mt-2">Desktop & Mobile Apps</h3>
                            <h3 className="mt-2">Website Migration</h3>
                            <h3 className="mt-2">Figma to Framer</h3>
                        </div>
                        <div className="col-lg-4 col-0 desktop"></div>
                        <div className="col-lg-4 col-md-6 mt-lg-3 mt-5 ps-lg-4">
                            <div className="fields p-lg-3 p-5">
                                <h3 className='mb-2'>Fields</h3>

                                <p className="mt-2">AI</p>
                                <p className="mt-2">Saas</p>
                                <p className="mt-2">Fintech</p>
                                <p className="mt-2">E-commerce</p>
                                <p className="mt-2">Esports</p>
                                <p className="mt-2">Automotive</p>
                                <p className="mt-2">Fashion</p>
                                <p className="mt-2">Real Estate</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="partners">
                <div className="container py-5">
                    <h2>Our Partners</h2>

                    <div className="row justify-content-center cards">
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner1} alt="partner image" className='mb-4' />
                                <h4 className="mb-2">John Jones</h4>
                                <p>CEO, Mirage</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner2} alt="partner image" className='mb-4' />
                                <h4 className="mb-2">Kane Schliff</h4>
                                <p>CTO, Novelle</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner3} alt="partner image" className='mb-4' />
                                <h4 className="mb-2">Timi Jay</h4>
                                <p>Co-Founder, Nil</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner4} alt="partner image" className='mb-4' />
                                <h4 className="mb-2">Nicolas Midi</h4>
                                <p>Co-Founder, Velocity One</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                        <button className="mt-3">Become a partner</button>
                    </div>
                </div>
            </section>

            <section className="faqs">
                <div className="container py-5">
                    <h2>FAQs</h2>
                    <p className='mb-3'>Some frequently asked questions and answers</p>

                    <div className="questions d-flex justify-content-center align-items-center flex-column">
                        {faqs.map((faq, index) => (
                            <div 
                                className="question row mt-2 w-100" 
                                key={index} 
                                onClick={() => toggleDropdown(index)}
                            >
                                <div className="col-11">
                                    <h6>{faq.question}</h6>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center arrow">
                                    {
                                        faqIsOpen === index ? (
                                            <RemoveIcon />
                                        ) : (
                                            <AddIcon />
                                        )
                                    }
                                </div>
                                {faqIsOpen === index && (
                                    <div className="row">
                                    <div className="col-11">
                                        <p>{faq.answer}</p>
                                    </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;