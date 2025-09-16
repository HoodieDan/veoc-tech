import { ServiceClientsImgs } from "@/lib/data";

const ServiceClients = () => {
    return (
        <div className="service__clients d-flex flex-column gap-5">
            <div className="service__clients__top d-flex flex-column gap-3 align-items-md-center">
                <h3 className="reveal__text text-md-center">
                    Featured Clients
                </h3>
                <p className="text-md-center">
                    Our branding agency specialize in working with brands,
                    <br />
                    regardless of the size and lifecycle stage.
                </p>
            </div>

            <div className="service__clients__bottom d-flex align-items-center">
                <div className="service__clients__bottom__stack">
                    {ServiceClientsImgs.map((img, index) => (
                        <figure key={index}>
                            <img src={img} alt={`Service Tool ${index + 1}`} />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceClients;
