import React, {useEffect, useState} from 'react';
import MenuNavBar from "../MenuNavBar";
import MenuItem from "../MenuItem";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";
import axios from 'axios'

function MenuContainer() {

    const [MenuList, setMenuList] = useState([])
    // Menu List from database
    useEffect( ()=> {
        axios.get('menu/:id')
            .then(response =>{
                    console.log(response.data)
                    setMenuList(response.data)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
            <Box sx={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
                <MenuNavBar/>
                { MenuList.map((item)=> {
                    return (
                        <div key={item._id}>
                            <MenuItem {...item}/>
                        </div>
                    )
                })}

                <Footer/>
            </Box>
    );
}

export default MenuContainer;