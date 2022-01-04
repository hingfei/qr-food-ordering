import React from 'react';
import { Box, Button } from "@mui/material";
import { useHistory, useLocation, useParams } from "react-router-dom";
import axios from "axios";



function PaymentConfirm({ paymentChoice }) {
    const history = useHistory()
    const location = useLocation()

    const { id } = useParams();

    const cart_url = "/cart/".concat(id)
    const receipt_url = '/receipt/'.concat(id)

    function handleBack() {
        return history.push(cart_url)
    }

    function handleConfirm() {
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
                            pathname:  receipt_url,
                            state: payment_id
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        history.push('/error')
                    })
            })
            .catch(error => {
                console.log(error)
                history.push('/error')
            })
    }


    return (
        <Box display={"flex"} width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Button onClick={() => handleBack()} variant={"contained"} color={"error"} sx={{
                borderRadius: "50in",
                paddingLeft: "35px",
                paddingRight: "35px",
                minHeight: "40px",
                minWidth: "100px"
            }}>
                Cancel
            </Button>
            <Box minWidth={"3vw"} />
            <Button onClick={() => handleConfirm()} variant={"contained"} color={"success"} sx={{
                borderRadius: "50in",
                paddingLeft: "35px",
                paddingRight: "35px",
                minHeight: "40px",
                minWidth: "100px"
            }}>
                Confirm
            </Button>
        </Box>
    );
}

export default PaymentConfirm;