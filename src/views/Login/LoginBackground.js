import React from 'react';
import Box from '@mui/material/Box';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import {Checkbox, FormControlLabel} from "@mui/material";
import LoginInputField from "./LoginInputField";
import LoginButton from "./LoginButton";

function LoginBackground(){
    return(
        <Box sx={{color:"#1E7DBC", display:"inline-flex", flexDirection:"column", alignItems:"center"}}>
            <AssignmentInd sx={{fontSize:100}}/>
            <LoginInputField/>
            <FormControlLabel control={<Checkbox/>} label="Remember me"/>
            <LoginButton/>
        </Box>
    );
}

export default LoginBackground;