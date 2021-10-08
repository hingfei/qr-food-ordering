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
import {TableFooter} from "@mui/material";
import Box from "@mui/material/Box"
import CartConfirmButton from "./CartConfirmButton";


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
                    <TableRow sx={{backgroundColor: 'yellow'}}>
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
                                              background: index % 2 ? 'lightyellow' : 'white'}}
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
                <TableFooter>
                    <Table sx={{position: 'absolute', right: 0, width: '500px'}}>
                    <TableRow>
                        <TableCell colSpan={2}>SubTotal:</TableCell>
                        <TableCell align={"right"}>{subtotal}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Discount:</TableCell>
                        <TableCell align={"right"}>{discount*100}%</TableCell>
                        <TableCell align={"right"}>-RM{discount*subtotal}</TableCell>
                    </TableRow>
                    <TableRow sx={{backgroundColor:'darkgrey'}}>
                        <TableCell colSpan={2} sx={{fontSize: 'larger'}}>Total:</TableCell>
                        <TableCell align={"right"} sx={{fontSize: 'larger'}}>RM{subtotal-subtotal*discount}</TableCell>
                    </TableRow>
                    </Table>
                </TableFooter>
            </Table>
        </TableContainer>
            <CartConfirmButton/>
        </Box>
    );
}

export default CartTable;