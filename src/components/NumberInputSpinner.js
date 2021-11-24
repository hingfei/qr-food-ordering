import React, {useContext} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Box, IconButton, Typography} from "@mui/material";
import {OrderContext} from '../App';

function NumberInputSpinner({id, title, price}) {

    const orderContext = useContext(OrderContext)

    function handleAddItem(id, title, price){
        orderContext.orderListDispatch({type:'add_item_to_cart', payload: {id: id,title:title, price: price} })
    }

    function handleRemoveItem(id, title, price){
        orderContext.orderListDispatch({type:'remove_item_from_cart', payload: {id: id,title:title, price: price} })
    }

    return (
            orderContext.orderListState.map(orderItem => {
            if (orderItem.id === id) {
                return (
                    <Box key={orderItem.id} display={"flex"} flexWrap={"nowrap"} alignItems={"center"} >
                        <IconButton color={"error"} size={"large"} onClick={() => handleRemoveItem(id,title, price)}>
                            <IndeterminateCheckBoxIcon/>
                        </IconButton>
                        <Typography variant={"h6"}>
                            {orderItem.quantity}
                        </Typography>
                        <IconButton color={"success"} size={"large"} onClick={() => handleAddItem(id, title, price)}>
                            <AddBoxIcon />
                        </IconButton>
                    </Box>
                )
            }
            return null
        })
    );
}

export default NumberInputSpinner;