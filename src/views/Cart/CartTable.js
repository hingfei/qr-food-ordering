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
            <Grid container mt={2} sx={{marginRight:'auto', marginLeft:'auto'}}>
                <Grid item xs={8}>
                    <Typography variant={"body1"} ml={5}>
                        SubTotal :
                    </Typography>

                </Grid>
                <Grid item xs={4} sx={{textAlign:'left'}}>
                    <Typography variant={"body1"} ml={5} >
                        RM {subtotal}
                    </Typography>
                </Grid>
                <Grid item xs={8} borderBottom={1} pb={2}>
                    <Typography variant={"body1"} ml={5}>
                        Discount ({discount*100}%) :
                    </Typography>
                </Grid>
                <Grid item xs={4} borderBottom={1} sx={{textAlign:'left'}} pb={2}>
                    <Typography variant={"body1"} ml={5} >
                        RM {discount*subtotal}
                    </Typography>
                </Grid>
                <Grid item xs={8} mt={2} sx={{fontSize: 'larger', fontWeight:'800'}}>
                    <Typography variant={"h5"} ml={5} fontWeight={"bold"}>
                        Total:
                    </Typography>

                </Grid>
                <Grid item xs={4} mt={2} sx={{textAlign:'left'}}>
                    <Typography variant={"h5"} ml={5} fontWeight={"bold"}>
                        RM{subtotal-subtotal*discount}
                    </Typography>
                </Grid>

            </Grid>
            <CartConfirmButton/>
        </Box>
    );
}

export default CartTable;