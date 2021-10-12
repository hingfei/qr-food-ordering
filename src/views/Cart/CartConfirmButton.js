import React from 'react';
import {Button} from '@mui/material';
import './CartConfirmButton.css';
import { Typography } from '@mui/material';

function CartConfirmButton() {

    function handleSubmit()
    {
        console.log('clicked submit button')
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