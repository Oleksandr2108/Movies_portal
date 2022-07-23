import { Dispatch } from "redux";
import { IStore } from "./type";
import getMovies from "services/getMovies";


export const setMoviesAction = (list: IStore['list']) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
}

export const loadMovies = () => async (dispatch: Dispatch) => {
    try {
        const response = await getMovies('girls')

        dispatch(setMoviesAction(response.data))
    } catch (e) {
        console.log(e, 'Error')
    }
}