import React from "react";
import OrderListNavBar from "../OrderListNavBar";
import OrderListTitle from "../OrderListTitle";
import OrderListCard from "../OrderListCard";
import {Box} from '@mui/material';
import Footer from "../../../components/Footer";

function OrderListContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <OrderListNavBar/>
            <OrderListTitle/>
            <OrderListCard/>

            <Footer/>
        </Box>
    )
}

export default OrderListContainer;