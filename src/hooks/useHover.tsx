import React from "react";

const useHover = () => {
    const [hovered, setHovered] = React.useState(false);
    const enter = () => {
        setHovered(true);
    };
    const leave = () => {
        setHovered(false);
    }
};
export default useHover;