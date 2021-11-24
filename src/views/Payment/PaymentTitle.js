import React from 'react';
import {Paper, Typography} from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';

function PaymentTitle() {
    return (
        <Paper elevation={2} sx={
            {display:"flex",
            minHeight: "50px",
            alignItems: "center"
            }}>
            <CreditCardIcon sx={{mr:2, ml:3}}/>
            <Typography variant="h6" color="inherit">
                Payment
            </Typography>
        </Paper>
    );
}

export default PaymentTitle;