import React from 'react';
import MenuSideNav from "../MenuSideNav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';

function MenuContainer(props) {
    return (
        <div>
            Menu page
            <Router>
             <MenuSideNav/>
             <Switch>
                 <Route path='/' />
             </Switch>
            </Router>
            <MenuNavBar/>
            <MenuRestaurantName/>

            <MenuFooter/>
        </div>
    );
}

export default MenuContainer;