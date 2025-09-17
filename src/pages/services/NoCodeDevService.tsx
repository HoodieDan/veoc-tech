import NoCodeHeroImg from "@/assets/images/pngs/no-code-hero-img.png";
import ServiceHeroPlain from "@/components/services/ServiceHeroPlain";
import ServiceNoCodeBenefits from "@/components/services/ServiceNoCodeBenefits";
import ServiceRelate from "@/components/services/ServiceRelate";
import { useGsapAnimations } from "@/hooks/useGsapAnimation";

const NoCodeDevService = () => {
    useGsapAnimations();

    return (
        <section className="service">
            <ServiceHeroPlain
                description={
                    <p className="service__hero-plain__left__description">
                        Skip the code and go directly to results. We design
                        stunning
                        <br /> websites, landing pages, and digital products
                        using powerful
                        <br /> no-code tools. You can test, launch, and grow
                        your business
                        <br /> without hiring a developer.
                    </p>
                }
                heading={
                    <h1 className="reveal__text">
                        Let's turn your ideas
                        <br /> into a live product
                        <br /> without a single line of
                        <br /> code.
                    </h1>
                }
                imageSrc={NoCodeHeroImg}
                tag="NO CODE WEBDEVELOPMENT"
            />

            <ServiceRelate
                heading={
                    <h3 className="text-md-center reveal__text">
                        We Know Why No-Code Isn't Always
                        <br className="d-md-inline d-none" /> Plug-and-Play.
                    </h3>
                }
            />

            <ServiceNoCodeBenefits
                heading={
                    <h3 className="text-md-center reveal__text">
                        We Know How Exactly
                        <br className="d-md-inline d-none" /> to help you
                    </h3>
                }
                tag="BENEFITS OF WORKING WITH US"
            />
        </section>
    );
};

export default NoCodeDevService;
