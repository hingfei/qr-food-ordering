import React from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";


function TableNumberContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <TableNumberNavBar/>
            <Box sx={{ display: "inline-flex",
                flexDirection:"column",
                alignItems: "center" ,
                minHeight: "80vh",
                justifyContent: "center" ,
            }}>
                <TableNumberRestaurantName/>
                <TableNumberInputField/>
            </Box>
            <Footer/>
        </Box>
    );
}

export default TableNumberContainer;