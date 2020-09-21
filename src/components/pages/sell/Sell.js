import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import "./Sell.scss"
import {CardField} from "./cardField/CardField";
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

export const Sell = () => {

    const [state, setState] = useState({page: 1, isFetched: false});

    axios.get("https://api.jqestate.ru/v1/properties/country?pagination[offset]="+ 32 * state.page)
        .then(res => {
            if (state.isFetched != res.data.pagination.offset) {
                setState({...state ,houses: res.data.items, isFetched: res.data.pagination.offset, total: res.data.pagination.total})
            }else if(state.page != res.data.pagination.offset){
                // console.log(state.page === res.data.pagination.offset/32)
                // console.log(res.data.pagination.offset/32)
            }
        })
        .catch(err => {
            console.log(err)
        })

    const handleChangePage = (event, value) => {
        setState({...state, page: value});

    }

    return (
        <div className="sell">
            <Typography variant="h4">Elite real estate in the Moscow region</Typography>
            <div className="hr"></div>
            {state.houses ?
                <div className="sell-content">
                    <Pagination count={Math.round(state.total/32)} page={state.page} onChange={handleChangePage} className="pagination"/>
                    <CardField data={state.houses}/>
                    <Pagination count={Math.round(state.total/32)} page={state.page} onChange={handleChangePage} className="pagination"/>
                </div>
                : <CircularProgress className="loader"/>}
        </div>
    )
}