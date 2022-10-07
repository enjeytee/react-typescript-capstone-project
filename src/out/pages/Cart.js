"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Context_jsx_1 = require("../Context.jsx");
const CartItem_jsx_1 = __importDefault(require("../components/CartItem.jsx"));
const Cart = () => {
    const [buttonText, setButtonText] = (0, react_1.useState)("Place Order");
    const allPhotosContext = (0, react_1.useContext)(Context_jsx_1.Context);
    if (!allPhotosContext)
        return null;
    const { cartItems, emptyCart } = allPhotosContext;
    const cartItemElements = cartItems.map(item => (react_1.default.createElement(CartItem_jsx_1.default, { key: item.id, img: item })));
    const placeOrder = () => {
        setButtonText("Ordering...");
        setTimeout(() => {
            alert("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    };
    return (react_1.default.createElement("main", { className: "cart-page" },
        react_1.default.createElement("h1", null, "Check out"),
        cartItemElements,
        react_1.default.createElement("p", { className: "total-cost" },
            "Total: ",
            (cartItems.length * 99.95).toLocaleString("en-US", { style: "currency", currency: "PHP" })),
        cartItems.length > 0 ?
            react_1.default.createElement("div", { className: "order-button" },
                react_1.default.createElement("button", { onClick: () => placeOrder() }, buttonText)) :
            react_1.default.createElement("p", null, "You have no items in your cart.")));
};
exports.default = Cart;
//# sourceMappingURL=Cart.js.map