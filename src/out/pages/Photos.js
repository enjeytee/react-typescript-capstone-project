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
const Image_jsx_1 = __importDefault(require("../components/Image.jsx"));
const Context_jsx_1 = require("../Context.jsx");
const index_js_1 = require("../utils/index.js");
const Photos = () => {
    const allPhotosContext = (0, react_1.useContext)(Context_jsx_1.Context);
    if (!allPhotosContext)
        return null;
    const { allPhotos } = allPhotosContext;
    const imageElements = allPhotos.map((photo, index) => (react_1.default.createElement(Image_jsx_1.default, { key: photo.id, img: photo, className: (0, index_js_1.getClass)(index) })));
    return (react_1.default.createElement("main", { className: "photos" }, imageElements));
};
exports.default = Photos;
//# sourceMappingURL=Photos.js.map