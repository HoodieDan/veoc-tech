import { serviceToolsImgs } from "@/lib/data";

const ServiceTools = () => {
    return (
        <div className="service__tools d-flex flex-column gap-md-5 gap-3">
            <div className="service__tools__top d-flex flex-column gap-4 align-items-md-center">
                <div className="pill py-2 px-3">
                    <small className="fade__text">OUR TOOLS</small>
                </div>
                <h3 className="reveal__text text-md-center">
                    The technologies
                    <br /> we make use of
                </h3>
            </div>

            <div className="service__tools__bottom d-flex flex-column gap-5 align-items-md-center">
                <div className="service__tools__bottom__categories d-flex align-items-center gap-3">
                    <div>
                        <small>Front-end Dev</small>
                    </div>
                    <div>
                        <small>CMS</small>
                    </div>
                    <div>
                        <small>Back-end Dev</small>
                    </div>
                </div>

                <div className="service__tools__bottom__stack mt-4">
                    {serviceToolsImgs.map((img, index) => (
                        <figure key={index}>
                            <img src={img} alt={`Service Tool ${index + 1}`} />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceTools;
