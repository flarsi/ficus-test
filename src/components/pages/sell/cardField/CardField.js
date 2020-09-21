import React from "react";
import "./CardField.scss"
import {HouseCard} from "./card/Card";


export const CardField = ({data}) => {
    return (
        <div className="cardField">
            {data && data.map((element, index) => {
                    return (
                        <HouseCard data={element} key={index}/>
                    )
                }
            )}
        </div>
    )
}