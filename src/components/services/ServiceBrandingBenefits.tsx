import { brandingBenefits } from "@/lib/data";
import ServiceProcessContent from "./ServiceProcessContent";

const ServiceBrandingBenefits = () => {
    return (
        <div className="service__branding-benefits d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-4 align-items-md-center">
                <div className="pill py-2 px-3">
                    <small className="fade__text">BENEFITS</small>
                </div>
                <h3 className="reveal__text text-md-center">
                    Why you need branding
                    <br /> in today's world
                </h3>
            </div>

            <ServiceProcessContent serviceProcess={brandingBenefits} />
        </div>
    );
};

export default ServiceBrandingBenefits;
