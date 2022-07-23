import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeDetailPage } from 'pages/DetailPage';
import { IMoviesDetail } from "types/IMoviesDetail";

import DataView from "components/DataView";

import './style.scss'



interface IMoviesItemParams {
    item: IMoviesDetail
}

const MoviesItem: React.FC<IMoviesItemParams> = ({ item }) => (

    <NavLink className='movies-item' to={routeDetailPage(item.id)}>
        <img className="item-img" src={item.image?.original} alt={''} />

        <h3 className="title">{item.name.toUpperCase()}</h3>
        <div className="year-country">
            <span className="year"><DataView value={item.premiered} /></span>{" "}
            {<span className="country">{item.network?.country.name}</span>}
        </div>
        {item.genres.length > 0 ? (<p className="genres">{item.genres}</p>) : (<p>None</p>)}

    </NavLink >

)

export default MoviesItem
