import React from 'react';
import image1 from '../images/decklogo.jpg';
import './TableNumberRestaurantName.css';
import {Typography} from "@mui/material";

function TableNumberRestaurantName(props) {
    return (
        <div className ="restaurant">
            <Typography variant="h3" color = "inherit" align = "center"  className = "name"
            >
             THE DECK RESTAURANT    
            </Typography>
            <img src={image1} alt="" 
            className="center"
            height = {150}
            width = {300} />
            
        </div>
         
    );
}

export default TableNumberRestaurantName;