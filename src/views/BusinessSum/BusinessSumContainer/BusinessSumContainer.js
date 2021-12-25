import React from 'react';
import {Box} from "@mui/material";
import Footer from '../../../components/Footer';
import ProfileNavBar from "../../Profile/ProfileNavBar";
import OrderSummary from "../OrderSummary";
import BusinessSumTitle from "../BusinessSumTitle";
import OrderGraph from "../OrderGraph";
import PopularItems from "../PopularItems";

function BusinessSumContainer(){
    return(
        <Box sx={{minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <ProfileNavBar/>
            <Box>
                <BusinessSumTitle/>
                <OrderSummary/>
                <OrderGraph/>
                <PopularItems/>
            </Box>
            <br/>
            <Footer/>
        </Box>
    );
};

export default BusinessSumContainer;