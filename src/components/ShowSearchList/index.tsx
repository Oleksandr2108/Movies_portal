import React from "react";
import ShowSearchItem from "./components/ShowSearchItem";
import { IShow } from "types/IShow";


import "./style.scss"


interface IShowListParams {
    list: IShow[];
}

const ShowSearchList: React.FC<IShowListParams> = ({ list }) => {

    return (
        <div className="movies-list__search">
            {list.map((show: IShow) => {
                return <ShowSearchItem key={show.show.id} item={show['show']} />
            })}
        </div>
    )
}

export default ShowSearchList