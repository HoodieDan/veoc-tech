import { createContext } from "react";

export type IService = "design" | "development" | "build";
export type IServiceNavContext = {
    isOpen: boolean;
    service: IService;
    open: () => void;
    close: () => void;
    toggle: () => void;
    handleServiceChange: (newService: IService) => void;
};

const noop = () => {
    // intentionally empty
};

export const ServiceNavContext = createContext<IServiceNavContext>({
    isOpen: false,
    service: "design",
    open: noop,
    close: noop,
    toggle: noop,
    handleServiceChange: noop,
});
