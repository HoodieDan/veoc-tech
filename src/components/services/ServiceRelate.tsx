import { serviceRelations } from "@/lib/data";

interface IServiceRelate extends React.ComponentProps<"div"> {
    heading: React.ReactNode;
}

const ServiceRelate = ({ heading }: IServiceRelate) => {
    return (
        <div className="service__relate d-flex flex-column align-items-center gap-md-5 gap-4">
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

export default ServiceRelate;
