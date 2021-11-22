import React, {useEffect, useState} from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


function CartNavBar() {

    // GET TABLE FROM DATABASE USING SESSION ID
    const history = useHistory()

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

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
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
                       <Link to="/menu" style={{ textDecoration : 'none', color:"white"}}>
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