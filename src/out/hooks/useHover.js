"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useHover = () => {
    const [hovered, setHovered] = react_1.default.useState(false);
    const enter = () => {
        setHovered(true);
    };
    const leave = () => {
        setHovered(false);
    };
};
exports.default = useHover;
//# sourceMappingURL=useHover.js.map