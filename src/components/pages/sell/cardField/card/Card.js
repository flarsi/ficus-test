import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LayersIcon from "@material-ui/icons/Layers";
import HouseIcon from "@material-ui/icons/House";
import {HouseModal} from "./modal/Modal";

export const HouseCard = ({data}) => {


    const [modalOpen, setModalOpen] = useState();

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <div className="card">
            <Card  onClick={handleOpen}>
                {data ?
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="House"
                            height="240"
                            image="house.jpg"
                            title="House"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                House in "{data.location.settlementName}", {data.location.mkadDistance} км,
                                ID {data.id}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                <span>
                                    ${data.saleOffer ? data.saleOffer.price : "some price"}
                                </span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className="areas">
                                <span>
                                    <LayersIcon/>
                                    {data.landDetails.area ? data.landDetails.area : "some area"} coт
                                </span>
                                <span>
                                    <HouseIcon/>
                                    {data.specification.area ? data.specification.area : "some area"} м<span>2</span>
                                </span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    :
                    <div>
                        Card is empty
                    </div>
                }
            </Card>
            <HouseModal data={data} open={modalOpen} handleClose={handleClose}/>
        </div>
    )
}