import './App.css';
import MainHTML from "./pages/MainHTML";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
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
