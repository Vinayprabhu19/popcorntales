import React, {lazy, Component } from 'react';
const CardLayout = lazy(() => import('./CardLayout'));
import Grid from '@mui/material/Unstable_Grid2';
import NoSsr from '@mui/base/NoSsr';
class CardsList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return <NoSsr> <Grid container defer={true}  justifyContent="center" className="App-Content cardGridList"  >
    {
    this.props.movies.map(image => (
        <CardLayout key={image.title} review={image}/>
      
    ))}
  </Grid>
  </NoSsr>
  }
}

export default CardsList;
