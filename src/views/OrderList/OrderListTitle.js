import React from 'react';
import {Paper, Typography} from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';

function OrderListTitle() {
    return (
        <Paper  sx={{display: "flex", height: "10vw", alignItems: "center", 
                maxHeight: "75px"}}>
            <ListAltIcon fontSize={"medium"} sx={{ml: "16px"}}/>
            <Typography variant="h6" ml={2}>
                Order List
            </Typography>
        </Paper>
    )
}

export default OrderListTitle;