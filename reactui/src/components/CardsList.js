import React, { Suspense, lazy, Component } from 'react';
import ImageList from '@material-ui/core/ImageList';
const CardLayout = lazy(() => import('./CardLayout'));
import Spinner from 'react-bootstrap/Spinner';
class CardsList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return <ImageList className="App-Content cardGridList"  >
    {
    this.props.movies.map(image => (
       <Suspense key={image.title} fallback={<Spinner />}>
        <CardLayout key={image.title} review={image}/>
        </Suspense>
    ))}
  </ImageList>
  }
}

export default CardsList;
