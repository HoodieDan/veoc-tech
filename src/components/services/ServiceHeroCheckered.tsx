import ServiceVideo from "@/assets/images/pngs/service-video.png";

interface IServiceHeroCheckered extends React.ComponentProps<"div"> {
    heading: React.ReactNode;
    tag: string;
}

const ServiceHeroCheckered = ({ heading, tag }: IServiceHeroCheckered) => {
    return (
        <div className="hero__section service__hero-checkered">
            <div className="service__hero-checkered__left">
                <div className="d-flex flex-column gap-4">
                    <div className="pill py-2 px-3">
                        <small className="fade__text">{tag}</small>
                    </div>
                    {heading}
                </div>
                <div className="service__hero-checkered__left__links">
                    <a href="" title="Get started now">
                        Get started now
                    </a>
                    <a href="" title="View Case studies">
                        View Case studies
                    </a>
                </div>
            </div>

            <div className="service__hero-checkered__right">
                <img
                    src={ServiceVideo}
                    alt="Service Video"
                    className="img-fluid inset__reveal__image"
                />
            </div>
        </div>
    );
};

export default ServiceHeroCheckered;
