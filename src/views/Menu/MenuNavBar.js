import React, {useState, useContext, useEffect} from 'react';
import {AppBar, Badge, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import './MenuNavBar.css'
import MenuSideNav from "./MenuSideNav";
import {Link, useHistory} from "react-router-dom";
import {OrderContext} from "../../App";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from 'axios'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MenuNavBar() {

    const history = useHistory()
    // get table number
    const [TableNumber, setTableNumber] = useState('Empty')

    useEffect(()=>{

        // check session storage if id exists
        if (sessionStorage.getItem("session_id") === null) {
            history.push('/table_number')
        }
        else {
            axios.get('http://localhost:8000/users/'.concat(sessionStorage.getItem(("session_id"))))
                .then(res => {
                    setTableNumber(res.data.tableNumber)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })

    const orderContext = useContext(OrderContext)


    const orderList = orderContext.orderListState;

    // check OrderList state

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let cartQuantity = orderList.length;
    let shoppingCart;

    if (orderList.length === 0){
        // todo : cart icon with snackbar
        shoppingCart =
            <>
            <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart" onClick={handleClick}>
                <ShoppingCartIcon />
            </IconButton>
            <Snackbar anchorOrigin={{vertical:'top', horizontal:'right'}} open={open} autoHideDuration={3000} onClose={handleClose} sx={{marginTop: "50px"}}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Your cart is empty!
            </Alert>
            </Snackbar>
        </>
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