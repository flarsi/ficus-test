import React from 'react';
import Modal from '@material-ui/core/Modal';
import "./Modal.scss"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LayersIcon from "@material-ui/icons/Layers";
import HouseIcon from "@material-ui/icons/House";
import CardActionArea from "@material-ui/core/CardActionArea";

export function HouseModal({open, handleClose, data}) {

    const body = (
        <div className="modal">
            <CardActionArea>
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
        </div>
    );

    return (
        <div>
            {open &&
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            }
        </div>
    );
}
