import React, { useState, useEffect, createContext } from "react";
import { IAllPhotos, IContext, IContextProps } from "./interfaces.jsx";

const Context = createContext<IContext | null>(null);
const ContextProvider = ({ children }: IContextProps) => {
    const [allPhotos, setAllPhotos] = useState<IAllPhotos[]>([]);
    const [cartItems, setCartItemss] = useState<IAllPhotos[]>([]);
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);
    const toggleFavorite = (id: string) => {
        setAllPhotos(allPhotos.map(photo => (photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo)));
    };
    const addToCart = (img: IAllPhotos) => {
        setCartItemss(item => [ ...item, img ]);
    };
    const removeFromCart = (id: string) => {
        setCartItemss(cartItems.filter(item => item.id != id));
    };
    return (
        <Context.Provider value={
            {
                allPhotos: allPhotos,
                toggleFavorite: toggleFavorite,
                addToCart: addToCart,
                cartItems: cartItems,
                removeFromCart: removeFromCart
            }
        }>
            {children}
        </Context.Provider>
    );
};
export { ContextProvider, Context };