import {BrowserRouter, Route, Switch} from "react-router-dom";
import TableNumberContainer from "./views/TableNumber/TableNumberContainer/TableNumberContainer";
import MenuContainer from "./views/Menu/MenuContainer/MenuContainer";
import NotFound from "./errors/NotFound";
import CartContainer from "./views/Cart/CartContainer/CartContainer";
import React, {useReducer} from "react";
import {initialOrderList, orderReducer} from "./reducers/CartReducer";
import ReceiptContainer from "./views/Receipt/ReceiptContainer/ReceiptContainer";
import PaymentContainer from "./views/Payment/PaymentContainer/PaymentContainer";
import OrderListContainer from "./views/OrderList/OrderListContainer/OrderListContainer";
import ProfileContainer from "./views/Profile/ProfileContainer/ProfileContainer"
import EditMenuContainer from "./views/EditMenu/EditMenuContainer/EditMenuContainer"
import LoginContainer from "./views/Login/LoginContainer/LoginContainer";
import { orderListReducer, ordersTotal } from "./reducers/OrderReducer";
import LogoutContainer from "./views/Logout/LogoutContainer/LogoutContainer";
import BusinessSumContainer from "./views/BusinessSum/BusinessSumContainer/BusinessSumContainer";
import RegistrationContainer from "./views/Registration/RegistrationContainer/RegistrationContainer";

import AuthContextProvider from "./context/AuthContextProvider";
import LoadingSpinner from "./components/LoadingSpinner"

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


    // store token in localstorage
      return (
          
          <div>
            <BrowserRouter>
              <AuthContextProvider>
              <OrderListContext.Provider value={{ordersState: orders, ordersDispatch: action}}>
              <OrderContext.Provider value={{orderListState: orderList, orderListDispatch: dispatch }}>
                  <Switch>
                      <Route  path='/registration' component={RegistrationContainer}/> 
                      <Route  path='/login' component={LoginContainer}/>

                      <Route  path='/profile'>
                        <ProfileContainer/>
                      </Route>
                      <Route  path='/business_summary'>
                        <BusinessSumContainer/> 
                      </Route>
                      <Route  path='/order_list'>
                        <OrderListContainer/> 
                      </Route>
                      <Route  path='/edit_menu'>
                        <EditMenuContainer/>
                      </Route>
                      <Route  path='/logout' component={LogoutContainer}/>
              
                      

                      <Route  path='/check-in/:id' component={TableNumberContainer}/> 
                      <Route  path='/menu/:id' component={MenuContainer}/>
                      <Route  path='/cart/:id' component={CartContainer}/>
                      <Route  path='/receipt/:id' component={ReceiptContainer}/>
                      <Route  path='/payment/:id' component={PaymentContainer}/>
                      <Route component={NotFound}></Route>
                </Switch>
              </OrderContext.Provider>
              </OrderListContext.Provider>
              </AuthContextProvider>
            </BrowserRouter>
          </div>
          
          
          
      );
}

export default App;
