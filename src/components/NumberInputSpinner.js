import React, {useContext} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Box, IconButton, Typography} from "@mui/material";
import {OrderContext} from '../App';

function NumberInputSpinner({_id, title, price}) {

    const orderContext = useContext(OrderContext)

    function handleAddItem(_id, title, price){
        orderContext.orderListDispatch({type:'add_item_to_cart', payload: {_id: _id,title:title, price: price} })
    }

    function handleRemoveItem(_id, title, price){
        orderContext.orderListDispatch({type:'remove_item_from_cart', payload: {_id: _id,title:title, price: price} })
    }

    return (
            orderContext.orderListState.map(orderItem => {
            if (orderItem._id === _id) {
                return (
                    <Box key={orderItem._id} display={"flex"} flexWrap={"nowrap"} alignItems={"center"} >
                        <IconButton color={"error"} size={"large"} onClick={() => handleRemoveItem(_id,title, price)}>
                            <IndeterminateCheckBoxIcon/>
                        </IconButton>
                        <Typography variant={"h6"}>
                            {orderItem.quantity}
                        </Typography>
                        <IconButton color={"success"} size={"large"} onClick={() => handleAddItem(_id, title, price)}>
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