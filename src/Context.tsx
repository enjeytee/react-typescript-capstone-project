import React, { useState, useEffect, createContext } from "react";
import { IAllPhotos, IContext } from "./interfaces.jsx";
import Photos from "./pages/Photos.js";
// import Photos from "./pages/Photos.js";

interface IProps {
    children: React.ReactNode;
}
const Context = createContext<IContext | null>(null);
const ContextProvider = ({ children }: IProps) => {
    const [allPhotos, setAllPhotos] = useState<IAllPhotos[]>([]);
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);
    const toggleFavorite = (id: string) => {
        const updatedArray = allPhotos.map(photo => {
                if (photo.id === id) {
                    console.log(id)
                    console.log(!photo.isFavorite)
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                }
                return photo
            });
        // console.log(updatedArray);
        setAllPhotos(updatedArray);
        console.log(allPhotos);
    };
    return (
        <Context.Provider value={
            {
                allPhotos: allPhotos,
                toggleFavorite: toggleFavorite
            }
        }>
            {children}
        </Context.Provider>
    );
};
export { ContextProvider, Context };
/*
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo, 
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }
*/