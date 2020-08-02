import React from 'react';
import history from './services/history';
import Home from './components/Home';
import Detail from './components/Detail';
import Movie from './components/Movie';
import Analytics from './components/Analytics';
import ImageAdder from './components/ImageAdder';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const reload = () => window.location.reload();
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/sitemap.xml" onEnter={reload} />
      <Route path="/addMovie" component={Movie} />
      <Route path="/addImage" component={ImageAdder} />
      <Route path="/review/:movieName" component={Detail} />
      <Route path="/:movieName" component={Detail} />
    </Switch>
    </Router>
  );
}

export default App;
