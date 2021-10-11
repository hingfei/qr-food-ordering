import React, {useContext} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {OrderContext} from "../../App";

function ReceiptTable() {
    // Todo : style table
    const orderContext = useContext(OrderContext)

    return (
        <Box mt={2}>
                {orderContext.orderListState.map((order, index) => {
                    return (
                            <Grid container
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