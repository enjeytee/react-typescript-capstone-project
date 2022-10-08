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
const useHover_jsx_1 = __importDefault(require("../hooks/useHover.jsx"));
const Image = ({ className, img }) => {
    // const [hovered, setHovered] = useState(false);
    const { hovered, ref } = (0, useHover_jsx_1.default)();
    const allPhotosContext = (0, react_1.useContext)(Context_jsx_1.Context);
    if (!allPhotosContext)
        return null;
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = allPhotosContext;
    const heartIcon = () => {
        if (img.isFavorite) {
            return react_1.default.createElement("i", { onClick: () => toggleFavorite(img.id), className: "ri-heart-fill favorite" });
        }
        else if (hovered) {
            return react_1.default.createElement("i", { onClick: () => toggleFavorite(img.id), className: "ri-heart-line favorite" });
        }
        ;
    };
    const cartIcon = () => {
        const isInCart = cartItems.some(item => item.id === img.id);
        if (isInCart) {
            return react_1.default.createElement("i", { onClick: () => removeFromCart(img.id), className: "ri-shopping-cart-fill cart" });
        }
        else if (hovered) {
            return react_1.default.createElement("i", { onClick: () => addToCart(img), className: "ri-add-circle-line cart" });
        }
    };
    return (react_1.default.createElement("div", { className: `${className} image-container`, 
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        ref: ref },
        react_1.default.createElement("img", { src: img.url, className: "image-grid" }),
        heartIcon(),
        cartIcon()));
};
exports.default = Image;
//# sourceMappingURL=Image.js.map