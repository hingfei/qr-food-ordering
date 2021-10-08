import React, {useContext} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {OrderContext} from "../../App";

function ReceiptTable() {
    // Todo : style table
    const orderContext = useContext(OrderContext)

    return (
        <Paper elevation={2}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Item
                            </TableCell>
                            <TableCell>
                                Quantity
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orderContext.orderListState.map((order) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {order.title}
                                    </TableCell>
                                    <TableCell>
                                        {order.quantity}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default ReceiptTable;