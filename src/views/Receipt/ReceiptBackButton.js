import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


function ReceiptBackButton() {
    function handleBackButton(){
        console.log('clicked back button')
    }
    return (
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"}}>
            <Button id="butt2"
                    variant={"contained"}
                    aria-label="back-to-menu"   onClick={handleBackButton}>
                <ArrowBackIosNewIcon />
                <Typography variant={"h6"} ml={2} >
                    Back
                </Typography>
            </Button>
        </Box>

    );
}

export default ReceiptBackButton;