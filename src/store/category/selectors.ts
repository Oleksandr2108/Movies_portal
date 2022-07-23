import { IStore } from "./type";

export const selectCategory = (state: { showReducerCategory: IStore }): IStore['list'] => state.showReducerCategory.list;
