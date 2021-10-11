import React from 'react';
import CartNavBar from "../CartNavBar";
import CartTitle from "../CartTitle";
import CartTable from "../CartTable";
import {Box} from "@mui/material";

function CartContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <CartNavBar/>
            <CartTitle/>
            <CartTable/>
        </Box>
    );
}

export default CartContainer;