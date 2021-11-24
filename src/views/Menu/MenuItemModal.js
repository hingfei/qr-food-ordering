import React, {useState} from 'react';
import {Button, CardActions, CardContent, Dialog, DialogActions, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import NumberInputSpinner from "../../components/NumberInputSpinner";

// Todo: pass down Menu items and create a modal
function MenuItemModal({id, title, price, description, image}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Button onClick={handleClickOpen}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx = {{width : "100%", height:"15vw", objectFit: "cover"}}
                />
            </Button>
            <Dialog open={open}
                    maxWidth={"sm"}
                    fullWidth={true}
                    onClose={handleClose}
            >
                <Card sx={{ width : "100%" }}>
                    <CardMedia
                        component="img"
                        sx = {{width : "100%", height:"30vw", objectFit: "fill"}}
                        image={image}
                        alt={title}
                    />
                    <CardContent sx={{marginLeft : "8px"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" pt={3}>
                            RM {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NumberInputSpinner id={id} title={title} price={price} />
                    </CardActions>
                </Card>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MenuItemModal;