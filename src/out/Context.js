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
exports.Context = exports.ContextProvider = void 0;
const react_1 = __importStar(require("react"));
const Context = (0, react_1.createContext)(null);
exports.Context = Context;
const ContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = (0, react_1.useState)([]);
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);
    const toggleFavorite = (id) => {
        setAllPhotos(allPhotos.map(photo => (photo.id === id ? Object.assign(Object.assign({}, photo), { isFavorite: !photo.isFavorite }) : photo)));
    };
    const addToCart = (img) => {
        setCartItems(item => [...item, img]);
    };
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id != id));
    };
    const emptyCart = () => {
        setCartItems([]);
    };
    return (react_1.default.createElement(Context.Provider, { value: {
            allPhotos: allPhotos,
            toggleFavorite: toggleFavorite,
            addToCart: addToCart,
            cartItems: cartItems,
            removeFromCart: removeFromCart,
            emptyCart: emptyCart
        } }, children));
};
exports.ContextProvider = ContextProvider;
//# sourceMappingURL=Context.js.map