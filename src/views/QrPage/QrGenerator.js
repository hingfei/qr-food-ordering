import React from 'react';
import {Box, Typography} from "@mui/material";


function QrGenerator(){
    return(
        <Box sx={{display:"inline-flex", flexDirection:"column", alignItems:"center"}}>
        <Typography mb={6} variant="h4">YOUR RESTAURANT QR CODE</Typography>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=http://localhost:3000/table_number" alt="QR CODE" title="YOUR QR CODE"/>
        </Box>
    );
}

export default QrGenerator;