import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import { useHistory } from "react-router-dom";
import LoadingSpinner from '../../components/LoadingSpinner';

import axios from "axios";

function ReceiptTable() {
    const history = useHistory()
    const [orderList, setOrderList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // get order from database
    useEffect( ()=> {
        if (isLoading) {
            axios.get("orders/" + sessionStorage.getItem("orderId"))
                .then(res => {
                    setOrderList(JSON.parse(res.data.orders))
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    history.push('/error')
                })
            }
        })

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    }
    else{
        return (
            <Box mt={2}>
                {orderList.map((order, index) => {
                    return (
                        <Grid key={order.id} container
                            sx={{ background: index % 2 ? 'white' : '#EAF2F8', minHeight: "5vh" }}
                            alignItems={"center"} justifyContent={"center"}>
                            <Grid item xs={6} >
                                <Typography variant={"body1"} align={"center"} fontWeight={"bolder"} >
                                    {order.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={"body2"} align={"center"} >
                                    x {order.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })}
            </Box>
        );
    }

}

export default ReceiptTable;