import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useLocation} from "react-router-dom";



export const BreadCrumbs = ({routes}) => {
    let location = useLocation()

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    luxury suburban real estate
                </Link>
                {
                    routes.map((element, index) => {
                        if(location.pathname === element.link){
                            return (
                                <Typography color="textPrimary" key={index}>{element.name}</Typography>
                            )
                        }
                    })
                }
            </Breadcrumbs>
        </div>
    );
}

