import ServiceBrandingProcess from "@/components/services/ServiceBrandingProcess";
import ServiceClients from "@/components/services/ServiceClients";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import ServiceWork from "@/components/services/ServiceWork";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const BrandingService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHero
                heading={
                    <h1 className="reveal__text">
                        We craft
                        <br />
                        <span className="purple">memorable brands</span>
                        <br />
                        for our clients
                    </h1>
                }
                tag="BRANDING DESIGN"
            />
            <ServiceClients />
            <ServiceBrandingProcess />
            <ServiceProcess />
            <ServiceWork />
            <ServiceFAQ />
            <ServiceTestimonial />
        </section>
    );
};

export default BrandingService;
