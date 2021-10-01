import React from 'react';
<<<<<<< HEAD
import MenuSideNav from "../MenuSideNav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
=======
import MenuRestaurantName from '../MenuRestaurantName';
import MenuNavBar from "../MenuNavBar";
import MenuFooter from '../MenuFooter';

>>>>>>> 5ef833dbad35b2f781d72c63823e22075dc045c3
function MenuContainer(props) {
    return (
        <div>
            Menu page
<<<<<<< HEAD
            <Router>
             <MenuSideNav/>
             <Switch>
                 <Route path='/' />
             </Switch>
            </Router>
=======
            <MenuNavBar/>
            <MenuRestaurantName/>

            <MenuFooter/>
>>>>>>> 5ef833dbad35b2f781d72c63823e22075dc045c3
        </div>
    );
}

export default MenuContainer;