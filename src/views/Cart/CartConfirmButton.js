import React from 'react';
import {Button} from '@mui/material';
import './CartConfirmButton.css';

function CartConfirmButton() {

    function handleSubmit()
    {
        console.log('clicked submit button')
    }

    return (
        <div id = "submit">
            <Button id ="butt2"
            variant ="contained"
            size = "medium"
            onClick ={()=> handleSubmit()}
            >Place Order
            </Button>
        </div>
    );
}

export default CartConfirmButton;