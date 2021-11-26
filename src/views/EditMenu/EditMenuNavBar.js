import React from 'react';
import EditMenuAddForm from "./EditMenuAddForm";
import {Grid, Box} from "@mui/material";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

function EditMenuNavBar(){
    return (
    <Box>
        <AppBar position="static" sx={{backgroundColor:"#54486E"}} >
            <Toolbar variant="dense">
                <Grid item xs={6}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0}}>
                        <img
                            alt=""
                            src="./images/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    
                        <Typography variant="h6" color="inherit" component="div">
                            Great Food
                        </Typography>
                     </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <EditMenuAddForm />  
                </Grid>

            </Toolbar>
            
        </AppBar>
    </Box>
    );
}

export default EditMenuNavBar;