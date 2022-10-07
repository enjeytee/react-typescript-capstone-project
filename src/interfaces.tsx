export interface IAllPhotos {
    url: string;
    id: string;
    isFavorite: boolean;
};
export interface IContext {
    allPhotos: IAllPhotos[];
    toggleFavorite: (id: string) => void;
}