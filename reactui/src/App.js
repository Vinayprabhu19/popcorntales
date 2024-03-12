import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

function App() {
  const reload = () => window.location.reload();
  const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './components/Home'));
  const Detail = lazy(() => import(/* webpackChunkName: 'Detail' */ './components/Detail'));
  const Movie = lazy(() => import('./components/Movie'));
  const Analytics = lazy(() => import('./components/Analytics'));
  const ImageAdder = lazy(() => import('./components/ImageAdder'));
  const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
  
  return (
    <Router>
      <Suspense fallback={<div style={{ 
                backgroundColor: '#45b3e0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                fontSize: '24px',
                lineHeight: '1.5',
            }}>
                <div>
                    Welcome to<br />Popcorn Tales
                </div>
            </div>
            }>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addMovie" exact component={Movie} />
          <Route path="/addImage" exact component={ImageAdder} />
          <Route path="/analytics" exact component={Analytics} />
          <Route path="/:movieName" component={Detail} />
          <Route path="/sitemap.xml" render={() => { reload(); return null; }} />
          {/* <Route path="/404" exact component={NotFoundPage} />
          <Redirect to="/404" /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
