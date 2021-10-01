import React from 'react';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";

function MenuContainer(props) {
    return (
        <div>
            Menu page
            <MenuRestaurantName/>
            <MenuNavBar/>


        </div>
    );
}

export default MenuContainer;