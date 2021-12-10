import React from 'react';
import Box from '@mui/material/Box';
import Footer from "../../../components/Footer";
import ProfileQrGenerator from "../ProfileQrGenerator";
import ProfileNavBar from "../ProfileNavBar";
import ProfileQrDownloadButton from "../ProfileQrDownloadButton";
import ProfileName from '../ProfileName';
import {Paper} from '@mui/material';

function ProfileContainer(){
    return (
        <Box sx={{minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <ProfileNavBar/>
            <Box display="flex">
                <Paper sx={{minWidth:"30%", minHeight:"70vh", alignSelf:"center"}}>
                    <ProfileName/>
                </Paper>
                <Box display="flex"
                     minWidth="70%"
                     flexDirection="column" 
                     justifyContent="center" 
                     alignItems="center"
                >
                    <ProfileQrGenerator/>
                    <ProfileQrDownloadButton/>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
}

export default ProfileContainer;