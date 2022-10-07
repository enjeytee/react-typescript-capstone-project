import React, { useContext } from "react";
import { Context } from "../Context.jsx";
import CartItem from "../components/CartItem.jsx";

const Cart = () => {
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { cartItems } = allPhotosContext;
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} img={item}/>
    ));
    return (
        <main className="cart-page">
            { cartItemElements }
            <p className="total-cost">Total: &#8369; </p>
            <div className="order-button">
                <button>Place order</button>
            </div>
        </main>
    );
};
export default Cart;