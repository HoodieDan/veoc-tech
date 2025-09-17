import ArrowRight from "../icons/ArrowRight";

interface IServiceHeroPlain extends React.ComponentProps<"div"> {
    description: React.ReactNode;
    heading: React.ReactNode;
    imageSrc: string;
    tag: string;
}

const ServiceHeroPlain = ({
    description,
    heading,
    imageSrc,
    tag,
}: IServiceHeroPlain) => {
    return (
        <div className="service__hero-plain">
            <div className="service__hero-plain__left">
                <div className="d-flex flex-column gap-3">
                    <small className="service__hero-plain__left__tag fade__text fw-bold">
                        {tag}
                    </small>
                    {heading}
                    {description}
                </div>
                <div className="service__hero-plain__left__links">
                    <a href="" title="BOOK A FREE CALL">
                        <small>BOOK A FREE CALL</small>
                    </a>
                    <a href="" title="SEE OUR WORKS">
                        <small>SEE OUR WORKS</small>
                        <ArrowRight />
                    </a>
                </div>
            </div>

            <div className="service__hero-plain__right">
                <img
                    src={imageSrc}
                    alt="Service Video"
                    className="img-fluid inset__reveal__image"
                />
            </div>
        </div>
    );
};

export default ServiceHeroPlain;
