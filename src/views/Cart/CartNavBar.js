import React from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom";


function CartNavBar() {
    // Todo : replace table number with props ?
    const TableNumber = "A1";

    function handleBackButton (e) {
        console.log ('clicked back button');
    }

    // Todo: route path to table change page
    function handleTableChange(e){
        console.log('clicked Table Change');
    }

    return (
        <Box>
            <AppBar position="static">
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
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2}} className="tableNumber" onClick={handleTableChange}>
                            <ChangeCircleRoundedIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                       <Link to="/menu" style={{ textDecoration : 'none', color:"white"}}>
                           <IconButton size="large" aria-label="back-to-menu" color="inherit" sx={{ float: "right"}} onClick={handleBackButton}>
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