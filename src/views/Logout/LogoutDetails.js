import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import './LogoutDetails.css';
import logout_img from '../images/logout_img.jpg';
 
const handleOnClick = () => {
    console.log("Sign in again");
}

function LogoutDetails() {
    return (
        <Box minHeight="80vh" display="flex">
            <Box minWidth="40%" alignSelf="center">
                <img src={logout_img} alt="logout" id="logout_img"/>
            </Box>
            <Box 
                minWidth="60%" 
                justifyContent="center" 
                display="flex" 
                flexDirection="column"
                columnGap={3}
            >
                <Typography variant="h3" align="center">
                    Successfully Logged Out
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{mt:3}}>
                    Thank you for using GreatFood.
                </Typography>
                <Button
                    onClick={handleOnClick}
                    id="sign_in_button" 
                    variant="contained" 
                    size="large"
                >
                    Sign in Again
                </Button>
            </Box>
        </Box>
    );
}

export default LogoutDetails;