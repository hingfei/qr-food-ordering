import React from 'react';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";

function MenuContainer(props) {
    return (
        <div>
            Menu page
            <MenuNavBar/>
            <MenuRestaurantName/>


        </div>
    );
}

export default MenuContainer;