import ServiceNavImg from "@/assets/images/pngs/service-nav-img.png";
import { IService } from "@/contexts";
import useServiceNav from "@/hooks/useServiceNav";
import { serviceNav } from "@/lib/data";
import { ChevronRight } from "@mui/icons-material";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface ServiceNavProps {
    isOpen?: boolean;
}

const ServiceNav = ({ isOpen = false }: ServiceNavProps) => {
    const { service, handleServiceChange } = useServiceNav();
    const currentService = useMemo(
        () => serviceNav.filter(({ id }) => id === service),
        [service],
    );

    return (
        <div className={"service-nav" + (isOpen ? " open" : "")}>
            <div className="service-nav__list">
                {serviceNav.map(({ id, label }) => (
                    <div
                        key={id}
                        title={label}
                        className={`service-nav__list__item ${
                            currentService[0].id === id ? "active" : ""
                        }`}
                        onClick={() => handleServiceChange(id as IService)}
                    >
                        <span>{label}</span>
                        <ChevronRight />
                    </div>
                ))}
            </div>

            <div className="service-nav__content">
                {currentService.map(({ links }) => (
                    <div className="service-nav__content__links">
                        {links.map(({ href, label }) => (
                            <NavLink
                                key={label}
                                to={href}
                                title={label}
                                className="service-nav__content__links__link"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                ))}

                <figure>
                    <img src={ServiceNavImg} alt="" className="img-fluid" />
                </figure>
            </div>
        </div>
    );
};

export default ServiceNav;
