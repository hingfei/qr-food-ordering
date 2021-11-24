import React from 'react';
import {Box, Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import axios from "axios";



function PaymentConfirm({paymentChoice}) {
    const history = useHistory()

    function handleBack(){
        return history.push('/cart')
    }

    function handleConfirm(){
        const data = {

        }
        // todo: update payment choice
        axios.put('http://localhost:8000/orders/'.concat(sessionStorage.getItem("orderId")), data)
            .then(response => {
                console.log(response.data)
                return history.push('/payment')})
            .catch(error => {
                console.log(error)
            })
        console.log('handle confirm')
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