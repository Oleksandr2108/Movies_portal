import React, { useEffect } from "react";

import MoviesItemCategory from "./components/MoviesItemCategory";
import { IMoviesDetail } from "types/IMoviesDetail";

import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "store/category/selectors";
import { loadCategory } from "store/category/action";

import { TypedDispatch } from "store";

import "./style.scss"




const MoviesListCategory = () => {

    const dispatchCategory = useDispatch<TypedDispatch>();
    const moviesList = useSelector(selectCategory);

    useEffect(() => {
        dispatchCategory(loadCategory(''));
    }, [dispatchCategory])

    const genres = 'Comedy';

    const showFilter = moviesList.filter((show: IMoviesDetail) => ((show.genres[0] === genres) || (show.genres[1] === genres) || (show.genres[2] === genres)))

    return (

        <section className="main-page">

            <div className="wrapper">
                <div className="offer">
                    <h1 className="title">Выбранная категория: </h1>
                    <span className="name">Comedy</span>
                </div>
                {/* {moviesList.length > 0 && <MoviesListCategory list={moviesList} />} */}
                <div className="movies-list__category">
                    {
                        showFilter.map((show: IMoviesDetail) =>
                            (<MoviesItemCategory key={show.id} item={show} />))
                    }
                </div>
            </div>


        </section>

    )
}

export default MoviesListCategory