import React from 'react';
import {Box, Button} from "@mui/material";

function QrDownloadButton(){
    function handleDownload(){
        console.log('clicked download button')
    }
    return(
        <Box mt={3}>
            <Button color="primary"
                    size='lg'
                    variant = "outlined"
                    onClick ={()=> handleDownload()}
            >DOWNLOAD
            </Button>
        </Box>
    );
}

export default QrDownloadButton;