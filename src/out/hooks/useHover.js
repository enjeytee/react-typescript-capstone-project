"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useHover = () => {
    const [hovered, setHovered] = react_1.default.useState(false);
    const ref = react_1.default.useRef(null);
    const enter = () => {
        setHovered(true);
    };
    const leave = () => {
        setHovered(false);
    };
    react_1.default.useEffect(() => {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseenter", enter);
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseleave", leave);
        return () => {
            var _a, _b;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("mouseenter", enter);
            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.removeEventListener("mouseleave", leave);
        };
    }, []);
    return {
        hovered: hovered,
        ref: ref
    };
};
exports.default = useHover;
//# sourceMappingURL=useHover.js.map