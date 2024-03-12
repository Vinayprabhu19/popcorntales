import React, {lazy, Component } from 'react';
const CardLayout = lazy(() => import('./CardLayout'));
import Grid from '@mui/material/Unstable_Grid2';
class CardsList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return <Grid container defer={true}  justifyContent="center" className="App-Content"  >
    {
    this.props.movies.map(image => (
        <CardLayout key={image.title} review={image}/>
      
    ))}
  </Grid>
  }
}

export default CardsList;
