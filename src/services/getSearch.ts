import axios from "axios";

const getSearchName = (value: string | undefined) => {

    return axios.get('https://api.tvmaze.com/search/shows?q=' + value)
}

export default getSearchName