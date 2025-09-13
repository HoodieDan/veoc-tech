import { ReactNode, useCallback, useMemo, useState } from "react";
import { ServiceNavContext } from "./context";

export const ServiceNavProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    const value = useMemo(
        () => ({ isOpen, open, close, toggle }),
        [isOpen, open, close, toggle],
    );

    return (
        <ServiceNavContext.Provider value={value}>
            {children}
        </ServiceNavContext.Provider>
    );
};

export default ServiceNavProvider;
