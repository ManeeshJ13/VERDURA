import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
        });

        const raf = (time) => {
            lenis?.raf?.(time);
            requestAnimationFrame (raf);
        };

        requestAnimationFrame(raf); //starting loop
    }, []);
};

export default useLenis;