import React from 'react';
import Box from '@mui/material/Box';
import Footer from "../../../components/Footer";
import ProfileQrGenerator from "../ProfileQrGenerator";
import ProfileNavBar from "../ProfileNavBar";
import ProfileQrDownloadButton from "../ProfileQrDownloadButton";

function ProfileContainer(){
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <ProfileNavBar/>
            <Box sx={{
                display: "inline-flex",
                flexDirection:"column",
                alignItems: "center",
                minHeight: "70vh",
                justifyContent: "center"
            }}>
                
                <ProfileQrGenerator/>
                <ProfileQrDownloadButton/>
            </Box>
            <Footer/>
        </Box>
    );
}

export default ProfileContainer;