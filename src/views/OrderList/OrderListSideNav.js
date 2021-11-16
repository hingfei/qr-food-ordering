import React from "react";
import {Box, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {SidebarData} from '../Menu/MenuSideNavData';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";

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
                        {categoriesList.map((item, index) => {
                            const { title, icon } = item;
                            return (
                                // Todo : choose a divider from material UI
                                <ListItem key={index}>
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={title} />
                                    <Divider />
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer></>
    );
}

export default OrderListSideNav;