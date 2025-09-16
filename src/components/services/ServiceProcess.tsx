import { designProcess } from "@/lib/data";

const ServiceProcess = () => {
    return (
        <div className="service__process d-flex flex-column gap-5">
            <div className="pill py-2 px-3">
                <small className="fade__text">OUR PROCESS</small>
            </div>

            <div className="service__process__content row">
                {designProcess.map((process) => (
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
        </div>
    );
};

export default ServiceProcess;
