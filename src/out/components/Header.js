"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    return (react_1.default.createElement("header", null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("h2", null, "Pic Some")),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/cart" },
            react_1.default.createElement("i", { className: "ri-shopping-cart-line ri-fw ri-2x" }))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map