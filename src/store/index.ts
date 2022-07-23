import { legacy_createStore as createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';

import moviesReducer from './movies/reducer';
import showReducerCategory from './category/reducer';
import showReducerSearch from './search/reducer';
import showReducerMovieDetail from './detail/reducer';


const rootReducer = combineReducers({ moviesReducer, showReducerCategory, showReducerSearch, showReducerMovieDetail })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export default store;
