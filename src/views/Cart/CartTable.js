import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NumberInputSpinner from '../../components/NumberInputSpinner';


function CartTable(props) {

    // function createOrder(item, qty, unit_price) {
    //     const total_price = qty * unit_price;
    //     return { item, qty, unit_price, total_price };
    // }

    // const orderList = [
    //     createOrder('Salad', 2, 5),
    //     createOrder('Chicken Chop', 2, 25),
    //     createOrder('Spaghetti', 1, 15),
    //     createOrder('Lamb Chop', 1, 29),
    //     createOrder('Orange Juice', 3, 5)
    // ];
    const orderList = [
        {
            title: 'Salad',
            quantity : 5,
            price : '20',
            total : 100
        },
        {
            title: 'Chicken',
            quantity : 3,
            price : '50',
            total : 150
        },
        {
            title: 'French Fries',
            quantity : 6,
            price : '5',
            total : 30
        }
    ]

    function getStripedStyle(index) {
        return { background: index % 2 ? 'lightyellow' : 'white' };
    }

    const [orderItem, setOrderItem] = useState(orderList)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="order summary">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align='right'>Quantity</TableCell>
                        <TableCell align='right'>Unit Price (RM)</TableCell>
                        <TableCell align='right'>Total Price (RM)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderList.map((orderList, index) => (
                        <TableRow key={index} style={getStripedStyle(index)}
                        sx={{'&:last-child td, &:last-child th': { border: 0 }}}
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