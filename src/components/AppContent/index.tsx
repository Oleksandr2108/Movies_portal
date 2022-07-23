import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import CategoryPage, { routeMain as routeCategoryPage } from "pages/CategoryPage";
import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage";
import SearchPage, { routeMain as routeSearchPage } from "pages/SearchPage";
import DetailPage, { routeMain as routeDetailPage } from 'pages/DetailPage';

import Header from 'components/Header'
import Footer from 'components/Footer';

import './style.scss'


const AppContent = () => {
    return (
        <div className='app-content'>
            <Header />
            <main>
                <Switch>
                    <Route exact path={routeMainPage()} component={MainPage} />
                    <Route exact path={routeCategoryPage()} component={CategoryPage} />
                    <Route exact path={routeAboutPage()} component={AboutPage} />
                    <Route exact path={routeSearchPage()} component={SearchPage} />
                    <Route exact path={routeDetailPage()} component={DetailPage} />
                    <Redirect
                        to={{
                            pathname: routeMainPage()
                        }}
                    />

                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default AppContent