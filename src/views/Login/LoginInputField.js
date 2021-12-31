import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import Person from "@mui/icons-material/Person";
import {Password} from "@mui/icons-material";
import LoginButton from "./LoginButton";

function LoginInputField(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(username){
        setUsername(username)
    }

    function handlePasswordChange(password){
        setPassword(password)
    }
    return(
        <Box>
        <Box>
            <TextField 
            value={username}
            onChange={e => handleUsernameChange(e.target.value)}
            sx={{width: '300px'}} 
            label="Username" 
            variant="filled" 
            size="normal" 
            color="primary" 
            InputProps={{startAdornment:(<InputAdornment position={'start'}><Person/></InputAdornment>)}}/>
        </Box>
        <Box sx={{color:"#1E7DBC", display:"inline-flex", flexDirection:"column", alignItems:"center"}}>
            <TextField 
            value={password}
            onChange={e => handlePasswordChange(e.target.value)}
            sx={{width: '300px'}} 
            label="Password" 
            variant="filled" 
            size="normal" 
            color="primary" 
            type="password" 
            margin="normal" 
            InputProps={{startAdornment:(<InputAdornment position={'start'}><Password/></InputAdornment>)}}/>
        <LoginButton username={username} password={password}/>
        </Box>
            
        </Box>
    );
}

export default LoginInputField;