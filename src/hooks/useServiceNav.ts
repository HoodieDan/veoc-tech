import { ServiceNavContext } from "@/contexts";
import { useContext } from "react";

export const useServiceNav = () => {
    const ctx = useContext(ServiceNavContext);

    if (!ctx) {
        throw new Error(
            "useServiceNav must be used within a ServiceNavProvider",
        );
    }

    return ctx;
};

export default useServiceNav;
