import React from 'react';
import image1 from '../images/decklogo.jpg';
import './TableNumberRestaurantName.css';
import {Typography} from "@mui/material";
import {Box} from "@mui/material"

function TableNumberRestaurantName() {
    return (
        <Box mb = {5}>    
              <img src={image1} alt="" 
            className="center"
            height = {120}
            width = {300} /> 

            <Typography variant="h3" color = "inherit" align = "center" fontWeight= "bold" mb={3} marginTop={3} fontFamily =" Fantasy, Copperplate" 
            >
             THE DECK RESTAURANT    
            </Typography>
           
            

            <Typography variant = "body2" gutterBottom align="center" mt={2} marginLeft={10} marginRight={10}>
            At The Deck Restaurant, located on Waite’s Wharf in historic downtown Newport, 
            offers waterfront dining and upscale nightlife. Our menu features fresh, 
            local seafood items and New England summer favorites, as well as daily specials and raw bar. 
            Join us inside and enjoy our open kitchen and eclectic dinner menu! 
            </Typography>
         </Box>
         
    );
}

export default TableNumberRestaurantName;