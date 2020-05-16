import React, { Component } from 'react';
import '../css/review.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class Cast extends Component {
    constructor(props) {
        super(props);
        props.ticketDetails.watchDate=new Date(props.ticketDetails.watchDate).toDateString();
        if(!this.props.ticketDetails.ticketImage.startsWith("https://api.popcorntales.com/image?object="))
          this.props.ticketDetails.ticketImage = "https://api.popcorntales.com/image?object="+this.props.ticketDetails.ticketImage;
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
       <img src={this.state.ticketDetails.ticketImage} className="ticketImage" alt={"Ticket image of the movie"}></img>
       </Paper>
       </Grid>
    </div>
  }
}

export default Cast;
