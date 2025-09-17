import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHeroCheckered from "@/components/services/ServiceHeroCheckered";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import ServiceWork from "@/components/services/ServiceWork";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const DesignService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHeroCheckered
                heading={
                    <h1 className="reveal__text">
                        We build
                        <br />
                        compelling websites
                        <br />
                        <span className="purple">that drive sales.</span>
                    </h1>
                }
                tag="WEB DESIGN"
            />
            <ServiceImpact />
            <ServiceProcess />
            <ServiceWork />
            <ServiceFAQ />
            <ServiceTestimonial />
        </section>
    );
};

export default DesignService;
