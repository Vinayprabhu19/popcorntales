import React, { Suspense, lazy } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

const Redirect = React.lazy(() =>
  import("react-router-dom").then(
    module => ({
      default: module.Redirect
    })
  )
);

function App() {
  const reload = () => window.location.reload();
  const Home = lazy(() => import(/* webpackChunkName: 'Home' */'./components/Home'));
  const Detail = lazy(() => import(/* webpackChunkName: 'Detail' */'./components/Detail'));
  const Movie = lazy(() => import('./components/Movie'));
  const Analytics = lazy(() => import('./components/Analytics'));
  const ImageAdder = lazy(() => import('./components/ImageAdder'));
  const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
  return (
    <Router>
      <Suspense fallback={ <h4>Loading ..</h4>}>
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
