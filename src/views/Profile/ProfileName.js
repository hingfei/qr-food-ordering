import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import logo from "../images/decklogo.jpg";
import "./ProfileName.css";

function ProfileName() {
    return (
        <Box
            component="div"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
        >
            <Box>
                <Avatar src={logo} alt="logo" id="logo" />
            </Box>
            <Typography variant="h5" align="center" fontWeight="bold" mt={3}>
                The Deck Restaurant
            </Typography>
        </Box>
    );
}

export default ProfileName;