import React, {useState, useContext, useEffect} from 'react';
import {AppBar, Badge, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import './MenuNavBar.css'
import {Link, useHistory, useParams} from "react-router-dom";
import {OrderContext} from "../../App";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from 'axios'


function MenuNavBar() {
    //get restaurant id
    const history = useHistory();
    const {id} = useParams();

    const check_in_url = "/check-in/".concat(id)
    const cart_url = "/cart/".concat(id)

    // Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // get table number
    const [TableNumber, setTableNumber] = useState('Empty')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if (isLoading)
        {
            axios.get('users/'.concat(sessionStorage.getItem(("session_id"))))
                .then(res => {
                    setTableNumber(res.data.tableNumber)
                    setIsLoading(false)
                })
                .catch(err => {
                    if (err.response.status === 404){
                        return history.push(check_in_url)
                    }else{
                        console.log(err.response.data)
                    }
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
            <Link to={cart_url} style={{ textDecoration : 'none', color:"white"}}>
                <IconButton size="large" aria-label="shopping cart" color="inherit" className="shoppingCart">
                    <Badge badgeContent={cartQuantity} color={"error"}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Link>
    }

    let renderTable;

    if (isLoading) {
        // todo: find a loading spinner
        renderTable =  <><Typography  variant="h6" color="inherit" component="div" className="tableNumber">
            Loading..
        </Typography></>
    }else {
        renderTable =  <><Typography  variant="h6" color="inherit" component="div" className="tableNumber">
            {TableNumber}
        </Typography></>
    }

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
                <Toolbar>
                    <Grid item xs={6}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0}}>
                            <img
                                alt=""
                                src="../images/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </IconButton>

                    </Grid>
                    <Grid item xs={4} className="tableNumber" >
                        {renderTable}
                        <Link to={check_in_url} style={{ textDecoration : 'none', color:"white"}}>
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