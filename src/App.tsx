import React from 'react';
import './App.css';
import 'flexboxgrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/#">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
