import React from 'react';
import './TableNumberRestaurantName.css';
import {Typography} from "@mui/material";
import {Box} from "@mui/material"

function TableNumberRestaurantName({restaurantName, restaurantDescription, restaurantPicture}) {
    return (
        <Box mb={5}>    
            <img src={restaurantPicture} alt="restaurant" 
            height = {150}
            width = {300} /> 

            <Typography 
                variant="h4" 
                color = "inherit" 
                align = "center" 
                fontWeight= "bold" 
                mb={3} 
                mt={5} 
            >  
                {restaurantName}
            </Typography>
         </Box>
    );
}

export default TableNumberRestaurantName;