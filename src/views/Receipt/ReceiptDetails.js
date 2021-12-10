import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import axios from 'axios';
import {useLocation} from "react-router-dom";

function ReceiptDetails() {
    const [dateTime, setDateTime] = useState("")
    const [tableNumber, setTableNumber] = useState(null)
    const location = useLocation()
    const order_id = sessionStorage.getItem("orderId")
    const payment_id = location.state


    let date = new Date(Date.parse(dateTime))

    const dateNow = date.getDate() + '-' + (date.getMonth() +1 ) + '-' + date.getFullYear();
    const minutes = () => {
        if (date.getMinutes() < 10){
            return '0' + date.getMinutes();
        }
        else {
            return date.getMinutes();
        }
    }
    const timeNow = date.getHours() + ':' + minutes()

    useEffect(()=>{

        // get user table number
        axios.get("users/"+ sessionStorage.getItem("session_id"))
            .then(res => {
                setTableNumber(res.data.tableNumber)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("payment/"+ payment_id)
            .then(res => {
                setDateTime(res.data.timestamp)
            })
            .catch(err => {
                console.log(err)
            })

    })

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Order Number: {order_id} </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Table Number : {tableNumber} </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Date : {dateNow}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"}>Time : {timeNow} </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReceiptDetails;