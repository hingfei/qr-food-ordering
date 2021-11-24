import React from 'react';
import PaymentNavBar from "../PaymentNavBar";
import {Box} from "@mui/material";
import Footer from "../../../components/Footer";
import PaymentTitle from "../PaymentTitle";
import PaymentChoice from "../PaymentChoice";

function PaymentContainer() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <PaymentNavBar/>
            <PaymentTitle/>
            <PaymentChoice/>
            <Footer/>
        </Box>
    );
}

export default PaymentContainer;