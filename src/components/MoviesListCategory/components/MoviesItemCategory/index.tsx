import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeDetailPage } from 'pages/DetailPage';
import { IMoviesDetail } from "types/IMoviesDetail";

import './style.scss'

interface IMoviesItemParams {
    item: IMoviesDetail
}

const MoviesItemCategory: React.FC<IMoviesItemParams> = ({ item }) => (

    <NavLink className='movies-category' to={routeDetailPage(item.id)}>
        <div className="wrapper-category">
            <img className="item-img__category" src={item.image.original} alt={''} />

            <div className="item-about">
                <h3 className="title-category">{item.name.toUpperCase()}</h3>

                <p className="genres-category">{item.genres}</p>
            </div>
        </div>
    </NavLink >

)

export default MoviesItemCategory