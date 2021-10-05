import React from 'react';
import './TableNumberButton.css';
import {Button} from '@mui/material';

function TableNumberButton(props) {
    function handleSubmitNumber()
    {
        console.log('clicked submit button')
    }
    return (
        <div id="container">
            <Button id="butt1"
             color="primary" 
             size='lg'
             variant = "contained"
             onClick ={()=> handleSubmitNumber()}
             >Submit
             </Button>
        </div>
    );
}

export default TableNumberButton;