import React from "react";
import {Box, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {SidebarData} from '../views/Menu/MenuSideNavData';
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

function OrderListSideNav() {
    // Custom Styles
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleSideNav = (open) => (event) => {
        setState(open)
    };

    // Todo : Get list of categories (JSON) from db then use map to output a list of category
    const categoriesList = SidebarData;

    return (
        <><IconButton onClick={toggleSideNav(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
        >
            <MenuIcon />
        </IconButton><Drawer anchor={"left"} open={state} onClose={toggleSideNav(false)} className={classes.drawer}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleSideNav(false)}
                    onKeyDown={toggleSideNav(false)}
                >
                    <List>
                        <ListItem>
                            <AccountCircleIcon sx={{mr:2}}/>
                            <ListItemText primary="Profile"/>
                        </ListItem>
                        <Divider variant="middle"/>
                        <ListItem>
                            <ListAltIcon sx={{mr:2}}/>
                            <ListItemText primary="Order Lists"/>
                        </ListItem>
                        <Divider variant="middle"/>
                        <ListItem>
                            <RestaurantMenuIcon sx={{mr:2}}/>
                            <ListItemText primary="Menu"/>
                        </ListItem>
                        <Divider variant="middle"/>
                        <ListItem>
                            <BarChartIcon sx={{mr:2}}/>
                            <ListItemText primary="Business Summary"/>
                        </ListItem>
                        <Divider variant="middle"/>
                        <ListItem>
                            <LogoutIcon sx={{mr:2}}/>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </List>
                </Box>
            </Drawer></>
    );
}

export default OrderListSideNav;