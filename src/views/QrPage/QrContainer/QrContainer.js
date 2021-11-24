import React from 'react';
import Box from '@mui/material/Box';
import Footer from "../../../components/Footer";
import QrGenerator from "../QrGenerator";
import QrNavBar from "../QrNavBar";
import QrDownloadButton from "../QrDownloadButton";

function QrContainer(){
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <QrNavBar/>
            <Box sx={{
                display: "inline-flex",
                flexDirection:"column",
                alignItems: "center",
                minHeight: "70vh",
                justifyContent: "center"
            }}>
                
                <QrGenerator/>
                <QrDownloadButton/>
            </Box>
            <Footer/>
        </Box>


    );
}

export default QrContainer;