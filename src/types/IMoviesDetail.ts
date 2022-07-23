

interface ICountry {
    name: string;
    code: string;
}

interface IImage {
    original: string;
}

interface INetwork {
    id: number;
    name: string;
    country: ICountry;


}

interface IRating {
    average: string;
}

interface IMoviesDetail {
    id: string;
    name: string;
    genres: string;
    premiered: string;
    language: string;
    network: INetwork;
    image: IImage;
    rating: IRating;
    summary: string;

}

export type { IMoviesDetail }