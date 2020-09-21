import React from "react";
import "./Header.scss";
import {NavBar} from "./navigation/NavBar";
import {FeedBack} from "./feedBack/FeedBack";

export const Header = ({routes}) => {

    return (
        <div className="header">
            <div>
                <div className="logo"></div>
                <NavBar routes={routes}/>
            </div>

            <FeedBack/>
        </div>
    )
}