import React, { useEffect } from "react";

import MoviesItem from "./components/MoviesItem";


import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "store/movies/action";
import { selectList } from "store/movies/selectors";
import { TypedDispatch } from "store";
import "./style.scss"



const MoviesList = () => {

    const dispatch = useDispatch<TypedDispatch>();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch])

    return (
        <div className="main-page">
            <div className="main-title">
                <h1 className="title"> MOVIESinfo </h1>
                <p className="subtitle">Самый популярный портал о фильмах </p>
            </div>
            <div className="wrapper-movies">
                {moviesList.slice(0, 8).map((list) => (
                    <MoviesItem item={list['show']} />
                ))}
            </div>
        </div>
    )
}

export default MoviesList