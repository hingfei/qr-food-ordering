import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useHistory} from "react-router-dom";


function ReceiptBackButton() {
    const history = useHistory();

    function handleBackButton(){
        // clear storage and restart
        sessionStorage.clear()
        history.push('/table_number')
    }
    return (
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"}}>
            <Button id="bottom_button"
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