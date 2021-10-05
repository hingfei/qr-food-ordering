import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuNavBar from "../MenuNavBar";
import MenuItem from "../MenuItem";
import Footer from "../../../components/Footer";

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
            <Footer/>
        </div>
    );
}

export default MenuContainer;