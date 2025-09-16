import Sites from "@/assets/images/pngs/sites.png";

const ServiceWork = () => {
    return (
        <div className="service__work d-flex flex-column gap-md-5 gap-3">
            <div className="service__work__top d-flex flex-column gap-4 align-items-center">
                <div className="pill py-2 px-3">
                    <small className="fade__text">OUR WORK</small>
                </div>
                <h3 className="reveal__text">Featured Web design projects</h3>
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
    );
};

export default ServiceWork;
