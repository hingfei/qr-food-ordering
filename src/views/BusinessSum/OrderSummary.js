import React from 'react';
import {Typography, Box, Card, CardContent} from '@mui/material';

function OrderSummary(props) {
    return (
            <Box display="flex"
                 flexDirection="row"
                 columnGap={10}
                 flexWrap="wrap"
                 sx={{minHeight:"20vh",
                     justifyContent: "center"}}>
                <Card sx={{minWidth:"25vh"}} variant="outlined">
                    <CardContent>
                    <Typography>Revenue:</Typography>
                    </CardContent>
                </Card>
                <Card sx={{minWidth:"25vh"}} variant="outlined">
                    <CardContent>
                    <Typography>Expense:</Typography>
                    </CardContent>
                </Card>
                <Card sx={{minWidth:"25vh"}} variant="outlined">
                    <CardContent>
                    <Typography>Total Order:</Typography>
                    </CardContent>
                </Card>
                <Card sx={{minWidth:"25vh"}} variant="outlined">
                    <CardContent>
                    <Typography>Profit:</Typography>
                    </CardContent>
                </Card>
            </Box>
    );
}

export default OrderSummary;