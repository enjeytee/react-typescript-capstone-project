import React, { useState, useEffect, createContext } from "react";
// import { IAllPhotos, IContext } from "./interfaces.jsx";


interface IAllPhotos {
    url: string;
    id: string;
    isFavorite: boolean;
};
interface IContext {
    allPhotos: IAllPhotos[]
}
type PropsType = {
    children: React.ReactNode;
}
const Context = createContext<IContext | null>(null);
const ContextProvider = ({ children }: PropsType) => {
    const [allPhotos, setAllPhotos] = useState<IAllPhotos[]>([]);
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);
    return (
        <Context.Provider value={
            {
                allPhotos: allPhotos
            }
        }>
            {children}
        </Context.Provider>
    );
};
export { ContextProvider, Context };