import { AnyAction } from "redux"

import { IStore } from "./type"

const initialState = {
    list: [],
}

const showReducerCategory = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'category/setCategory':
            return { ...state, list: [...action.payload] }
        default:
            return state
    }
}

export default showReducerCategory;