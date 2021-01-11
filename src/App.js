import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import MainHTML from "./pages/MainHTML";
import WithFooter from "./pages/WithFooter";
import Navbar from "./components/Navbar";
import Check from './pages/Check'
import ProductPage from './pages/ProductPage';


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
      </Context.Provider>

    </Router>
  );
}


export default App;

// rfcp edf rafcp
