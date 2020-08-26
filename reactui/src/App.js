import React, { Suspense, lazy } from 'react';
import {Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
function App() {
  const reload = () => window.location.reload();
  const Home = lazy(() => import('./components/Home'));
  const Detail = lazy(() => import('./components/Detail'));
  const Movie = lazy(() => import('./components/Movie'));
  const Analytics = lazy(() => import('./components/Analytics'));
  const ImageAdder = lazy(() => import('./components/ImageAdder'));
  const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
  return (
    <Router>
      <Suspense fallback={ <CircularProgress color="inherit" style={{marginLeft:"50%"}}/>}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/404" exact component={NotFoundPage} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/sitemap.xml" onEnter={reload} />
      <Route path="/addMovie" component={Movie} />
      <Route path="/addImage" component={ImageAdder} />
      <Route path="/:movieName" component={Detail} />
      <Redirect to="/404" />
    </Switch>
    </Suspense>
    </Router>
  );
}

export default App;
