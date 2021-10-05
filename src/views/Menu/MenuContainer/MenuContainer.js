import React from 'react';
import MenuNavBar from "../MenuNavBar";
import MenuItem from "../MenuItem";
import Footer from "../../../components/Footer";
import {Box} from "@mui/material";


function MenuContainer() {
    // Todo : change List to get from DB
    // Test List
    const menuList = [
        {
            title: 'Salad',
            description : 'tasty salad with 1000 vegetables and tomato',
            price : '20',
            image: './images/logo.svg'
        },
        {
            title: 'Chicken',
            description : 'BBQ chicken with bbq sauce',
            price : '50',
            image: './images/logo.svg'
        },
        {
            title: 'French Fries',
            description : 'Fries with tomato sauce',
            price : '10',
            image: './images/logo.svg'
        }
    ]

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