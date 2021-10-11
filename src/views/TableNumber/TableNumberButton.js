import React from 'react';
import './TableNumberButton.css';
import {Box, Button} from '@mui/material';

function TableNumberButton() {
    function handleSubmitNumber()
    {
        console.log('clicked submit button')
    }
    return (
        <Box mt={3}>
            <Button id="page_button"
                    color="primary"
                    size='lg'
                    variant = "contained"
                    onClick ={()=> handleSubmitNumber()}
            >Submit
            </Button>
        </Box>
    );
}

export default TableNumberButton;