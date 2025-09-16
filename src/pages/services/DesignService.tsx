import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import ServiceWork from "@/components/services/ServiceWork";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const DesignService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHero
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
