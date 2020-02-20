import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {
  FiHome,
} from 'react-icons/fi';
import {
  GiScubaTanks,
} from 'react-icons/gi';
import Home from './scenes/Home';
import NBLinfo from './scenes/NBLinfo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="Layout">
        <nav className="Layout-nav">
          <Link className="Layout-link" to="/">
            <FiHome data-delay-show='500' data-tip="Home" size={50} />
            <ReactTooltip />
          </Link>
          <Link className="Layout-link" to="/nbl-info">
            <GiScubaTanks data-delay-show='500' data-tip="NBL Info" size={50} />
            <ReactTooltip />
          </Link>
        </nav>
        <main className="Layout-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nbl-info" component={NBLinfo} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
