import React, { useState } from 'react';
import heroImg from '../assets/images/hero-img.png';
import projectWatersmith from '../assets/images/project-watersmith.png';
import projectPromptGuardian from '../assets/images/project-prompt-guardian.png';
import projectGlobalink from '../assets/images/project-globalink.png';
import projectTheVault from '../assets/images/mystery-box.png';
import projectLease from '../assets/images/project-lease.png';
import projectIdkk from '../assets/images/tobyteq.png';
import check from '../assets/images/check.svg';
import star from '../assets/images/star.svg';
import stopwatch from '../assets/images/stopwatch.svg';
import partner1 from '../assets/images/partner-1.png';
import partner2 from '../assets/images/partner-2.png';
import partner3 from '../assets/images/partner-3.png';
import partner4 from '../assets/images/partner-4.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useGsapAnimations } from '../hooks/useGsapAnimation';

const HomePage: React.FC = () => {

        useGsapAnimations();

        const [faqIsOpen, setFaqIsOpen] = useState<number | null>(null);
        const faqs = [
            {
                question: 'How do I get started?',
                answer: 'You can either choose a plan , pay upfront and we get to work straight away or you can choose to set up a call where we can understand your needs better and you also get to know more about us.'
            },
            {
                question: 'How does it work?',
                answer: 'We are using Slack to communicate with our clients, we’re being transparent and keeping our clients updated daily with our progress. You can also send to us your ideas, moodboards, guidelines or wireframe if you already established a base on your product.'
            },
            {
                question: 'What if I dont like the design?',
                answer: 'We’re always iterating until you’re happy with the results. If there are things that may break functionality or accessibility , we’ll provide relevant explanations on why we choose to make these decisions. Sometimes in design, we need to make these trade-offs in order to ensure great functionality to the end user. '
            },
            {
                question: 'I already have a Figma project. Can you develop it?',
                answer: 'We can do that too, we can re-work and integrate in Framer your Figma file and create responsive design for it as well of you only have desktop versions. Pricing starts from $999 and it adds to it based on complexity or if it’s a single landing page or an entire multi-page website.'
            },
            {
                question: 'Can you do mobile apps?',
                answer: 'Yes we can design mobile and desktop apps for iOS & Mac OS. We only offer design services for these, we do not offer development. '
            },
            {
                question: 'How about deliverables?',
                answer: 'The way we are delivering the website to you is by providing a remix link , you can then directly add it to your Framer account, add your domain and update other relevant settings if necessary.'
            },
            {
                question: 'Do you offer refunds?',
                answer: 'Due to the nature of our work, spending tens of hours to deliver exceptional results, we cannot offer refunds, but rest assured that we will do our best to make sure you are satisfied with the end result. We are passionate about what we are doing and seeing our customers happy only makes us deliver beyond expectations.'
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
                <div className="container d-flex flex-column justify-content-center align-items-center py-5 text-center">
                    <h1 className='hero__header'>
                        We Help Companies Leverage Design to <span className="purple">Win the Customer Acquisition</span> Game 
                    </h1>

                    <p className='mt-3 hero__text'>
                        Through a powerful blend of creativity and precision, we ensure that every interaction resonates with your audience and strengthens your online presence.
                    </p>

                    <img src={heroImg} alt="hero image" className='mt-4 img-fluid desktop' />

                    <button className="book__call mt-5">Book a call</button>
                </div>
            </section>

            <section className="our__works py-5">
                <div className="container pt-5 pb-4">
                    <h2 className='reveal__text'>Our Works</h2>
                </div>
                <div className="project__images__div">
                    <div className="project__images d-flex align-items-center">
                        <img src={projectWatersmith} alt="watersmith project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectPromptGuardian} alt="prompt guardian project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectGlobalink} alt="globalink project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectTheVault} alt="the vault project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectIdkk} alt="tobyteq project image" className="me-4" style={{ display: 'inline-block' }} />
                        <img src={projectLease} alt="lease project image" className="me-4" style={{ display: 'inline-block' }} />
                    </div>
                </div>
                <div className="container py-5">
                    <h2 className='reveal__text'>Building Websites & Products that combine <span className="purple">aesthetics</span>, <span className="purple">functionality</span> to deliver great <span className="purple">results</span></h2>

                    <div className="stats d-flex flex-wrap">
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>40+</h1>
                            <p className='fade__up__text'>Finalized Projects</p>
                        </div>
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>96%</h1>
                            <p className='fade__up__text'>Conversion Rate Improvement</p>
                        </div>
                        <div className="stat d-flex flex-column align-items-center me-lg-5 me-md-5 me-5 mt-5">
                            <h1 className='mb-4'>6+</h1>
                            <p className='fade__up__text'>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why__work">
                <div className="container py-5">
                    <h2 className='reveal__text'>Why work with us</h2>

                    <div className="row justify-content-center cards">
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={check} alt="check" className='mb-3' />
                                <h4 className="mb-3 reveal__text">Expertise</h4>
                                <p className='fade__up__text'>
                                    With us, you can experience veterans with over half a decade of design and development experience  capable of delivering the most complex and visually stunning projects across multiple industries.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={star} alt="star" className='mb-3' />
                                <h4 className="mb-3 reveal__text">Communication</h4>
                                <p className='fade__up__text'>
                                    We have a commitment to swift and regular communication, keeping our stakeholders in the loop  with progress and following up on the responses and feedbacks to ensure your maximum satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card px-3 py-5 d-flex flex-column align-items-center text-center h-100">
                                <img src={stopwatch} alt="stopwatch" className='mb-3' />
                                <h4 className="mb-3 reveal__text">Accelerated Speed</h4>
                                <p className='fade__up__text'>
                                    From the discovery call to a quick action plan within 24 hours, we get to work right away, ensuring your project is delivered on time and with precision. We also ensure our workflow aligns with your schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row features py-3">
                        <div className="col-lg-4 col-md-6 mt-lg-3 mt-5 d-flex flex-column justify-content-between">
                            <h4 className='fade__up__text'>User Interface</h4>
                            <h4 className="mt-2 fade__up__text">User Experience</h4>
                            <h4 className="mt-2 fade__up__text">Responsive Design</h4>
                            <h4 className="mt-2 fade__up__text">Custom Code</h4>
                            <h4 className="mt-2 fade__up__text">Component Libraries</h4>
                            <h4 className="mt-2 fade__up__text">Desktop & Mobile Apps</h4>
                            <h4 className="mt-2 fade__up__text">Website Migration</h4>
                            <h4 className="mt-2 fade__up__text">Figma to Framer</h4>
                        </div>
                        <div className="col-lg-4 col-0 desktop"></div>
                        <div className="col-lg-4 col-md-6 mt-lg-3 mt-5 ps-lg-4">
                            <div className="fields p-lg-3 p-5">
                                <h3 className='mb-2 reveal__text'>Fields</h3>

                                <p className="mt-2 fade__up__text">AI</p>
                                <p className="mt-2 fade__up__text">Saas</p>
                                <p className="mt-2 fade__up__text">Fintech</p>
                                <p className="mt-2 fade__up__text">E-commerce</p>
                                <p className="mt-2 fade__up__text">Esports</p>
                                <p className="mt-2 fade__up__text">Automotive</p>
                                <p className="mt-2 fade__up__text">Fashion</p>
                                <p className="mt-2 fade__up__text">Real Estate</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="partners">
                <div className="container py-5">
                    <h2 className='reveal__text'>Our Partners</h2>

                    <div className="row justify-content-center cards">
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner1} alt="partner image" className='mb-4' />
                                <h4 className="mb-2 fade__text">John Jones</h4>
                                <p className='fade__up__text'>CEO, Mirage</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner2} alt="partner image" className='mb-4' />
                                <h4 className="mb-2 fade__text">Kane Schliff</h4>
                                <p className='fade__up__text'>CTO, Novelle</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner3} alt="partner image" className='mb-4' />
                                <h4 className="mb-2 fade__text">Timi Jay</h4>
                                <p className='fade__up__text'>Co-Founder, Nil</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 col-md-6 col-sm-12 px-3 py-lg-5">
                            <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                                <img src={partner4} alt="partner image" className='mb-4' />
                                <h4 className="mb-2 fade__text">Nicolas Midi</h4>
                                <p className='fade__up__text'>Co-Founder, Velocity One</p>
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
                    <h2 className='reveal__text'>FAQs</h2>
                    <p className='mb-3 fade__up__text'>Some frequently asked questions and answers</p>

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
                                        <p className='fade__up__text'>{faq.answer}</p>
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