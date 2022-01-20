import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Footer from '../../../components/Footer';
import OrderSummary from "../OrderSummary";
import BusinessSumTitle from "../BusinessSumTitle";
import OrderGraph from "../OrderGraph";
import PopularItems from "../PopularItems";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import PaymentMethod from "../PaymentMethod";
import BusinessSumNavBar from "../BusinessSumNavBar";


function BusinessSumContainer(){

    const [isLoading, setIsLoading] = useState(true)
    const [orderDetail, setOrderDetail] = useState([])

    const AuthConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    };

    useEffect(() => {
        if (isLoading) {
            axios.get('restaurant/orders', AuthConfig)
                .then((res) => {
                    setOrderDetail(res.data);
                    setIsLoading(false)
                }).catch(err => {
                console.log(err)
            })
        }
    })

    if (isLoading){
        return(
            <>
                <LoadingSpinner/>
            </>
        )
    }

    return(
        <Box sx={{minHeight:"100vh",backgroundColor:"FBF1E4"}}>
            <BusinessSumNavBar/>
            <Box>
                <BusinessSumTitle/>
                <OrderSummary data = {orderDetail}/>
                <OrderGraph data = {orderDetail}/>
                <Box display="flex"
                     flexDirection="row"
                     columnGap={0}
                     flexWrap="wrap"
                     mt={5}
                     mb={5}
                     sx={{minHeight:"20vh",
                         justifyContent: "center"}}>
                <PopularItems data ={orderDetail}/>
                <PaymentMethod data ={orderDetail}/>
                </Box>
            </Box>
            <br/>
            <Footer/>
        </Box>
    );
}

export default BusinessSumContainer;