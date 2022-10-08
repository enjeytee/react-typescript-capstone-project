import React, { useState, useContext } from "react";
import { IImageProps } from "../interfaces.jsx";
import { Context } from "../Context.jsx";
import useHover from "../hooks/useHover.jsx";

const Image = ({ className, img }: IImageProps) => {
    // const [hovered, setHovered] = useState(false);
    const { hovered, ref } = useHover();
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = allPhotosContext;
    const heartIcon = () => {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        };
    };
    const cartIcon = () => {
        const isInCart = cartItems.some(item => item.id === img.id);
        if (isInCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    };
    return (
        <div 
            className={`${className} image-container`}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            { heartIcon() }
            { cartIcon() }
        </div>
    );
};
export default Image;