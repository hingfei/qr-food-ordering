import React from 'react';
import Box from '@mui/material/Box';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import {Checkbox, FormControlLabel} from "@mui/material";
import LoginInputField from "./LoginInputField";
import LoginButton from "./LoginButton";
import login_img from "../images/menu.jpg";
import "./LoginBackground.css";

function LoginBackground(){
    return(
        <Box ml={5} mt={7}>
            <img src={login_img} alt="login" id="login_img"/>
        <Box ml={40} sx={{color:"#1E7DBC", display:"inline-flex", flexDirection:"column", alignItems:"center"}}>
            <AssignmentInd sx={{fontSize:100}}/>
            <LoginInputField/>
            <FormControlLabel control={<Checkbox/>} label="Remember me"/>
            <LoginButton/>
        </Box>
        </Box>
    );
}

export default LoginBackground;