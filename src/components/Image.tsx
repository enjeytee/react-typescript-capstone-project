import React, { useState, useContext } from "react";
import { IAllPhotos } from "../interfaces.jsx";
import { Context } from "../Context.jsx"

interface IProps {
    className: string | undefined;
    img: IAllPhotos;
    children?: React.ReactNode;
};
const Image = ({ className, img }: IProps) => {
    const [hovered, setHovered] = useState(false);
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { toggleFavorite } = allPhotosContext;
    const heartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>;
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            { heartIcon }
            { cartIcon }
        </div>
    );
};
export default Image;