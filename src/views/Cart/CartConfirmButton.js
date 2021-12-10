import React, {useContext} from 'react';
import {Button} from '@mui/material';
import './CartConfirmButton.css';
import { Typography } from '@mui/material';
import axios from 'axios'
import {OrderContext} from "../../App";
import {useHistory} from "react-router-dom";

function CartConfirmButton({total}) {

    const history = useHistory();
    const orderContext = useContext(OrderContext)

    // todo: send PUT request
    function handleSubmit()
    {
        const user = sessionStorage.getItem("session_id")
        const amount = total
        const paid = false
        const done = false
        const orders = JSON.stringify(orderContext.orderListState)

        // COMBINE DATA TO POST
        const data = {
            "user": user,
            "amount": amount,
            "paid": paid,
            "done": done,
            "orders": orders
        }

        axios.put('orders/'.concat(sessionStorage.getItem("orderId")), data)
            .then(response => {
                console.log(response.data)
                return history.push({
                    pathname: '/payment',
                    state: amount
                })})
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div id = "submit">
            <Button id ="bottom_button"
                    variant ="contained"
                    size = "medium"
                    onClick ={()=> handleSubmit()}>
                <Typography variant="h6">Place Order</Typography>
            </Button>
        </div>
    );
}

export default CartConfirmButton;