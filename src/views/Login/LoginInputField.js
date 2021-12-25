import React from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import Person from "@mui/icons-material/Person";
import {Password} from "@mui/icons-material";

function LoginInputField(){
    return(
        <Box>
        <Box>
            <TextField sx={{width: '300px'}} label="Username" variant="filled" size="normal" color="primary" InputProps={{startAdornment:(<InputAdornment position={'start'}><Person/></InputAdornment>)}}/>
        </Box>
        <Box>
        <TextField sx={{width: '300px'}} label="Password" variant="filled" size="normal" color="primary" type="password" margin="normal" InputProps={{startAdornment:(<InputAdornment position={'start'}><Password/></InputAdornment>)}}/>
        </Box>
        </Box>
    );
}

export default LoginInputField;