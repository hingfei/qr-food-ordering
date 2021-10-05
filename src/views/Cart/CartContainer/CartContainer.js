import React from 'react';
import CartNavBar from "../CartNavBar";
import CartTitle from "../CartTitle";
import CartTable from "../CartTable";
import CartTotal from "../CartTotal";
import CartConfirmButton from "../CartConfirmButton";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";

function CartContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <CartNavBar/>
            <CartTitle/>
            <CartTable/>
            <CartTotal/>
            <CartConfirmButton/>
            <Footer/>
        </Box>
    );
}

export default CartContainer;