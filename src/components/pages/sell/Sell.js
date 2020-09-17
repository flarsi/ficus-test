import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import "./Sell.scss"
import {CardField} from "./cardField/CardField";
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

export const Sell = () => {

    const [state, setState] = useState({page: 1, isFetched: false});

    axios.get("https://api.jqestate.ru/v1/properties/country?pagination[offset]=32")
        .then(res => {
            if (state.isFetched === false) {
                setState({...state ,houses: splitHouses(res.data.items), isFetched: true})
            }
        })
        .catch(err => {
            console.log(err)
        })

    const handleChangePage = (event, value) => {
        setState({...state, page: value});
    }

    const splitHouses = (houses) => {
        let housesArr = [];
        for (let i = 0; i < houses.length; i++) {
            if ((i + 1) % 8 === 0) {
                housesArr.push(houses.splice(0, 8))
                i = 0
            }
        }
        return housesArr
    }

    return (
        <div className="sell">
            <Typography variant="h4">Elite real estate in the Moscow region</Typography>
            <div className="hr"></div>
            {state.houses ?
                <div className="sell-content">
                    <CardField data={state.houses[state.page-1]}/>
                    <Pagination count={state.houses.length} page={state.page} onChange={handleChangePage} className="pagination"/>
                </div>
                : <CircularProgress className="loader"/>}
        </div>
    )
}