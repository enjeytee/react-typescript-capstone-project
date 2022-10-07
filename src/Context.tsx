import React, { useState, ReactNode, useEffect } from "react";

interface ItfAllPhotos {
    url: string;
    id: string;
    isFavorite: boolean;
};
 /* UPDATE THIS LATER */
interface ItfContext {
    allPhotos: ItfAllPhotos[]
};

 /* UPDATE THIS LATER */
interface ItfProps {
    children: ReactNode;
};


const Context = React.createContext<ItfContext | null>(null);
const ContextProvider = ({ children }: ItfProps) => {
    const [allPhotos, setAllPhotos] = useState<ItfAllPhotos[]>([])
    useEffect(() => {
        const url: string = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);
    console.log(allPhotos);
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