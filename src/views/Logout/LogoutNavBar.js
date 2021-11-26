import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';

function LogoutNavBar() {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
                <Toolbar>
                    <IconButton>
                        <img alt="" src="./images/logo.svg" width="30" height="30"/>
                        <Typography variant="h6" color="white" component="div">
                            Great Food
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default LogoutNavBar;