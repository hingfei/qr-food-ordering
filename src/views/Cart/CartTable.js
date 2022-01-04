import React, {useContext, useEffect, useState} from 'react';
import NumberInputSpinner from '../../components/NumberInputSpinner';
import {OrderContext} from '../../App';
import Box from "@mui/material/Box"
import CartConfirmButton from "./CartConfirmButton";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from "axios";
import LoadingSpinner from '../../components/LoadingSpinner';

function CartTable() {

    // todo: fix discount logic
    const orderContext = useContext(OrderContext)
    const discount = 0
    const orderList = orderContext.orderListState;
    const [isLoading, setIsLoading] = useState(true)

    function loadOrder(data){
        orderContext.orderListDispatch({type: 'load_order_list', payload: data})
    }

    useEffect(()=> {
        if (isLoading)
        {
            axios.get('orders/'.concat(sessionStorage.getItem("orderId")))
                .then(res => {
                    // todo : function to load orders
                    loadOrder(JSON.parse(res.data.orders))
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false)
                })
        }
    })


    if (orderList.length === 0)
    {
        return (<>
        
        </>)
    }
    else {
        const subtotal = orderContext.orderListState.map(sum => sum.total).reduce((a, b) => a+b)
        if (isLoading) {
            return(
                <>
                 <LoadingSpinner/>
                </>
               
            );
        }
        else{
            return(
                <Box sx={{ width: '100%' }}>
                    {orderContext.orderListState.map((order, index) => {
                        return (
                            <Grid key={order.id} container alignItems='center'
                                  sx={{background: index % 2 ? 'white' : '#EAF2F8'}}
                            >
                                <Grid item xs={4}>
                                    <NumberInputSpinner id={order.id} title={order.title} price={order.price}/>
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
                    <CartConfirmButton total={discount*subtotal}/>
                </Box>
            );
        }
    }
}

export default CartTable;