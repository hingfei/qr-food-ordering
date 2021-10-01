import React from 'react';
import MenuSideNav from "../MenuSideNav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';
import MenuItem from '../MenuItem';

<<<<<<< HEAD
function MenuContainer(props) {
    return (
        <div>
            Menu page
=======
function MenuContainer() {
    return (
        <div>
            <MenuNavBar/>
>>>>>>> 05341db4f6c3a21d68854438bc24574a46e14c1e
            <Router>
             <MenuSideNav/>
             <Switch>
                 <Route path='/' />
             </Switch>
            </Router>
<<<<<<< HEAD
            <MenuNavBar/>
=======
>>>>>>> 05341db4f6c3a21d68854438bc24574a46e14c1e
            <MenuRestaurantName/>
            <MenuItem/>
            <MenuFooter/>
        </div>
    );
}

export default MenuContainer;