import React, {lazy, Component } from 'react';
const CardLayout = lazy(() => import('./CardLayout'));
import Grid from '@mui/material/Grid';
class CardsList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return <Grid container  justifyContent="center" className="App-Content cardGridList"  >
    {
    this.props.movies.map(image => (
        <CardLayout key={image.title} review={image}/>
      
    ))}
  </Grid>
  }
}

export default CardsList;
