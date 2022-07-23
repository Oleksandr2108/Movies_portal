import axios, { AxiosResponse } from "axios";

const getMovieDetail = (id: string): Promise<AxiosResponse> => {
    return axios.get(`https://api.tvmaze.com/shows/${id}`);
};

export default getMovieDetail;
