import React, { useContext } from "react";
import Image from "../components/Image.jsx";
import { Context } from "../Context.jsx";
import { getClass } from "../utils/index.js";
import { IAllPhotos } from "../interfaces.jsx";

const Photos = () => {
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { allPhotos } = allPhotosContext;
    const imageElements = allPhotos.map((photo: IAllPhotos, index: number) => (
        <Image key={photo.id} img={photo} className={getClass(index)}/>
    ))
    return (
        <main className="photos">
            { imageElements }
        </main>
    );
};
export default Photos;