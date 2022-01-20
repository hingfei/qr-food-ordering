import React from 'react';
import {Paper, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ProfileTitle() {
    return (
        <Paper  sx={{display: "flex", height: "10vw", alignItems: "center", 
                maxHeight: "75px"}}>
            <AccountCircleIcon fontSize={"medium"} sx={{ml: "16px"}}/>
            <Typography variant="h6" ml={2}>
                Profile
            </Typography>
        </Paper>
    );
}

export default ProfileTitle;