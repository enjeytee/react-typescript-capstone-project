import React, { useState, useEffect, createContext } from "react";
import { IAllPhotos, IContext, IContextProps } from "./interfaces.jsx";

const Context = createContext<IContext | null>(null);
const ContextProvider = ({ children }: IContextProps) => {
    const [allPhotos, setAllPhotos] = useState<IAllPhotos[]>([]);
    const [cartItem, setCartItem] = useState<IAllPhotos[]>([]);
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
        setCartItem(item => [ ...item, img ]);
    };
    const removeFromCart = (id: string) => {
        setCartItem(cartItem.filter(item => item.id != id));
    };
    return (
        <Context.Provider value={
            {
                allPhotos: allPhotos,
                toggleFavorite: toggleFavorite,
                addToCart: addToCart,
                cartItem: cartItem,
                removeFromCart: removeFromCart
            }
        }>
            {children}
        </Context.Provider>
    );
};
export { ContextProvider, Context };