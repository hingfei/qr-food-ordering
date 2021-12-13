import React from "react";
import { Box } from "@mui/material";

function ProfileQrGenerator() {
    return (
        <Box>
            <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=http://localhost:3000/table_number"
                alt="QR CODE"
                title="YOUR QR CODE"
            />
        </Box>
    );
}

export default ProfileQrGenerator;
