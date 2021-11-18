import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material';
import OrderListSideNav from "../../components/OwnerSideNav";

function OrderListNavBar() {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor:"#54486E"}}>
                <Toolbar>
                    <OrderListSideNav/>
                    <IconButton >
                        <img
                            alt=""
                            src="./images/logo.svg"
                            width="30"
                            height="30"
                        />
                        <Typography variant="h6" color="white" component="div">
                            Great Food
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        
    );
}

export default OrderListNavBar;