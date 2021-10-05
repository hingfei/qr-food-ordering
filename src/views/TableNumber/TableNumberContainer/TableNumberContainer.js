import React from 'react';
import TableNumberNavBar from "../TableNumberNavBar";
import TableNumberRestaurantName from "../TableNumberRestaurantName";
import TableNumberInputField from "../TableNumberInputField";
import TableNumberButton from "../TableNumberButton";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";

function TableNumberContainer(props) {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <TableNumberNavBar/>
            <TableNumberRestaurantName/>
            <TableNumberInputField/>
            <TableNumberButton/>
            <Footer/>
        </Box>
    );
}

export default TableNumberContainer;