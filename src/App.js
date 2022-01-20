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
import LogoutContainer from "./views/Logout/LogoutContainer/LogoutContainer";
import BusinessSumContainer from "./views/BusinessSum/BusinessSumContainer/BusinessSumContainer";
import RegistrationContainer from "./views/Registration/RegistrationContainer/RegistrationContainer";
import SomethingWentWrong from "./errors/SomethingWentWrong";
import AuthContextProvider from "./context/AuthContextProvider";
import CheckUserLogin from "./components/CheckUserLogin";

// Create context for customer cart
export const OrderContext = React.createContext();
// Todo: create dynamic url with diff restaurants name and Route other pages lol

function App() {
    // Reducer for customer cart
    const [orderList, dispatch] = useReducer(orderReducer, initialOrderList);

    // store token in localstorage
      return (
          
          <div>
            <BrowserRouter>
              <AuthContextProvider>
              <OrderContext.Provider value={{orderListState: orderList, orderListDispatch: dispatch }}>
                  <Switch>
                      <Route  path='/registration' component={RegistrationContainer}/> 
                      <Route  path='/login' component={LoginContainer}/>

                      <CheckUserLogin path='/profile'>
                        <ProfileContainer/>
                      </CheckUserLogin>
                      <CheckUserLogin  path='/business_summary'>
                        <BusinessSumContainer/> 
                      </CheckUserLogin>
                      <CheckUserLogin  path='/order_list'>
                        <OrderListContainer/> 
                      </CheckUserLogin>
                      <CheckUserLogin  path='/edit_menu'>
                        <EditMenuContainer/>
                      </CheckUserLogin>
                      <Route  path='/logout' component={LogoutContainer}/>
              
                      

                      <Route  path='/check-in/:id' component={TableNumberContainer}/> 
                      <Route  path='/menu/:id' component={MenuContainer}/>
                      <Route  path='/cart/:id' component={CartContainer}/>
                      <Route  path='/receipt/:id' component={ReceiptContainer}/>
                      <Route  path='/payment/:id' component={PaymentContainer}/>
                      <Route path='/error' component={SomethingWentWrong} />
                      <Route component={NotFound}></Route>

                </Switch>
              </OrderContext.Provider>
              </AuthContextProvider>
            </BrowserRouter>
          </div>
          
          
          
      );
}

export default App;
