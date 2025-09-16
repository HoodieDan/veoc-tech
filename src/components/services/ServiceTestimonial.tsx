import TestimonialImage from "@/assets/images/pngs/testimonial-image.png";
import Quotes from "@/assets/images/quotes.svg";
import TestimonialAvatar from "@/assets/images/testimonial-avatar.svg";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
const ServiceTestimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    return (
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
                                        <h5 className="reveal__text">Emma W</h5>
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
                                            Verta's designs elevated our brand
                                            presence, making a real impact with
                                            our audience.
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
    );
};

export default ServiceTestimonial;
