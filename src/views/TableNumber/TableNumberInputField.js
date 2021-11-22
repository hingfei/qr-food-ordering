import React, {useState} from 'react';
import './TableNumberInputField.css';
import {InputAdornment, TextField} from "@mui/material";
import ChairAltTwoToneIcon from '@mui/icons-material/ChairAltTwoTone';
import TableNumberButton from "./TableNumberButton";

function TableNumberInputField() {
    const [tableNumber, setTableNumber] = useState("")

    function handleChange(tableNumber) {
        setTableNumber(tableNumber);
    }

    return (
        <div>
            <TextField id="filled-required"
                       value = {tableNumber}
                       onChange={e => handleChange(e.target.value)}
                       label="Table Number"
                       variant="filled"
                       size="normal"
                       color="secondary"
                       helperText="Fill in your table number"
                       InputProps={
                           {startAdornment:(<InputAdornment position={'start'}><ChairAltTwoToneIcon/></InputAdornment>)}}/>
            <TableNumberButton tableNumber={tableNumber}/>
        </div>
    );
}

export default TableNumberInputField;