import React from "react";
import TableNumberNavBar from "../../TableNumber/TableNumberNavBar";
import LoginBackground from "../LoginBackground";
import {Box} from '@mui/material';
import Footer from "../../../components/Footer";


function LoginContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <TableNumberNavBar/>
            <Box sx={{
                display: "inline-flex",
                flexDirection:"column",
                alignItems: "center",
                minHeight: "70vh",
                justifyContent: "center"
            }}>
                <LoginBackground/>
            </Box>
            <Footer/>

        </Box>
    );
}

export default LoginContainer;