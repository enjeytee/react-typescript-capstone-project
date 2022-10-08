import React from "react";
import { IUseHover } from "../interfaces.jsx";

const useHover = (): IUseHover => {
    const [hovered, setHovered] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const enter = () => {
        setHovered(true);
    };
    const leave = () => {
        setHovered(false);
    };
    React.useEffect(() => {
        ref.current?.addEventListener("mouseenter", enter);
        ref.current?.addEventListener("mouseleave", leave);
        return () => {
            ref.current?.removeEventListener("mouseenter", enter);
            ref.current?.removeEventListener("mouseleave", leave);
        };
    }, []);
    return {
        hovered: hovered, 
        ref: ref
    };
};
export default useHover;