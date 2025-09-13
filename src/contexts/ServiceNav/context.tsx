import { createContext } from "react";

export type IServiceNavContext = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

const noop = () => {
    // intentionally empty
};

export const ServiceNavContext = createContext<IServiceNavContext>({
    isOpen: false,
    open: noop,
    close: noop,
    toggle: noop,
});
