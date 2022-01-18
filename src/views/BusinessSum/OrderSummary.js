import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';

function OrderSummary(props) {

    const totalRevenue = () => {
        let total = 0
        for(let i = 0; i < props.data.length; i++) {
            if(props.data[i].paid === true){
            total += props.data[i].amount;
            }
        }
        return total
    }

    const totalOrder = () => {
        let paidArray = []
        for(let i = 0; i < props.data.length; i++) {
            if(props.data[i].paid === true){
                paidArray.push(props.data[i])
            }
        }
        console.log(paidArray)
        return paidArray.length
    }

    const totalExpense = () => {
        let expense = 10
        return expense
    }

    const totalProfit = () => {
        return totalRevenue() - totalExpense()
    }

    return (
            <Box display="flex"
                 flexDirection="row"
                 columnGap={10}
                 flexWrap="wrap"
                 mt={5}
                 sx={{minHeight:"20vh",
                     justifyContent: "center"}}>
                <Card sx={{minWidth:"40vh"}} variant="outlined">
                    <CardContent>
                    <Typography variant={'h4'}>Revenue:</Typography>
                        <Typography variant={'h5'}>RM {totalRevenue()}</Typography>
                    </CardContent>
                </Card>
                {/*<Card sx={{minWidth:"25vh"}} variant="outlined">*/}
                {/*    <CardContent>*/}
                {/*    <Typography>Expense:</Typography>*/}
                {/*        {totalExpense()}*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
                <Card sx={{minWidth:"40vh"}} variant="outlined">
                    <CardContent>
                    <Typography variant={'h4'}>Total Order:</Typography>
                        <Typography variant={'h5'}>{totalOrder()} orders</Typography>
                    </CardContent>
                </Card>
                {/*<Card sx={{minWidth:"25vh"}} variant="outlined">*/}
                {/*    <CardContent>*/}
                {/*    <Typography>Profit:</Typography>*/}
                {/*        {totalProfit()}*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </Box>
    );
}

export default OrderSummary;