import React from "react";
import OrderListNavBar from "../OrderListNavBar";
import OrderListTitle from "../OrderListTitle";
import {Box} from '@mui/material';
import Footer from "../../../components/Footer";

function OrderListContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <OrderListNavBar/>
            <OrderListTitle/>

            <Footer/>
        </Box>
    )
}

export default OrderListContainer;