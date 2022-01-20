import React from "react";
import {Box, Button} from "@mui/material";
import {saveAs} from "file-saver";

function ProfileQrGenerator({res_ID}) {
    // todo: change localhost
    const QrURL = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=http://localhost:3000/check_in/"+res_ID

    const handleDownload = () => {
        saveAs(QrURL, 'restaurantQRcode.png')
    }


    console.log(res_ID)
    return (
        <Box display="flex"
             flexDirection="column"
             alignItems="center">
            <Box>
                <img
                    id="QrCode"
                    src={QrURL}
                    alt="QR CODE"
                    title="YOUR RESTAURANT QR CODE"
                />
            </Box>
            <Box mt={3}>
                <Button
                    color="primary"
                    size="large"
                    variant="outlined"
                    onClick={() => handleDownload()}
                >
                    DOWNLOAD
                </Button>
            </Box>
        </Box>
    );
}

export default ProfileQrGenerator;
