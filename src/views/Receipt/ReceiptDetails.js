import React, {useEffect, useState} from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import axios from 'axios';

function ReceiptDetails() {
    const [dateTime, setDateTime] = useState([])
    const TableNumber = "A1";
    const OrderNumber = "001";
    const timeURL = "https://www.worldtimeapi.org/api/timezone/Etc/GMT-8";

    let date = new Date(dateTime.datetime);

    const dateNow = date.getDate() + '-' + (date.getMonth() +1 ) + '-' + date.getFullYear();
    const timeNow = date.getHours() + ':' + date.getMinutes()

    useEffect(()=>{
        axios.get(timeURL)
            .then(res => {
                setDateTime(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Paper elevation={2}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Order Number: {OrderNumber} </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Table Number : {TableNumber} </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"} >Date : {dateNow}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography m={1} variant={"body1"}>Time : {timeNow} </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ReceiptDetails;