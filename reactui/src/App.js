import React, { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const reload = () => window.location.reload();
  const Home = lazy(() => import('./components/Home'));
const Detail = lazy(() => import('./components/Detail'));
const Movie = lazy(() => import('./components/Movie'));
const Analytics = lazy(() => import('./components/Analytics'));
const ImageAdder = lazy(() => import('./components/ImageAdder'));
  return (
    <Router >
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/sitemap.xml" onEnter={reload} />
      <Route path="/addMovie" component={Movie} />
      <Route path="/addImage" component={ImageAdder} />
      <Route path="/review/:movieName" component={Detail} />
      <Route path="/:movieName" component={Detail} />
    </Switch>
    </Suspense>
    </Router>
  );
}

export default App;
