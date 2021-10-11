import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NumberInputSpinner from '../../components/NumberInputSpinner';
import {OrderContext} from '../../App';
import Box from "@mui/material/Box"
import CartConfirmButton from "./CartConfirmButton";
import Grid from "@mui/material/Grid";

function CartTable() {

    const orderContext = useContext(OrderContext)
    const subtotal = orderContext.orderListState.map(sum => sum.total).reduce((a, b) => a+b)
    const discount = 0.2

    // Todo : implement total price logic
    return (
        <Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="order summary" >
                <TableHead>
                    <TableRow sx={{backgroundColor: '#F9E3C5'}}>
                        <TableCell>Item</TableCell>
                        <TableCell align='center'>Quantity</TableCell>
                        <TableCell align='right'>Unit Price (RM)</TableCell>
                        <TableCell align='right'>Total Price (RM)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderContext.orderListState.map((orderList, index) => {

                            return (
                                <TableRow key={index}
                                          sx={{'&:last-child td, &:last-child th': { border: 0 },
                                              background: index % 2 ? '#EAF2F8' : 'white'}}
                            >
                                <TableCell component='th' scope='row'>{orderList.title}</TableCell>
                                <TableCell sx={{float:'right'}}>
                                    <NumberInputSpinner title={orderList.title}/>
                                </TableCell>
                                <TableCell align='right'>{orderList.price}</TableCell>
                                <TableCell align='right'>{orderList.total}</TableCell>
                            </TableRow>
                            )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
            <Grid container mt={2} sx={{marginRight:'auto', marginLeft:'auto'}}>
                <Grid item xs={8}>
                    SubTotal:
                </Grid>
                <Grid item xs={4} sx={{textAlign:'right'}}>
                    {subtotal}
                </Grid>
                <Grid item xs={4} borderBottom={1}>
                    Discount:
                </Grid>
                <Grid item xs={4} borderBottom={1} sx={{textAlign:'center'}}>
                    {discount*100}%
                </Grid>
                <Grid item xs={4} borderBottom={1} sx={{textAlign:'right'}}>
                    RM{discount*subtotal}
                </Grid>
                <Grid item xs={8} mt={2} sx={{fontSize: 'larger', fontWeight:'800'}}>
                    Total:
                </Grid>
                <Grid item xs={4} mt={2} sx={{textAlign:'right',fontSize: 'larger', fontWeight:'800'}}>
                    RM{subtotal-subtotal*discount}
                </Grid>

            </Grid>
            <CartConfirmButton/>
        </Box>
    );
}

export default CartTable;