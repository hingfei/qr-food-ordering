import React, { useEffect, useState} from "react";
import {Box, Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OrderListDialog from './OrderListDialog';
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "axios";

function OrderListCard() {
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    let status="";
    let served="";

    const AuthConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    };

    // Get orders of the restaurant
    useEffect(() => {
        if (isLoading) {
            axios.get('/restaurant/orders', AuthConfig)
                .then((result) => {
                    setOrders(result.data);
                    setIsLoading(false);
                }).catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                })
        }
    }) 

    // Function to indicate order is done.
    const handleFinish = (id) => {
        // Set to served
        const data = {
            "done": true
        }
        // Update database
        axios.put('/orders/'.concat(id), data)
            .then((result) => {
                window.location.reload();
            }).catch((error) => {
                console.log(error);
            })
    }

    
    // Extract order details from str to json.
    const extractOrders = (orders) => {
        orders = JSON.parse(orders);
        return orders;
    }

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    } else {
        return (
            <Box 
                display="flex" 
                flexDirection="row" 
                flexWrap="wrap" 
                rowGap={3} 
                justifyContent="space-between"
                marginTop={3}
                paddingX={5}
                marginBottom={3}
            >
                {orders.map((order) => {
                    if (order.orders != "") {
                        const orderDetails = extractOrders(order.orders);

                        if(order.done === false) {
                            served = "Not Served";
    
                            if(order.paid === true) {
                                status = "Paid";
                            }
                            else {
                                status = "Not Paid";
                            }
                            
                            return (
                                <Box key={order._id} component="div" flexBasis="32%" >
                                    <Card sx={{ minWidth: 350 }} variant="outlined">
                                        <CardContent>
                                            <Typography variant="h6" component="div" alignSelf="center">
                                                Order ID: {order._id}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" fontWeight={"bold"}>
                                                Paid Status: {status}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" fontWeight={"bold"}>
                                                Total Amount: RM {order.amount}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" fontWeight={"bold"}>
                                                Payment Method: {order.method.charAt(0).toUpperCase() + order.method.slice(1)}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" fontWeight={"bold"}>
                                                Time: {order.timestamp}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" fontWeight={"bold"}>
                                                Served: {served}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <OrderListDialog orderID={order._id} orderDetails={orderDetails}/>
                                            <Button
                                                onClick={() => handleFinish(order._id)}
                                                size="small"
                                                color="success"
                                                variant="contained"
                                                endIcon={<CheckCircleIcon />}
                                            >
                                                Finish
                                            </Button>
                                        </CardActions>
                                    </Card>
                               </Box>
                            );
                        }
                    }
                 })}
            </Box>
        );
    }

}

export default OrderListCard;