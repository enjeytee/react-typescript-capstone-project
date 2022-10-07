import React, { useContext } from "react";
import { IImageProps } from "../interfaces.jsx";
import { Context } from "../Context.jsx";

const CartItem = ({ img }: IImageProps) => {
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { removeFromCart } = allPhotosContext;
    return (
        <div className="cart-item">
            <i onClick={() => removeFromCart(img.id)} className="ri-delete-bin-line"></i>
            <img src={img.url} width="130px" />
            <p>&#8369;99.95</p>
        </div>
    );
};
export default CartItem;