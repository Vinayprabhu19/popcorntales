import React, { Suspense, lazy, Component } from 'react';
import GridList from '@material-ui/core/GridList';
const CardLayout = lazy(() => import('./CardLayout'));
import Spinner from 'react-bootstrap/Spinner';
class CardsList extends Component {
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.movies.length>0 && (this.props.movies[0].title != nextProps.movies[0].title))
    return true;
    return false;
  }
  render() {
    return <GridList className="App-Content cardGridList"  >
    {
    this.props.movies.map(image => (
       <Suspense key={image.title} fallback={<Spinner />}>
        <CardLayout key={image.title} review={image}/>
        </Suspense>
    ))}
  </GridList>
  }
}

export default CardsList;
