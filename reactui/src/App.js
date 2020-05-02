import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Home from './components/Home';
import Detail from './components/Detail';
import Movie from './components/Movie';
import { Route,Switch } from "react-router-dom";

function App() {
  const reload = () => window.location.reload();
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sitemap.xml" onEnter={reload} />
      <Route path="/addMovie" component={Movie} />
      <Route path="/review/:movieName" component={Detail} />
    </Switch>
    </Router>
  );
}

export default App;
