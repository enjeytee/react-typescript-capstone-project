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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Context_jsx_1 = require("../Context.jsx");
const CartItem = ({ img }) => {
    const allPhotosContext = (0, react_1.useContext)(Context_jsx_1.Context);
    const [hovered, setHovered] = (0, react_1.useState)(false);
    if (!allPhotosContext)
        return null;
    const { removeFromCart } = allPhotosContext;
    return (react_1.default.createElement("div", { className: "cart-item" },
        react_1.default.createElement("i", { onClick: () => removeFromCart(img.id), className: `ri-delete-bin-${hovered ? "fill" : "line"}`, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) }),
        react_1.default.createElement("img", { src: img.url, width: "130px" }),
        react_1.default.createElement("p", null, "\u20B199.95")));
};
exports.default = CartItem;
//# sourceMappingURL=CartItem.js.map