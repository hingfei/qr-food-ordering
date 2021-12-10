import React from 'react';
import {Box, Button} from "@mui/material";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";



function PaymentConfirm({paymentChoice}) {
    const history = useHistory()
    const location = useLocation()



    function handleBack(){
        return history.push('/cart')
    }

    function handleConfirm(){
        const timestamp = new Date().toString();
        const amount = location.state
        const method = paymentChoice
        const user = sessionStorage.getItem("session_id")

        const paymentData = {
            "amount": amount,
            "timestamp": timestamp,
            "method": method,
            "user": user
        }

        console.log(paymentData)

        let payment_id;
        // CREATE PAYMENT HERE
        axios.post('payment/', paymentData)
            .then(response => {
                console.log(response.data)
                payment_id = response.data._id

                const data = {
                    "payment": payment_id,
                    "paid": true
                }
                axios.put('orders/'.concat(sessionStorage.getItem("orderId")), data)
                    .then(response => {
                        console.log(response.data)
                        return history.push({
                            pathname: '/receipt',
                            state: payment_id
                        })})
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Box display={"flex"} width={"100%"}
             justifyContent={"center"}
             alignItems={"center"}>
            <Button onClick={()=> handleBack()} variant={"contained"} color={"error"} sx={{
                borderRadius: "50in",
                paddingLeft: "35px",
                paddingRight: "35px",
                minHeight: "50px",
                minWidth: "150px"
            }}>
                Cancel
            </Button>
            <Box minWidth={"3vw"}/>
            <Button onClick={()=> handleConfirm()} variant={"contained"} color={"success"} sx={{
                borderRadius: "50in",
                paddingLeft: "35px",
                paddingRight: "35px",
                minHeight: "50px",
                minWidth: "150px"
            }}>
                Confirm
            </Button>
        </Box>
    );
}

export default PaymentConfirm;