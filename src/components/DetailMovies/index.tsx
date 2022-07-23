import React, { useEffect } from "react";

import { ID } from "types/ID";

import DataView from "components/DataView";
import prepareSummary from "utils/prepareSummary";
import { useParams } from "react-router-dom"

//redux
import { selectMovieDetail } from "store/detail/selectors";
import { loadMovieDetail } from "store/detail/action";
import Icon from "assets/star.png"
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "store";



import './style.scss'

const DetailMovies = () => {

    const { id } = useParams<ID>();

    const dispDetail = useDispatch<TypedDispatch>()
    const showDetail = useSelector(selectMovieDetail)

    useEffect(() => {
        dispDetail(loadMovieDetail(id))
    }, [id, dispDetail])





    return (
        <section className="detail-page">
            {showDetail.length > 0 ? (
                <div className="wrapper">
                    <img className="main-img" src={showDetail[0].image?.original} alt={''} />

                    <div className="offer">
                        <div className="offer-title">
                            <h1 className="title">{showDetail[0].name.toUpperCase()}</h1>
                            <div className="rating">
                                <img className="icon" src={Icon} alt={''} />

                                <h2 className="rating-num">{showDetail[0].rating.average ? (showDetail[0].rating?.average) : 0}/10</h2>
                            </div>
                        </div>
                        <div className="offer-info">
                            <div className=" offer-info__title">
                                <p>ГОД ВЫХОДА:</p>
                                <p>СТРАНА:</p>
                                <p>ЖАНР:</p>
                                <p>ОПИСАНИЕ:</p>
                            </div>
                            <div className="offer-info__summary">
                                <p><DataView value={showDetail[0].premiered} /></p>
                                <p>{showDetail[0].network?.country.name ? (showDetail[0].network.country.name) : <p>None</p>}</p>
                                <p>{showDetail[0].genres}</p>
                                <p className="summary">{prepareSummary(showDetail[0].summary)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <h1> None </h1>
            }
        </section>
    )
}


export default DetailMovies