import { ServiceNavProvider } from "@/contexts";
import { ReactNode } from "react";

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return <ServiceNavProvider>{children}</ServiceNavProvider>;
};

export default AppProviders;
