import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";


function TableNumberNavBar() {
    return (
        <AppBar position="static" sx={{backgroundColor:"#54486E"}} >
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0}}>
                    <img
                        alt=""
                        src="./images/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Great Food
                    </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TableNumberNavBar;