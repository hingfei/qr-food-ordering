import React, {useContext} from "react";
import { OrderListContext } from "../../App";
import {Box, Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OrderListDialog from './OrderListDialog';

function OrderListCard() {
    const ordersContext = useContext(OrderListContext);
    let status="";
    let served="";

    // Function to indicate order is done.
    const handleFinish = (id, served) => {
        ordersContext.ordersDispatch({type:'served', payload: {id: id, served: served}});
        console.log("Order finish");
    }

    const extractOrders = (order) => {
        // Todo: extract order details from str to json.
    }

    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            columnGap={3} 
            flexWrap="wrap" 
            rowGap={3} 
            justifyContent="space-between"
        >
            {ordersContext.ordersState.map((order) => {
                // Set the status of the payment.
                if(order.paid === true) {
                    status = "Paid";
                }
                else {
                    status = "Not Paid";
                }
                
                if(order.served === true) {
                    served = "Served";
                }
                else {
                    served = "Not served";
                }

                const orderDetails = extractOrders(order);

                return (
                    <Box component="div" flexBasis="32%">
                        <Card sx={{ minWidth: 350 }} variant="outlined">
                            <CardContent>
                                {/* Todo: Add table number */}
                                <Typography variant="h6" component="div" alignSelf="center">
                                    Order ID: {order.id}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Paid Status: {status}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Total Amount: RM {order.amount}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Payment Method: {order.payment}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Served: {served}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <OrderListDialog orderDetails={orderDetails}/>
                                <Button
                                    onClick={() => handleFinish(order.id, order.served)}
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
            })}
        </Box>
    );
}

export default OrderListCard;