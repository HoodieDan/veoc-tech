import { designProcess } from "@/lib/data";
import ServiceProcessContent from "./ServiceProcessContent";

const ServiceProcess = () => {
    return (
        <div className="service__process d-flex flex-column gap-5">
            <div className="pill py-2 px-3">
                <small className="fade__text">OUR PROCESS</small>
            </div>

            <ServiceProcessContent serviceProcess={designProcess} />
        </div>
    );
};

export default ServiceProcess;
