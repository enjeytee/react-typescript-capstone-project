export interface IAllPhotos {
    url: string;
    id: string;
    isFavorite: boolean;
};
export interface IContext {
    allPhotos: IAllPhotos[];
    toggleFavorite: (id: string) => void;
    addToCart: (img: IAllPhotos) => void;
    cartItems: IAllPhotos[];
    removeFromCart: (id: string) => void;
    emptyCart: () => void;
};

export interface IContextProps {
    children?: React.ReactNode;
};

export interface IImageProps extends IContextProps{
    className?: string | undefined;
    img: IAllPhotos;
};

export interface IUseHover {
    hovered: boolean;
    ref: React.RefObject<HTMLDivElement>
};