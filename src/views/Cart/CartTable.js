import React, {useContext} from 'react';
import NumberInputSpinner from '../../components/NumberInputSpinner';
import {OrderContext} from '../../App';
import Box from "@mui/material/Box"
import CartConfirmButton from "./CartConfirmButton";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function CartTable() {

    const orderContext = useContext(OrderContext)
    const subtotal = orderContext.orderListState.map(sum => sum.total).reduce((a, b) => a+b)
    const discount = 0.2
      
    // Todo : implement total price logic
    return (
        <Box sx={{ width: '100%' }}>
            {orderContext.orderListState.map((order, index) => {
                return (
                    <Grid container alignItems='center'
                    sx={{background: index % 2 ? 'white' : '#EAF2F8'}}
                    >
                        <Grid item xs={4}>
                            <NumberInputSpinner title={order.title}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='body1' fontWeight='bold'>{order.title}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body1' fontWeight='bold'>RM {order.total}</Typography>
                        </Grid>
                    </Grid>
                )
            })}
            <CartConfirmButton/>
        </Box>
    );
}

export default CartTable;