import React, {useContext} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Box, IconButton, Typography} from "@mui/material";
import {OrderContext} from '../App';


function NumberInputSpinner({title}) {

    const orderContext = useContext(OrderContext)

    function handleAddItem(title){
        orderContext.orderListDispatch({type:'add_item_to_cart', payload: title })
    }

    function handleRemoveItem(title){
        orderContext.orderListDispatch({type:'remove_item_from_cart', payload: title })
    }

    return (
        orderContext.orderListState.map(orderItem => {
            if (orderItem.title === title) {
                return (
                    <Box display={"flex"} flexWrap={"nowrap"} alignItems={"center"} >
                        <IconButton color={"error"} size={"large"} onClick={() => handleRemoveItem(title)}>
                            <IndeterminateCheckBoxIcon/>
                        </IconButton>
                        <Typography variant={"h6"}>
                            {orderItem.quantity}
                        </Typography>
                        <IconButton color={"success"} size={"large"} onClick={() => handleAddItem(title)}>
                            <AddBoxIcon />
                        </IconButton>
                    </Box>
                )
            }
            return orderItem
        })

    );
}

export default NumberInputSpinner;