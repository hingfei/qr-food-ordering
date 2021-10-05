import {BrowserRouter, Route, Switch} from "react-router-dom";
import TableNumberContainer from "./views/TableNumber/TableNumberContainer/TableNumberContainer";
import MenuContainer from "./views/Menu/MenuContainer/MenuContainer";
import NotFound from "./errors/NotFound";

// Todo: create dynamic url with diff restaurants name and Route other pages lol

function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/table_number' component={TableNumberContainer}/>
            <Route path='/menu' component={MenuContainer}/>
            <Route path='/cart' component={CartContainer}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
