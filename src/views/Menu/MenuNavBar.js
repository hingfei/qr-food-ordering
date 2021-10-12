import React, {useContext} from 'react';
import {AppBar, Badge, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import './MenuNavBar.css'
import MenuSideNav from "./MenuSideNav";
import {Link} from "react-router-dom";
import {OrderContext} from "../../App";


function MenuNavBar() {

    const orderContext = useContext(OrderContext)

    // Todo: get TableNumber from db
    const TableNumber = "A1";


    const orderList = orderContext.orderListState;

    // check OrderList state

    let cartQuantity = orderList.length;
    let shoppingCart;

    if (orderList.length === 0){
        // todo : cart icon with snackbar
        shoppingCart =
            <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart">
                <ShoppingCartIcon />
            </IconButton>
    }
    else {
        shoppingCart =
            <Link to="/cart" style={{ textDecoration : 'none', color:"white"}}>
                <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart">
                    <Badge badgeContent={cartQuantity} color={"error"}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Link>
    }

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
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
                        <Link to="/table_number" style={{ textDecoration : 'none', color:"white"}}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2}} className="tableNumber">
                                <ChangeCircleRoundedIcon/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        {shoppingCart}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuNavBar;