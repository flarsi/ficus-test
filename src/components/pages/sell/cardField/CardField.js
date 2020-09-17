import React from "react";
import "./CardField.scss"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import HouseIcon from '@material-ui/icons/House';
import LayersIcon from '@material-ui/icons/Layers';

export const CardField = ({data}) => {
    return (
        <div className="cardField">
            {data && data.map((element, index) => (
                <Card className="card" key={index}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="House"
                            height="140"
                            image="house.jpg"
                            title="House"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                House in "{element.location.settlementName}", {element.location.mkadDistance} км, ID {element.id}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                ${element.saleOffer.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className="areas">
                                <span>
                                    <LayersIcon/>
                                    {element.landDetails.area} coт
                                </span>
                                <span>
                                    <HouseIcon/>
                                    {element.specification.area} м<span>2</span>
                                </span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}

        </div>
    )
}