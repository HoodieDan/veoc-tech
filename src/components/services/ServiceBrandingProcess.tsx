import BrandingProcessImg from "@/assets/images/pngs/branding-process.png";

const ServiceBrandingProcess = () => {
    return (
        <div className="service__branding-process d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-5">
            <div className="service__branding-process__left d-flex flex-column gap-4 w-md-50 pe-md-5">
                <div className="pill py-2 px-3">
                    <small className="fade__text">OUR PROCESS</small>
                </div>
                <h3 className="reveal__text">Our Branding process</h3>
                <p className="fade__text mt-1">
                    We go beyond aesthetics. Our website design process focuses
                    on creating a strong visual hierarchy, intuitive navigation,
                    and clear focal points that guide your users and achieve
                    your business objectives. We ensure your website isn't just
                    seen, but experienced.
                </p>
            </div>

            <div className="service__branding-process__right flex-shrink-0 w-md-50">
                <img
                    src={BrandingProcessImg}
                    alt=""
                    className="img-fluid inset__reveal__image"
                />
            </div>
        </div>
    );
};

export default ServiceBrandingProcess;
