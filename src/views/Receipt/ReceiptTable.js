import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import axios from "axios";

function ReceiptTable() {
    const [orderList, setOrderList] = useState([])
    // get order from database
    useEffect( ()=> {
            axios.get("orders/" + sessionStorage.getItem("orderId"))
                .then(res => {
                    setOrderList(JSON.parse(res.data.orders))
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])

    return (
        <Box mt={2}>
                {orderList.map((order, index) => {
                    return (
                            <Grid key={order.id} container
                                  sx={{background: index % 2 ? 'white' : '#EAF2F8', minHeight: "5vh"}}
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

export default ReceiptTable;