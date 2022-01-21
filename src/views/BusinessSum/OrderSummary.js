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
        return paidArray.length
    }


    return (
            <Box display="flex"
                 flexDirection="row"
                 columnGap={10}
                 flexWrap="wrap"
                 mt={5}
                 sx={{minHeight:"20vh",
                     justifyContent: "center",
                     textAlign:"center",
                     }}>
                <Card sx={{minWidth:"50vh"}} variant="outlined">
                    <CardContent>
                        <Typography variant={'h4'} sx={{fontFamily:'Verdana',
                                                        fontWeight:'bold',
                                                        textShadow:'2px 2px 3px #54486E'}}>
                            TOTAL INCOME:
                        </Typography>
                        <Typography variant={'h5'} mt={3} sx={{fontFamily:'Verdana'}}>
                            RM {totalRevenue()}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{minWidth:"50vh"}} variant="outlined">
                    <CardContent>
                        <Typography variant={'h4'} sx={{fontFamily:'Verdana',
                                                        fontWeight:'bold',
                                                        textShadow:'2px 2px 3px #54486E'}}>
                            TOTAL ORDERS:</Typography>
                        <Typography variant={'h5'} mt={3} sx={{fontFamily:'Verdana'}}>
                            {totalOrder()}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
    );
}

export default OrderSummary;