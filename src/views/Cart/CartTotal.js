import React, {useContext, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import {OrderContext} from "../../App";
import {TableContainer, TableRow, TableBody, Paper} from "@mui/material";
import {TableHead} from "@mui/material";
import {Table} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import './CartTotal.css';

function CartTotal(props) {
    const orderContext = useContext(OrderContext)
    const subtotal = orderContext.orderListState.map(sum => sum.total).reduce((a, b) => a+b)
    const discount = 0.2
    console.log(subtotal)

    useEffect(()=>{
        console.log('use effect run')
        console.log(orderContext.orderListState)
    });

    return (
        <div className="CartSum">
            <TableContainer component={Paper}>
                <Table sx={{minWidth:350}} aria-label="Cart Summary">
                    <TableHead>
                        <TableRow sx={{backgroundColor:'yellow'}}>
                            <TableCell align={"center"} colSpan={3}>
                                <Typography variant={'h6'}>CART SUMMARY</Typography>
                            </TableCell>
                         </TableRow>
                </TableHead>
                    <TableBody>
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
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default CartTotal;