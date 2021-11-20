// Order list card to do
import React, {useContext} from "react";
import { OrderListContext } from "../../App";
import {Box, Card, CardContent, Typography , CardActionArea, CardActions, Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OrderListDialog from "./OrderListDialog";

function OrderListCard() {
    const ordersContext = useContext(OrderListContext);
    let status="";

    // Function to show the dialog of the order
    const handleDialog = () => {
        console.log("Show dialog");
        <OrderListDialog/>
    }

    // Function to show the details of the order.
    const handleDetails = () => {
        console.log("Show details");
    }

    // Function to indicate order is done.
    const handleFinish = () => {
        console.log("Order finish");
    }

    return (
        <Box display="flex">
            {ordersContext.ordersState.map((order) => {
                if(order.paid === true) {
                    status = "Paid";
                }
                else {
                    status = "Not Paid";
                }
                return (
                    <Card sx={{minWidth:300}}>
                        <CardActionArea onClick={<OrderListDialog/>} >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Order ID: {order.id}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Paid Status: {status}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Total Amount: {order.amount}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Payment Method: {order.payment}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                onClick={handleDetails}
                                size="small" 
                                color="info" 
                                variant="outlined"
                            >
                                Details
                            </Button>
                            <Button
                                onClick={handleFinish}
                                size="small" 
                                color="success" 
                                variant="contained" 
                                endIcon={<CheckCircleIcon/>}
                            >
                                Finish
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Box>
    );
}

export default OrderListCard;