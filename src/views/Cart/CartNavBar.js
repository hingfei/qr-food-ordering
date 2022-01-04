import React, {useEffect, useState} from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useParams} from "react-router-dom";
import axios from "axios";


function CartNavBar() {
    const [TableNumber, setTableNumber] = useState('Empty')
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();

    const check_in_url = "/check-in/".concat(id)
    const menu_url = "/menu/".concat(id)

    useEffect(()=>{
        if (isLoading){
            axios.get('users/'.concat(sessionStorage.getItem(("session_id"))))
                    .then(res => {
                        setTableNumber(res.data.tableNumber)
                        setIsLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
                <Toolbar variant="dense">
                    <Grid item xs={6}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0}}>
                            <img
                                alt=""
                                src="../images/logo.svg"
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
                        <Link to={check_in_url} style={{ textDecoration : 'none', color:"white"}}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2}} className="tableNumber">
                                <ChangeCircleRoundedIcon/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={menu_url} style={{ textDecoration : 'none', color:"white"}}>
                           <IconButton size="large" aria-label="back-to-menu" color="inherit" sx={{ float: "right"}}>
                               <ArrowBackIosNewIcon />
                               <Typography variant={"h6"} ml={2} >
                                   Back
                               </Typography>
                           </IconButton>
                       </Link>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default CartNavBar;