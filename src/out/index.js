"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const App_jsx_1 = __importDefault(require("./App.jsx"));
const react_router_dom_1 = require("react-router-dom");
const Context_jsx_1 = require("./Context.jsx");
const rootContainer = document.getElementById("root");
client_1.default.createRoot(rootContainer).render(react_1.default.createElement(Context_jsx_1.ContextProvider, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_jsx_1.default, null))));
//# sourceMappingURL=index.js.map