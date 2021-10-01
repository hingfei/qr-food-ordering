import React from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import './MenuNavBar.css'

function MenuNavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid item xs={4}>
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
                    <Grid item xs={4} className="tableNumber">
                        <Typography  variant="h6" color="inherit" component="div" className="tableNumber">
                            XX
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2}} className="tableNumber">
                            <ChangeCircleRoundedIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart">
                            <ShoppingCartIcon />
                        </IconButton>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuNavBar;