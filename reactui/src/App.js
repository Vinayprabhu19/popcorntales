import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Home from './components/Home';
import Detail from './components/Detail';
import Movie from './components/Movie';
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/review/:movieName" component={Detail} />
      <Route path="/addMovie" component={Movie} />
    </Switch>
    </Router>
  );
}

export default App;
