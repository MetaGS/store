import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";

import MainHTML from "./pages/MainHTML";
import WithFooter from "./pages/WithFooter";
import Navbar from "./components/Navbar";
import Check from "./pages/Check";
import ProductPage from "./pages/ProductPage";
import useAuthentication from "./firebase/auth";

import "./App.css";

function App() {
  useAuthentication();

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <MainHTML />
        </Route>
        {/* <Route path="/check" component={Check} />
            <Route path="/check2" component={ProductPage} /> */}
        <WithFooter />
        {/* <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route> */}
      </Switch>
    </div>
  );
}

export default App;

// rfcp edf rafcp
