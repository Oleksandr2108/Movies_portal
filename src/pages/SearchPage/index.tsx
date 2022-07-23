import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import routeMain from "./routes";

import ShowSearchList from "components/ShowSearchList";

import { loadSearch } from "store/search/action";
import { selectSearch } from "store/search/selectors";
import { TypedDispatch } from "store";
import SearchImg from "assets/search.png"
import './style.scss'


const SearchPage = () => {

    const [valueInput, setValueInput] = useState('')
    const dispatchSearch = useDispatch<TypedDispatch>();
    const ShowSearch = useSelector(selectSearch)

    const getSubmit = (e: any) => {
        e.preventDefault()
        if (valueInput) {
            dispatchSearch(loadSearch(valueInput))
            setValueInput('')
        }

    }
    return (
        <section className="search-page">
            <div className="wrapper">
                <h1 className="search-title">Поиск по категории </h1>
                <form className="search-form" onSubmit={(e) => getSubmit(e)}>
                    <button
                        className="search-btn"
                        type="submit"

                    ><img src={SearchImg} /></button>
                    <input
                        className="search-input"
                        placeholder="Example: drama"
                        type="text"
                        onChange={(e) => setValueInput(e.target.value)}
                        value={valueInput}
                    ></input>
                </form>


                <h3 className="result">Результаты поиска:</h3>
                {ShowSearch.length > 0 ? (<ShowSearchList list={ShowSearch} />) :
                    <p className="error">Введите поисковой запрос для отображения результатов</p>}
            </div>
        </section>
    )
}

export { routeMain };

export default SearchPage