"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_jsx_1 = __importDefault(require("./components/Header.jsx"));
const react_router_dom_1 = require("react-router-dom");
const Cart_jsx_1 = __importDefault(require("./pages/Cart.jsx"));
const Photos_jsx_1 = __importDefault(require("./pages/Photos.jsx"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_jsx_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Photos_jsx_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/cart", element: react_1.default.createElement(Cart_jsx_1.default, null) }))));
};
exports.default = App;
//# sourceMappingURL=App.js.map