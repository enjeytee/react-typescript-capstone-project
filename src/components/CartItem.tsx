import React, { useContext, useState } from "react";
import { IImageProps } from "../interfaces.jsx";
import { Context } from "../Context.jsx";

const CartItem = ({ img }: IImageProps) => {
    const allPhotosContext = useContext(Context);
    const [hovered, setHovered] = useState(false)
    if (!allPhotosContext) return null;
    const { removeFromCart } = allPhotosContext;
    return (
        <div className="cart-item">
            <i 
                onClick={() => removeFromCart(img.id)} 
                className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img src={img.url} width="130px" />
            <p>&#8369;99.95</p>
        </div>
    );
};
export default CartItem;