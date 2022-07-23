import axios from "axios";

const getMovies = (value: string | undefined) => axios.get('https://api.tvmaze.com/search/shows?q=' + value);

export default getMovies
