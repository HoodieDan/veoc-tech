import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHeroCheckered from "@/components/services/ServiceHeroCheckered";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import ServiceTools from "@/components/services/ServiceTools";
import ServiceWork from "@/components/services/ServiceWork";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const DevService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHeroCheckered
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
            <ServiceTools />
            <ServiceWork />
            <ServiceFAQ />
            <ServiceTestimonial />
        </section>
    );
};

export default DevService;
