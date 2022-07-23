import { AnyAction } from "redux"

import { IStore } from "./type"

const initialState = {
    list: [],
}

const showReducerSearch = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'search/setSearch':
            return { ...state, list: [...action.payload] }
        default:
            return state
    }
}

export default showReducerSearch;