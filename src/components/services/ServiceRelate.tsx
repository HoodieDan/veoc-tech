import { serviceRelations } from "@/lib/data";

interface IServiceRelatey extends React.ComponentProps<"div"> {
    heading: React.ReactNode;
}

const ServiceRelatey = ({ heading }: IServiceRelatey) => {
    return (
        <div className="service__relate d-flex flex-column align-items-center gap-md-5 gap-4 mt-5">
            {heading}

            <div className="service__relate__items d-flex flex-column gap-4">
                {serviceRelations.map(({ problem, solution }, index) => (
                    <div
                        key={index}
                        className="service__relate__items__item w-100 d-flex flex-md-row flex-column align-items-start justify-content-around gap-3"
                    >
                        <h5 className="service__relate__items__item__problem">
                            {problem}
                        </h5>
                        <h4 className="service__relate__items__item__solution">
                            {solution}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceRelatey;
