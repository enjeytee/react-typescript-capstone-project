import React, { useContext } from "react";
import Image from "../components/Image.jsx";
import { Context } from "../Context.jsx";
import { getClass } from "../utils/index.js";

const Photos = () => {
    const allPhotosContext = useContext(Context);
    if (!allPhotosContext) return null;
    const { allPhotos } = allPhotosContext;
    const imageElements = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)}/>
    ))
    return (
        <main className="photos">
            { imageElements }
        </main>
    );
};
export default Photos;