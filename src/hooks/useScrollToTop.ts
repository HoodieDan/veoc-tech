import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
    const { pathname } = useLocation();

    return useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

export default useScrollToTop;
