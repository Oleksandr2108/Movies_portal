import { AnyAction } from "redux"

import { IStore } from "./type"

const initialState = {
    list: [],
}

const showReducerMovieDetail = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'detail/setMovieDetailAction':
            return { ...state, list: [...action.payload] }
        default:
            return state
    }
}

export default showReducerMovieDetail;