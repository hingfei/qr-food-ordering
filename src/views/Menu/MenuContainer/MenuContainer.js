import React from 'react';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';
import MenuItem from '../MenuItem';

function MenuContainer(props) {
    return (
        <div>
            Menu page
            <MenuNavBar/>
            <MenuRestaurantName/>
            <MenuItem/>
            <MenuFooter/>
        </div>
    );
}

export default MenuContainer;