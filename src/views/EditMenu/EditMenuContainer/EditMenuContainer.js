import React from 'react';
import EditMenuNavBar from "../EditMenuNavBar";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";
//import EditMenuAddForm from "../EditMenuAddForm";
import MenuList from "../../../data/MenuList.json";
import MenuItem from "../EditMenuItem";

function EditMenuContainer(){

    const menuList = MenuList;

    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
            <EditMenuNavBar/>
           
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

export default EditMenuContainer;