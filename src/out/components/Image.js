"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Image = ({ className, img }) => {
    return (react_1.default.createElement("div", { className: `${className} image-container` },
        react_1.default.createElement("img", { src: img.url, className: "image-grid" })));
};
exports.default = Image;
//# sourceMappingURL=Image.js.map