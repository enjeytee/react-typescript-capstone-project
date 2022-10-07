import React from "react";

interface PropsType {
    className: string | undefined;
    img: {
        url: string;
    };
    children?: React.ReactNode;
}
const Image = ({ className, img }: PropsType) => {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
    );
};
export default Image;