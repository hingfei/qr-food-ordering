import React from "react";
import { useHistory } from "react-router-dom";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    ListItem,
    Button,
} from "@mui/material";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
});

function OwnerSideNav() {
    // Custom Styles
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleSideNav = (open) => (event) => {
        setState(open);
    };

    // Redirect webpage
    const history = useHistory();

    const redirect = (path) => {
        history.push("/" + path);
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.clear();
        history.push("/logout");
    };

    return (
        <>
            <IconButton
                onClick={toggleSideNav(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 0 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={state}
                onClose={toggleSideNav(false)}
                className={classes.drawer}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleSideNav(false)}
                    onKeyDown={toggleSideNav(false)}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"float-left"}
                        alignItems={"center"}
                        sx={{ backgroundColor: "#54486E", height: "64px" }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                        >
                            <MenuOpenIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Box>
                    <List>
                        <ListItem>
                            <Button
                                variant="inherit"
                                startIcon={<AccountCircleIcon />}
                                onClick={() => redirect("profile")}
                            >
                                Profile
                            </Button>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Button
                                variant="inherit"
                                startIcon={<ListAltIcon />}
                                onClick={() => redirect("order_list")}
                            >
                                Order Lists
                            </Button>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Button
                                variant="inherit"
                                startIcon={<RestaurantMenuIcon />}
                                onClick={() => redirect("edit_menu")}
                            >
                                Menu
                            </Button>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Button
                                variant="inherit"
                                startIcon={<BarChartIcon />}
                                onClick={() => redirect("business_summary")}
                            >
                                Business Summary
                            </Button>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                            <Button
                                variant="inherit"
                                startIcon={<LogoutIcon />}
                                onClick={handleLogout}
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
