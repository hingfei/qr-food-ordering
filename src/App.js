import {BrowserRouter, Route, Switch} from "react-router-dom";
import TableNumberContainer from "./views/TableNumber/TableNumberContainer/TableNumberContainer";
import MenuContainer from "./views/Menu/MenuContainer/MenuContainer";
import NotFound from "./errors/NotFound";
import CartContainer from "./views/Cart/CartContainer/CartContainer";
import React, {useReducer} from "react";
import {initialOrderList, orderReducer} from "./reducers/CartReducer";
import ReceiptContainer from "./views/Receipt/ReceiptContainer/ReceiptContainer";
import PaymentContainer from "./views/Payment/PaymentContainer/PaymentContainer";

export const OrderContext = React.createContext();
// Todo: create dynamic url with diff restaurants name and Route other pages lol

function App() {
    const [orderList, dispatch] = useReducer(orderReducer, initialOrderList);

      return (
          <OrderContext.Provider value={{orderListState: orderList, orderListDispatch: dispatch }}>
          <div>
            <BrowserRouter>
              <Switch>
                  <Route path='/table_number' component={TableNumberContainer}/>
                  <Route path='/menu' component={(MenuContainer)}/>
                  <Route path='/cart' component={CartContainer}/>
                  <Route path='/receipt' component={ReceiptContainer}/>
                  <Route path='/payment' component={PaymentContainer}/>
                <Route component={NotFound}/>
              </Switch>
            </BrowserRouter>
          </div>
          </OrderContext.Provider>
      );
}

export default App;
