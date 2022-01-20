import React from 'react';
import Box from '@mui/material/Box';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import LoginInputField from "./LoginInputField";
import login_img from "../images/menu.jpg";
import "./LoginBackground.css";
import Link from '@mui/material/Link';

function LoginBackground(){
    return(
        <Box display="flex" width="100%">
            <Box minWidth="40%" alignSelf="center" sx={{paddingLeft:"50px"}}>
                <img src={login_img} alt="login" id="login_img"/>
            </Box>
            <Box minWidth="60%" sx={{color:"#1E7DBC", display:"inline-flex", flexDirection:"column", alignItems:"center"}}>
                <AssignmentInd sx={{fontSize:100}}/>
                <LoginInputField/>
                <Link href="/registration" variant="body2" sx={{marginTop:"20px"}}>
                    No account? Register now!
                </Link>
            </Box>
        </Box>
    );
}

export default LoginBackground;