import ServiceVideo from "@/assets/images/pngs/service-video.png";
import Sites from "@/assets/images/pngs/sites.png";
import TestimonialImage from "@/assets/images/pngs/testimonial-image.png";
import Quotes from "@/assets/images/quotes.svg";
import TestimonialAvatar from "@/assets/images/testimonial-avatar.svg";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";
import { designProcess } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";

const DesignService = () => {
    useGsapAnimations();

    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [faqIsOpen, setFaqIsOpen] = useState<number | null>(null);

    const faqs = [
        {
            question: "What types of websites do you specialize in building",
            answer: "We specialize in building websites for businesses and startups. We create custom websites that are tailored to your brand and goals. We also offer website maintenance and support services to help you keep your website up and running.",
        },
        {
            question:
                "What is your typical process for a web development project, and what kind of involvement is required from my end?",
            answer: "Our process typically involves a collaborative approach, where we start with a discovery phase to understand your business needs and goals. We then create a detailed project plan, including wireframes, design mockups, and a development timeline. Throughout the project, we maintain open communication, providing regular updates and ensuring that you are involved in every step of the process. We also offer ongoing support and maintenance to ensure your website remains up-to-date and performing at its best.",
        },
        {
            question:
                "What are your pricing structures, and what factors influence the overall cost of a website?",
            answer: "Our pricing structures are flexible and tailored to your specific needs. We offer competitive rates for various website development projects, including basic landing pages, multi-page websites, and e-commerce platforms. The cost of a website depends on factors such as the complexity of the design, the number of pages, and the features you require. We provide transparent pricing and detailed quotes to help you understand the total cost of your project.",
        },
        {
            question:
                "Do you offer ongoing support and maintenance after the website is launched?",
            answer: "Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date and performing at its best. We provide regular updates, security patches, and technical support to help you manage your website effectively.",
        },
        {
            question:
                "What is your estimated timeline for completing a web development project?",
            answer: "The timeline for completing a web development project depends on the complexity of the project. We typically provide a detailed project timeline during the discovery phase, which includes design, development, testing, and launch. We ensure that the project is completed within the agreed-upon timeline, and we keep you updated on our progress throughout the process.",
        },
    ];

    const toggleDropdown = (index: number) => {
        if (faqIsOpen === index) {
            setFaqIsOpen(null);
        } else {
            setFaqIsOpen(index);
        }
    };

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="service">
            <div className="hero__section service__hero">
                <div className="service__hero__left">
                    <div className="d-flex flex-column gap-4">
                        <div className="pill py-2 px-3">
                            <small className="fade__text">WEB DESIGN</small>
                        </div>
                        <h1 className="reveal__text">
                            We build
                            <br />
                            compelling websites
                            <br />
                            <span className="purple">that drive sales.</span>
                        </h1>
                    </div>
                    <div className="service__hero__left__links">
                        <a href="" title="Get started now">
                            Get started now
                        </a>
                        <a href="" title="View Case studies">
                            View Case studies
                        </a>
                    </div>
                </div>

                <div className="service__hero__right">
                    <img
                        src={ServiceVideo}
                        alt="Service Video"
                        className="img-fluid inset__reveal__image"
                    />
                </div>
            </div>

            <div className="service__impact">
                <div className="service__impact__left d-flex flex-column gap-3">
                    <h2 className="reveal__text">
                        Design that works,
                        <br /> <span className="purple">Beautifully.</span>
                    </h2>
                    <p className="big fade__text">
                        We go beyond aesthetics. Our website design process
                        focuses on creating a strong visual hierarchy, intuitive
                        navigation, and clear focal points that guide your users
                        and achieve your business objectives. We ensure your
                        website isn't just seen, but experienced.
                    </p>
                </div>
                <div className="service__impact__right">
                    <div className="service__impact__right__item">
                        <div className="d-flex flex-column gap-2 p-4">
                            <h4>85%</h4>
                            <p className="big">Customer satisfaction rate</p>
                        </div>
                        <div className="d-flex flex-column gap-2 p-4">
                            <h4>50+</h4>
                            <p className="big">Projects launches</p>
                        </div>
                        <div className="d-flex flex-column gap-2 p-4">
                            <h4>20+</h4>
                            <p className="big">Team members</p>
                        </div>
                        <div className="d-flex flex-column gap-2 p-4">
                            <h4>20%</h4>
                            <p className="big">Clients worked with</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service__process d-flex flex-column gap-5">
                <div className="pill py-2 px-3">
                    <small className="fade__text">OUR PROCESS</small>
                </div>

                <div className="service__process__content row">
                    {designProcess.map((process) => (
                        <div
                            key={process.id}
                            className="service__process__content__item col-12 col-md-4 d-flex flex-column gap-5 p-3"
                        >
                            <span className="fade__text">{process.number}</span>
                            <div className="d-flex flex-column gap-3">
                                <h4 className="reveal__text">
                                    {process.title}
                                </h4>
                                <p className="fade__text">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="service__work d-flex flex-column gap-md-5 gap-3">
                <div className="service__work__top d-flex flex-column gap-4 align-items-center">
                    <div className="pill py-2 px-3">
                        <small className="fade__text">OUR WORK</small>
                    </div>
                    <h3 className="reveal__text">
                        Featured Web design projects
                    </h3>
                </div>

                <div className="service__work__bottom mt-5 d-flex flex-column gap-5 align-items-center">
                    <img
                        src={Sites}
                        alt=""
                        className="img-fluid inset__reveal__image"
                    />
                    <div>
                        <a href="/portfolio" title="View projects">
                            View projects
                        </a>
                    </div>
                </div>
            </div>

            <div className="service__faqs d-flex flex-column gap-md-5 gap-3">
                <div className="service__faqs__top d-flex flex-column gap-4 align-items-center">
                    <div className="pill py-2 px-3">
                        <small className="fade__text">WHY CHOOSE US</small>
                    </div>
                    <h3 className="reveal__text">Frequently Asked Questions</h3>
                </div>

                <div className="service__faqs__questions d-flex justify-content-center align-items-center flex-column">
                    {faqs.map((faq, index) => (
                        <div
                            className="service__faqs__questions__question row mt-2 w-100"
                            key={index}
                            onClick={() => toggleDropdown(index)}
                        >
                            <div className="col-11">
                                <h6>{faq.question}</h6>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center arrow">
                                {faqIsOpen === index ? (
                                    <RemoveIcon />
                                ) : (
                                    <AddIcon />
                                )}
                            </div>
                            {faqIsOpen === index && (
                                <div className="row">
                                    <div className="col-11">
                                        <p className="fade__up__text">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="service__testimonials d-flex flex-column gap-md-5 gap-3">
                <div className="service__testimonials__top d-flex flex-column gap-4 align-items-center">
                    <div className="pill py-2 px-3">
                        <small className="fade__text">OUR WORK</small>
                    </div>
                    <h3 className="text-center reveal__text">
                        What our clients feel
                        <br /> working with us
                    </h3>
                </div>

                <div className="d-grid gap-3 mt-3">
                    <div className="service__testimonials__content d-flex flex-column flex-md-row align-items-center gap-3">
                        {Array.from({ length: 2 }, (_, index) => (
                            <div
                                key={index}
                                className="service__testimonials__content__item d-flex flex-column flex-md-row align-items-center gap-4"
                            >
                                <img
                                    src={TestimonialImage}
                                    alt=""
                                    className="img-fluid"
                                />

                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex flex-column">
                                            <h5 className="reveal__text">
                                                Emma W
                                            </h5>
                                            <p className="reveal__text">
                                                Project Manager
                                            </p>
                                        </div>
                                        <img
                                            src={Quotes}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="mt-1 fade__text">
                                        Verta transformed our website into a
                                        stunning, user-friendly, driving more
                                        engagement and leads than ever before.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="service__testimonials__corousel d-flex align-items-center">
                        <button
                            type="button"
                            title="Previous"
                            className="embla__button embla__button--prev mx-3"
                            onClick={onPrevButtonClick}
                        >
                            <ChevronLeft />
                        </button>

                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="embla__slide">
                                        <div className="embla__slide__content d-flex flex-column gap-2 p-4">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={TestimonialAvatar}
                                                        alt=""
                                                    />
                                                    <div className="d-flex flex-column">
                                                        <h5 className="reveal__text">
                                                            Sophia L
                                                        </h5>
                                                        <p className="reveal__text">
                                                            Creative Director
                                                        </p>
                                                    </div>
                                                </div>

                                                <img
                                                    src={Quotes}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>

                                            <div className="embla__slide__line" />

                                            <p className="mt-1 fade__text">
                                                Verta's designs elevated our
                                                brand presence, making a real
                                                impact with our audience.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            title="Next"
                            className="embla__button embla__button--next mx-3"
                            onClick={onNextButtonClick}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignService;
