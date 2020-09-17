import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Header} from "./components/header/Header";
import {Sell} from "./components/pages/sell/Sell";
import {Rent} from "./components/pages/rent/Rent";
import {Villages} from "./components/pages/ villages/Villages";
import {AboutUs} from "./components/pages/aboutUs/AboutUs";
import {BreadCrumbs} from "./components/breadcrumbs/BreadCrumbs";

function App() {

    const routes = [
        {
            name : 'About us',
            link : '/aboutUs',
            page : <AboutUs/>
        },
        {
            name : 'Villages',
            link : '/villages',
            page : <Villages/>
        },
        {
            name : 'Rent',
            link : '/rent',
            page : <Rent/>
        },
        {
            name : 'Sell',
            link : '/',
            page : <Sell/>
        }
    ]



    return (
        <div className="App">
            <Router>
                <Header routes={routes}/>
                <div className="hr"></div>
                <div className="content">
                    <BreadCrumbs routes={routes}/>
                    <Switch>
                        {routes.map((element, index) => (
                            <Route path={element.link} key={index}>
                                {element.page}
                            </Route>
                        ))
                        }
                    </Switch>
                </div>
            </Router>

        </div>
    );
}

export default App;
