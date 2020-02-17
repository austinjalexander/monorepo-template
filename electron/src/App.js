import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './scenes/Home';
import ProfileSync from './scenes/ProfileSync';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile-sync" component={ProfileSync} />
      </Switch>
    </Router>
  );
}

export default App;
