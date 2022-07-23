import { IStore } from "./type";

export const selectMovieDetail = (state: { showReducerMovieDetail: IStore }): IStore['list'] => state.showReducerMovieDetail.list;
