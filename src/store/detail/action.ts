import { Dispatch } from "redux";
import { IStore } from "./type";

import getMovieDetail from "services/getMovieDetail";

export const setMovieDetailAction = (list: IStore['list']) => {
    return {
        type: 'detail/setMovieDetailAction',
        payload: list,
    }
}

export const loadMovieDetail = (id: string) => async (dispatch: Dispatch) => {
    try {
        let responseArray = []
        const response = await getMovieDetail(id)
        responseArray[0] = response.data
        dispatch(setMovieDetailAction(responseArray))
    } catch (e) {
        console.log(e, 'Error')
    }
}