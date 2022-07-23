import { IStore } from "./type";

export const selectSearch = (state: { showReducerSearch: IStore }): IStore['list'] => state.showReducerSearch.list;
