export interface IAllPhotos {
    url: string;
    id: string;
    isFavorite: boolean;
};
export interface IContext {
    allPhotos: IAllPhotos[];
    toggleFavorite: (id: string) => void;
    addToCart: (img: IAllPhotos) => void;
    cartItem: IAllPhotos[];
    removeFromCart: (id: string) => void;
};

export interface IContextProps {
    children?: React.ReactNode;
};

export interface IImageProps extends IContextProps{
    className: string | undefined;
    img: IAllPhotos;
};