import React from "react";
import { useHistory } from "react-router-dom";
import {Box, Divider, Drawer, IconButton, ListItem, Button} from "@mui/material";
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer : {
        width : drawerWidth
    }
});

function OwnerSideNav() {
    // Custom Styles
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleSideNav = (open) => (event) => {
        setState(open)
    };

    // Redirect webpage
    const history = useHistory();

    const redirect = (path) => {
        history.push('/' + path)
    }

    return (
        <>
        <IconButton onClick={toggleSideNav(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
        >
            <MenuIcon />
        </IconButton>
        <Drawer anchor={"left"} open={state} onClose={toggleSideNav(false)} className={classes.drawer}>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleSideNav(false)}
                onKeyDown={toggleSideNav(false)}
            >
                <List>
                    <ListItem>
                        <Button 
                            variant="inherit" 
                            startIcon={<AccountCircleIcon/>}
                            onClick={() => redirect("profile")}
                        >
                            Profile
                        </Button>
                    </ListItem>
                    <Divider variant="middle"/>
                    <ListItem>
                        <Button 
                            variant="inherit" 
                            startIcon={<ListAltIcon/>}
                            onClick={() => redirect("order_list")}
                        >
                            Order Lists
                        </Button>
                    </ListItem>
                    <Divider variant="middle"/>
                    <ListItem>
                        <Button 
                            variant="inherit" 
                            startIcon={<RestaurantMenuIcon/>}
                            // Todo: Add endpoint of Menu
                            onClick={() => redirect("")}
                        >
                            Menu
                        </Button>
                    </ListItem>
                    <Divider variant="middle"/>
                    <ListItem>
                        <Button 
                            variant="inherit" 
                            startIcon={<BarChartIcon/>}
                            // Todo: Add endpoint of business summary
                            onClick={() => redirect("")}
                        >
                            Business Summary
                        </Button>
                    </ListItem>
                    <Divider variant="middle"/>
                    <ListItem>
                        <Button 
                            variant="inherit" 
                            startIcon={<LogoutIcon/>}
                            onClick={() => redirect("logout")}
                        >
                            Logout
                        </Button>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        </>
    );
}

export default OwnerSideNav;