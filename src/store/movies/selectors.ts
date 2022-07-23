import { IStore } from "./type";

export const selectList = (state: { moviesReducer: IStore }): IStore['list'] => state.moviesReducer.list;
