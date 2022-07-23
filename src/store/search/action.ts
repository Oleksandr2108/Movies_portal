import { Dispatch } from "redux";
import { IStore } from "./type";


import getSearchName from "services/getSearch";

export const setSearchAction = (list: IStore['list']) => {
    return {
        type: 'search/setSearch',
        payload: list,
    }
}

export const loadSearch = (value: string | undefined) => async (dispatch: Dispatch) => {
    try {

        const response = await getSearchName(value)

        dispatch(setSearchAction(response.data))
    } catch (e) {
        console.log(e, 'Error')
    }
}