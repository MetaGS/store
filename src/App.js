import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import MainHTML from "./pages/MainHTML";
import WithFooter from "./pages/WithFooter";
import Navbar from "./components/Navbar";

import useContextWithReducer, { Context } from './hooks/useContextWithReducer';
import './App.css';

function App() {
  const [state, dispatch] = useContextWithReducer();

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <MainHTML />
            </Route>

            <WithFooter />
            {/* <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route> */}
          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
}


export default App;


