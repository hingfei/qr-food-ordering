import React from 'react';
import './LoginButton.css';
import {Box, Button} from '@mui/material';

function LoginButton(){
    function handleLogin(){
        console.log('clicked login button')
    }
    return(
        <Box mt={3}>
            <Button id="login_button"
                    color="primary"
                    size='lg'
                    variant = "contained"
                    onClick ={()=> handleLogin()}
            >LOGIN
            </Button>
        </Box>
    );
}

export default LoginButton;