import React, { useState } from "react";
import { Link } from "react-router-dom";
import { portfolio } from "../lib/data";
import { useGsapAnimations } from "../hooks/useGsapAnimation";

const Portfolio: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const portfolioToShow = showAll ? portfolio : portfolio.slice(0, 6);
    useGsapAnimations();

    return (
        <div className="portfolio">
            <section className="hero">
                <div className="container d-flex flex-column justify-content-center align-items-center p-lg-5 text-lg-center text-md-center">
                    <h1 className="reveal__text">We are a group of passionate experts that prioritize creativity and results above all else</h1>

                    <p className="mt-3 fade__text">
                        We are a design agency built on depth, creativity and impact. From strategy to execution, every
                        project is crafted with precision, backed by a global network of exceptional talent.
                    </p>

                    <button className="book__call mt-5">Book a call</button>

                    <p className="big mt-5 fade__text">
                        Exceptional work doesn’t happen by accident. It is born from sharp strategy, deep expertise, and
                        the relentless pursue of excellence. Over the past 2 years, we’ve worked with several globally
                        recognized brands across every scale and industry, delivering results that resonates.
                        <br />
                        <br />
                        At the core, we’re a small team with great ambitions, strengthened by a carefully curated pool
                        of freelancers, handpicked from the best talents in the world. Many of these experts have shaped
                        industry-leading strategies as directors in top companies, bringing unmatched expertise to every
                        project. Together, we create solutions that are as bold as the brands we work with.
                    </p>

                    <h4 className="mt-5 reveal__text">Olayinka D. Adeyefa</h4>
                    <p className="bigger mb-3 reveal__text">Co-Founder, CEO, Veoc Tech</p>
                </div>
            </section>

            <section className="explore py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <small className="mt-5 reveal__text">A collection of what we've crafted</small>
                    <h3 className="mt-2 reveal__text">Explore Our Projects</h3>

                    {portfolioToShow.map(({ description, name, showcase, slug, tags }) => (
                        <Link key={slug} to={`/portfolio/${slug}`}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 mt-lg-3 mt-5">
                                    <div className="project__desc p-4 text-start h-100 d-flex flex-column justify-content-between">
                                        <h4 className="mb-3">{name}</h4>
                                        {Array.from({ length: 2 }).map((_, index) => (
                                            <p key={index} className="mb-2">
                                                {description}
                                            </p>
                                        ))}
                                        <div className="d-flex mt-4">
                                            {tags.slice(0, 2).map((tag, index) => (
                                                <div key={tag + index} className="pill px-3 py-2 me-2">
                                                    <small>{tag}</small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 mt-lg-3 mt-3">
                                    <div className="project__image h-100">
                                        <img src={showcase[0]} alt={name} className="img-fluid h-100" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {!showAll && (
                        <button className="my-5" onClick={() => setShowAll(true)}>View more projects</button>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
