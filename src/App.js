import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainHTML from "./pages/MainHTML";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar"

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <MainHTML />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
