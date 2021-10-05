import React from 'react';
import {Button} from '@mui/material';
import './CartConfirmButton.css';

function CartConfirmButton(props) {

    function handleSubmit()
    {
        console.log('clicked submit button')
    }

    return (
        <div id = "submit">
            <Button id ="butt1"
            color = "primary"
            variant ="contained"
            size = "medium"
            onClick ={()=> handleSubmit()}
            >Place Order
            </Button>
        </div>
    );
}

export default CartConfirmButton;