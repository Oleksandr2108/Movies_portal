import React from "react";
import { NavLink } from "react-router-dom";



import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeCategoryPage } from "pages/CategoryPage";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeSearchPage } from "pages/SearchPage";


import Img from "assets/Logo.svg"
import './style.scss'


const Header = () => {

    return (
        <header className="header">
            <div className="logo"><img src={Img} /></div>

            <nav>
                <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
                    Главная
                </NavLink>

                <NavLink to={routeCategoryPage()} activeClassName={'linkActive'}>
                    Фильмы по категории
                </NavLink>
                <NavLink to={routeAboutPage()} activeClassName={'linkActive'}>
                    О нас
                </NavLink>
                <NavLink to={routeSearchPage()} activeClassName={'linkActive'}>
                    Поиск
                </NavLink>
            </nav>

        </header >
    )


}

export default Header