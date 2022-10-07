import React, { useContext, useState } from "react";
import { Context } from "../Context.jsx";
import CartItem from "../components/CartItem.jsx";

const Cart = () => {
    const [buttonText, setButtonText] = useState<string>("Place Order");
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { cartItems, emptyCart } = allPhotosContext;
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} img={item}/>
    ));
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            alert("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    };
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            { cartItemElements }
            <p className="total-cost">
                Total: {(cartItems.length * 99.95).toLocaleString("en-US", {style: "currency", currency: "PHP"})}
            </p>
            { 
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button onClick={() => placeOrder()}>
                        { buttonText }
                    </button>
                </div> : 
                <p>You have no items in your cart.</p>
            }
        </main>
    );
};
export default Cart;