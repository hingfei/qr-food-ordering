import React from 'react';
import {Typography} from "@mui/material";
import './MenuRestaurantName.css'

function MenuRestaurantName() {
    // Todo : Replace Name by getting it from db
    const restaurantName = "The Deck Restaurant"

    return (
        <Typography variant={"h6"} align={"center"} pt={2} pb={2} className="restaurantText">
            {restaurantName}
        </Typography>
    );
}

export default MenuRestaurantName;