import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';
import MenuItem from "../MenuItem";

function MenuContainer() {
    return (
        <div>
            <MenuNavBar/>
            <Router>
             <Switch>
                 <Route path='/' />
             </Switch>
            </Router>
            <MenuItem />
            <MenuFooter/>
        </div>
    );
}

export default MenuContainer;