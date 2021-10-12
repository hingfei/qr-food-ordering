import React, {useContext} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Box, IconButton, Typography} from "@mui/material";
import {OrderContext} from '../App';

function NumberInputSpinner({title, price}) {

    const orderContext = useContext(OrderContext)

    function handleAddItem(title, price){
        orderContext.orderListDispatch({type:'add_item_to_cart', payload: {title: title, price: price} })
    }

    function handleRemoveItem(title, price){
        orderContext.orderListDispatch({type:'remove_item_from_cart', payload: {title: title, price: price} })
    }

    return (
            orderContext.orderListState.map(orderItem => {
            if (orderItem.title === title) {
                return (
                    <Box key={orderItem.title} display={"flex"} flexWrap={"nowrap"} alignItems={"center"} >
                        <IconButton color={"error"} size={"large"} onClick={() => handleRemoveItem(title, price)}>
                            <IndeterminateCheckBoxIcon/>
                        </IconButton>
                        <Typography variant={"h6"}>
                            {orderItem.quantity}
                        </Typography>
                        <IconButton color={"success"} size={"large"} onClick={() => handleAddItem(title, price)}>
                            <AddBoxIcon />
                        </IconButton>
                    </Box>
                )
            }
            return <></>
        })
    );
}

export default NumberInputSpinner;