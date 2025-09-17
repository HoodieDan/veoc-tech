import { noCodeBenefits } from "@/lib/data";

interface IServiceNoCodeBenefits extends React.ComponentProps<"div"> {
    tag: string;
    heading: React.ReactNode;
}

const ServiceNoCodeBenefits = ({ heading, tag }: IServiceNoCodeBenefits) => {
    return (
        <div className="service__no-code-benefits d-flex flex-column align-items-center gap-4">
            <div className="d-flex flex-column gap-3 align-items-md-center">
                <small className="service__no-code-benefits__tag fade__text fw-bold">
                    {tag}
                </small>
                {heading}
            </div>

            <div className="service__no-code-benefits__rows d-flex flex-column gap-3">
                <div className="service__no-code-benefits__rows__items w-100 d-flex flex-md-row flex-column gap-5 px-4 py-5">
                    {noCodeBenefits
                        .slice(0, 3)
                        .map(({ description, heading, icon }, index) => (
                            <div
                                key={index}
                                className="service__no-code-benefits__rows__items__item d-flex flex-column gap-4 text-center"
                            >
                                <img src={icon} alt="" className="mx-auto" />
                                <h5 className="fw-semibold">{heading}</h5>
                                <h5 className="fw-light">{description}</h5>
                            </div>
                        ))}
                </div>
                <div className="service__no-code-benefits__rows__items w-100 d-flex flex-md-row flex-column justify-content-center gap-5 px-4 py-5">
                    {noCodeBenefits
                        .slice(3, 5)
                        .map(({ description, heading, icon }, index) => (
                            <div
                                key={index}
                                className="service__no-code-benefits__rows__items__item d-flex flex-column gap-4 text-center"
                            >
                                <img src={icon} alt="" className="mx-auto" />
                                <h5 className="fw-semibold">{heading}</h5>
                                <h5 className="fw-light">{description}</h5>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceNoCodeBenefits;
