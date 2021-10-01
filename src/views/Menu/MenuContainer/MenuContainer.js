import React from 'react';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';

function MenuContainer(props) {
    return (
        <div>
            Menu page
            <MenuNavBar/>
            <MenuRestaurantName/>

            <MenuFooter/>
        </div>
    );
}

export default MenuContainer;