type IProcess = {
    id: number;
    number: string;
    title: string;
    description: string;
}[];

interface IServiceProcessContent extends React.ComponentProps<"div"> {
    serviceProcess: IProcess;
}

const ServiceProcessContent = ({ serviceProcess }: IServiceProcessContent) => {
    return (
        <div className="service__process__content row">
            {serviceProcess.map((process) => (
                <div
                    key={process.id}
                    className="service__process__content__item col-12 col-md-4 d-flex flex-column gap-5 p-3"
                >
                    <span className="fade__text">{process.number}</span>
                    <div className="d-flex flex-column gap-3">
                        <h4 className="reveal__text">{process.title}</h4>
                        <p className="fade__text">{process.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceProcessContent;
