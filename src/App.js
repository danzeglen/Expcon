import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Pricing from './pages/pricing';
import Purchase from './pages/purchase';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path ='/pricing'>
            <Pricing/>
          </Route>
          <Route path = '/purchase'>
            <Purchase/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
