import React from 'react';
import MenuNavBar from "../MenuNavBar";
import MenuItem from "../MenuItem";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";
import MenuList from "../../../data/MenuList.json";


function MenuContainer() {
    // Todo : change List to get from DB
    // Test List
    const menuList = MenuList;

    // Todo: replace key with something more meaningful
    return (
            <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
                <MenuNavBar/>
                { menuList.map((item, index)=> {
                    return (
                        <div key={index}>
                            <MenuItem {...item}/>
                        </div>
                    )
                })}

                <Footer/>
            </Box>
    );
}

export default MenuContainer;