import React from "react";
import "./FeedBack.scss";
import Button from "@material-ui/core/Button";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";

export const FeedBack = () => {
    const theme = createMuiTheme({
        palette: {
            primary: green,
        }
    })

    return (
        <div className="feedBack">
            <Typography variant="h5" className="telephone-number">+38 (066) 45-069-25</Typography>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className="feedBack-btn">Feed back call</Button>
            </ThemeProvider>
        </div>
    )
}