import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context.jsx";

const Header = () => {
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { cartItems } = allPhotosContext;
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                { 
                    cartItems.length ? 
                    <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : 
                    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                }
            </Link>
        </header>
    );
};
export default Header;