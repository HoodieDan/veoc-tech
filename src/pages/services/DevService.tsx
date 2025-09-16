import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import ServiceWork from "@/components/services/ServiceWork";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const DevService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHero
                heading={
                    <h1 className="reveal__text">
                        More than just a<br /> look. We forge
                        <br /> memorable brands.
                        <br /> <span className="purple">that drive sales.</span>
                    </h1>
                }
                tag="WEBSITE DEVELOPMENT"
            />
            <ServiceImpact />
            <ServiceProcess />
            <ServiceWork />
            <ServiceFAQ />
            <ServiceTestimonial />
        </section>
    );
};

export default DevService;
