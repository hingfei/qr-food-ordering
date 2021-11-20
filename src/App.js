import {BrowserRouter, Route, Switch} from "react-router-dom";
import TableNumberContainer from "./views/TableNumber/TableNumberContainer/TableNumberContainer";
import MenuContainer from "./views/Menu/MenuContainer/MenuContainer";
import NotFound from "./errors/NotFound";
import CartContainer from "./views/Cart/CartContainer/CartContainer";
import React, {useReducer} from "react";
import {initialOrderList, orderReducer} from "./reducers/CartReducer";
import ReceiptContainer from "./views/Receipt/ReceiptContainer/ReceiptContainer";
import OrderListContainer from "./views/OrderList/OrderListContainer/OrderListContainer";
import { orderListReducer, ordersTotal } from "./reducers/OrderReducer";

export const OrderContext = React.createContext();
export const OrderListContext = React.createContext();
// Todo: create dynamic url with diff restaurants name and Route other pages lol

function App() {
    const [orderList, dispatch] = useReducer(orderReducer, initialOrderList);
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
                <Route component={NotFound}/>
              </Switch>
            </BrowserRouter>
          </div>
          </OrderListContext.Provider>
          </OrderContext.Provider>
          
      );
}

export default App;
