import React from 'react';
import {Button, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


function ReceiptBackButton() {
    function handleBackButton(){
        console.log('clicked back button')
    }
    return (
        <Button id="butt1" variant={"contained"} color={"primary"} size="large" aria-label="back-to-menu"   onClick={handleBackButton}>
            <ArrowBackIosNewIcon />
            <Typography variant={"h6"} ml={2} >
                Back
            </Typography>
        </Button>
    );
}

export default ReceiptBackButton;