import { ReactNode, useCallback, useMemo, useState } from "react";
import { IService, ServiceNavContext } from "./context";

export const ServiceNavProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [service, setService] = useState<IService>("design");

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    const handleServiceChange = useCallback((newService: IService) => {
        setService(newService);
    }, []);

    const value = useMemo(
        () => ({ isOpen, service, open, close, toggle, handleServiceChange }),
        [isOpen, service, open, close, toggle, handleServiceChange],
    );

    return (
        <ServiceNavContext.Provider value={value}>
            {children}
        </ServiceNavContext.Provider>
    );
};

export default ServiceNavProvider;
