import { Dispatch } from "redux";
import { IStore } from "./type";

import getCategory from "services/getCategory";

export const setCategoryAction = (list: IStore['list']) => {
    return {
        type: 'category/setCategory',
        payload: list,
    }
}

export const loadCategory = (value: string | undefined) => async (dispatch: Dispatch) => {
    try {

        const response = await getCategory(value)

        dispatch(setCategoryAction(response.data))
    } catch (e) {
        console.log(e, 'Error')
    }
}