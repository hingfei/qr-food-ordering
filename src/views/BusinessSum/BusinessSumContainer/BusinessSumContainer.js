import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Footer from '../../../components/Footer';
import ProfileNavBar from "../../Profile/ProfileNavBar";
import OrderSummary from "../OrderSummary";
import BusinessSumTitle from "../BusinessSumTitle";
import OrderGraph from "../OrderGraph";
import PopularItems from "../PopularItems";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";

function BusinessSumContainer(){

    const [isLoading, setIsLoading] = useState(true)
    const [paymentDetail, setPaymentDetail] = useState([])
    const [orderDetail, setOrderDetail] = useState([])

    useEffect(() => {
        if (isLoading) {
            axios.get('orders/')
                .then((res) => {
                    console.log(res.data)
                    setOrderDetail(res.data);
                }).catch(err => {
                console.log(err)
            })

            axios.get('payment/')
                .then((res) => {
                    console.log(res.data)
                    setPaymentDetail(res.data);
                    setIsLoading(false);
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
            <ProfileNavBar/>
            <Box>
                <BusinessSumTitle/>
                <OrderSummary data = {orderDetail}/>
                <OrderGraph data = {paymentDetail}/>
                <PopularItems data ={paymentDetail}/>
            </Box>
            <br/>
            <Footer/>
        </Box>
    );
};

export default BusinessSumContainer;