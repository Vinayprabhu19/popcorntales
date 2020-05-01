import React, { Component } from 'react';
import '../css/review.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class Cast extends Component {
    constructor(props) {
        super(props);
        this.state={
            ticketDetails:this.props.ticketDetails
        }
      }
  render() {
    return <div className="ticket-component">
       <h5>Date Watched : {this.state.ticketDetails.watchDate}</h5>
       <h5>Venue : {this.state.ticketDetails.placeWatched}</h5>
       <Grid container justify = "center">
       <Paper elevation={20} id="ticket-container">
       <img src={this.state.ticketDetails.ticketImage} className="ticketImage"></img>
       </Paper>
       </Grid>
    </div>
  }
}

export default Cast;
