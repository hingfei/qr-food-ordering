import React from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import './MenuNavBar.css'
import MenuSideNav from "./MenuSideNav";


function MenuNavBar() {

    // Todo: get TableNumber from db
    const TableNumber = "A1";

    // Todo: route path to table change page
    function handleTableChange(e){
        console.log('clicked Table Change');
    }

    // Todo: render shopping cart when clicked
    function handleShoppingCart(e){
        console.log('clicked Shopping Cart');
    }

    // Todo: change Nav bar color
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid item xs={6}>
                        <MenuSideNav/>
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
                    <Grid item xs={4} className="tableNumber" >
                        <Typography  variant="h6" color="inherit" component="div" className="tableNumber">
                            {TableNumber}
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2}} className="tableNumber" onClick={handleTableChange}>
                            <ChangeCircleRoundedIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart" onClick={handleShoppingCart}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuNavBar;