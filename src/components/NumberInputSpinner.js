import React, {useReducer} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Box, IconButton, Typography} from "@mui/material";



const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return (state !== 99 ? state + 1 : state)
        case 'decrement':
            return (state !== 1 ? state - 1 : state)
        default:
            return state
    }
}

function NumberInputSpinner({title, quantity, price, total}) {
    // Todo : get initial quantity of item
    

    const [count, dispatch] = useReducer(reducer, quantity)

    return (

        <Box display={"flex"} flexWrap={"nowrap"} alignItems={"center"} >
            <IconButton color={"error"} size={"large"} onClick={() => dispatch('decrement')}>
                <IndeterminateCheckBoxIcon/>
            </IconButton>
                <Typography variant={"h6"}>
                    {count}
                </Typography>
            <IconButton color={"success"} size={"large"} onClick={() => dispatch('increment')}>
                <AddBoxIcon />
            </IconButton>
        </Box>
    );
}

export default NumberInputSpinner;