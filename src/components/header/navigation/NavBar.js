import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.scss";
import Typography from "@material-ui/core/Typography";

export const NavBar = ({routes}) => {
let location = useLocation()
    return (
        <div className="nav-bar">
            {routes.map((element, index) => (
                <Link to={element.link} key={index} className={location.pathname === element.link ? 'active' : ''}>
                    <Typography variant="h5">{element.name}</Typography>
                </Link>
            ))}
        </div>
    )
}