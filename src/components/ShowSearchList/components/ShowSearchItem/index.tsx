import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeDetailPage } from 'pages/DetailPage';
import { IMoviesDetail } from "types/IMoviesDetail";

import './style.scss'

interface IMoviesItemParams {
    item: IMoviesDetail
}

const ShowSearchItem: React.FC<IMoviesItemParams> = ({ item }) => (
    <NavLink className='movies-search' to={routeDetailPage(item.id)}>
        <div className="wrapper-search">
            <img className="item-img__search" src={item.image?.original} />
            <div className="item-about__search">
                <h3 className="title-search">{item.name}</h3>
                <p className="genres-search">{item.genres}</p>
            </div>
        </div>
    </NavLink >
)

export default ShowSearchItem