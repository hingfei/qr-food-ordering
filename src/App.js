import {BrowserRouter, Route, Switch} from "react-router-dom";
import TableNumberContainer from "./views/TableNumber/TableNumberContainer/TableNumberContainer";
import MenuContainer from "./views/Menu/MenuContainer/MenuContainer";
import NotFound from "./errors/NotFound";
import CartContainer from "./views/Cart/CartContainer/CartContainer";
import React, {useReducer} from "react";
import {initialOrderList, orderReducer} from "./reducers/CartReducer";
import ReceiptContainer from "./views/Receipt/ReceiptContainer/ReceiptContainer";
import OrderListContainer from "./views/OrderList/OrderListContainer/OrderListContainer";
import EditMenuContainer from "./views/EditMenu/EditMenuContainer/EditMenuContainer";
import QrContainer from "./views/QrPage/QrContainer/QrContainer"
import LoginContainer from "./views/Login/LoginContainer/LoginContainer";
import { orderListReducer, ordersTotal } from "./reducers/OrderReducer";
import LogoutContainer from "./views/Logout/LogoutContainer/LogoutContainer";
import RegistrationContainer from "./views/Registration/RegistrationContainer/RegistrationContainer";

// Create context for customer cart
export const OrderContext = React.createContext();
// Create context for owner order list
export const OrderListContext = React.createContext();
// Todo: create dynamic url with diff restaurants name and Route other pages lol

function App() {
    // Reducer for customer cart
    const [orderList, dispatch] = useReducer(orderReducer, initialOrderList);
    // Reducer for owner order list
    const [orders, action] = useReducer(orderListReducer, ordersTotal);
      return (
          <OrderContext.Provider value={{orderListState: orderList, orderListDispatch: dispatch }}>
          <OrderListContext.Provider value={{ordersState: orders, ordersDispatch: action}}>
          <div>
            <BrowserRouter>
              <Switch>
                <Route path='/table_number' component={TableNumberContainer}/>
                <Route path='/menu' component={MenuContainer}/>
                <Route path='/cart' component={CartContainer}/>
                <Route path='/receipt' component={ReceiptContainer}/>
                <Route path='/order_list' component={OrderListContainer}/>
                <Route path='/edit_menu' component={EditMenuContainer}/>
                <Route path='/logout' component={LogoutContainer}/>
                <Route path='/login' component={LoginContainer}/>
                <Route path='/qrPage' component={QrContainer}/>
                <Route path='/registration' component={RegistrationContainer}/>
                <Route component={NotFound}/>
              </Switch>
            </BrowserRouter>
          </div>
          </OrderListContext.Provider>
          </OrderContext.Provider>
          
      );
}

export default App;
