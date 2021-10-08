import React from 'react';
import './TableNumberInputField.css';
import {InputAdornment, TextField} from "@mui/material";
import ChairAltTwoToneIcon from '@mui/icons-material/ChairAltTwoTone';

function TableNumberInputField(props) {
    return (
        <div>
            <TextField id="filled-required" label="Table Number" variant="filled" size="normal" color="secondary" helperText="Fill in your table number" InputProps={{startAdornment:(<InputAdornment position={'start'}><ChairAltTwoToneIcon/></InputAdornment>)}}/>
        </div>
    );
}

export default TableNumberInputField;