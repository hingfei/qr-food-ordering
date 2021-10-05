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


function CartTable() {

    const orderContext = useContext(OrderContext)

    // Todo : implement total price logic
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="order summary">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'yellow'}}>
                        <TableCell>Item</TableCell>
                        <TableCell align='right'>Quantity</TableCell>
                        <TableCell align='right'>Unit Price (RM)</TableCell>
                        <TableCell align='right'>Total Price (RM)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderContext.orderListState.map((orderList, index) => (
                        <TableRow key={index}
                                  sx={{'&:last-child td, &:last-child th': { border: 0 },
                                      background: index % 2 ? 'lightyellow' : 'white'}}
                        >
                            <TableCell component='th' scope='row'>{orderList.title}</TableCell>
                            <TableCell align='right'>
                                <NumberInputSpinner {... orderList} />
                            </TableCell>
                            <TableCell align='right'>{orderList.price}</TableCell>
                            <TableCell align='right'>{orderList.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;