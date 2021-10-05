import React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import './CartTotal.css';

/*
function subTotal(){
   return null;
}*/

function CartTotal(props) {
    return (
        <div className="CartSum">
            <Box sx={{width: 300, height: 200, bgcolor: '#FDCAA4'}}>
                <Typography variant='h4'>
                    <Box sx={{bgcolor:'#D6CD14', textAlign: 'center', border: '1px solid black'}}>
                        Cart Summary
                    </Box>
                </Typography>
                <Typography variant='h6'>
                    SubTotal:
                </Typography>
                <Typography variant='h6'>
                    Discount:
                </Typography>
                <br/>
                <Typography variant='h5'>
                    Total :
                </Typography>
            </Box>
        </div>
    );
}

export default CartTotal;