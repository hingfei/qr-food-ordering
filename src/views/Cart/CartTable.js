import React, {useContext} from 'react';
import NumberInputSpinner from '../../components/NumberInputSpinner';
import {OrderContext} from '../../App';
import Box from "@mui/material/Box"
import CartConfirmButton from "./CartConfirmButton";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function CartTable() {

    const orderContext = useContext(OrderContext)
    const discount = 1

    let shoppingCart;

    const orderList = orderContext.orderListState;

    if (orderList.length === 0)
    {
        // todo : style this shit/ should redirect to menu
        shoppingCart =
            <Box>
                <Typography variant={'h6'}>
                    wow so empty
                </Typography>
            </Box>
    }
    else {
        const subtotal = orderContext.orderListState.map(sum => sum.total).reduce((a, b) => a+b)
        shoppingCart =
            <Box sx={{ width: '100%' }}>
                {orderContext.orderListState.map((order, index) => {
                    return (
                        <Grid key={order._id} container alignItems='center'
                              sx={{background: index % 2 ? 'white' : '#EAF2F8'}}
                        >
                            <Grid item xs={4}>
                                <NumberInputSpinner _id={order._id} title={order.title} price={order.price}/>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant='body1' fontWeight='bold'>{order.title}</Typography>
                            </Grid>
                            <Grid item xs={2} ml={1}>
                                <Typography variant='body1' fontWeight='bold'>RM {order.total}</Typography>
                            </Grid>
                        </Grid>
                    )
                })}
                <Grid container mt={2} sx={{marginRight:'auto', marginLeft:'auto', marginBottom: '100px'}}>
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
                    <Grid item xs={7} mt={2} sx={{fontSize: 'larger', fontWeight:'800'}}>
                        <Typography variant={"h5"} ml={5} fontWeight={"bold"}>
                            Total:
                        </Typography>

                    </Grid>
                    <Grid item xs={5} mt={2} sx={{textAlign:'left'}}>
                        <Typography variant={"h5"} ml={1} fontWeight={"bold"}>
                            RM{subtotal-subtotal*discount}
                        </Typography>
                    </Grid>

                </Grid>
                <CartConfirmButton/>
            </Box>
    }

    return (
        <>
            {shoppingCart}
        </>
    );
}

export default CartTable;