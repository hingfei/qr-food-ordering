import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Paper, Typography} from "@mui/material";

function CartTitle() {
    return (
        <Paper elevation={3}
               sx={{display: "flex", width: "100%",
                   height: "10vw", justifyItems:"center", alignItems:"center",
               maxHeight: "75px"}}>
            <ShoppingCartIcon fontSize={"medium"} sx={{ml : "16px"}}/>
            <Typography variant={"h6"} ml={2} >
                Order Summary
            </Typography>
        </Paper>
    );
}

export default CartTitle;