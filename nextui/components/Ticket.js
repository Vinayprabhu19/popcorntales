import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LazyImage from "../components/LazyImage";
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
      <h5 className="Ticket">Date Watched : {this.state.ticketDetails.watchDate}</h5>
       <h5 className="Ticket">Place Watched : {this.state.ticketDetails.placeWatched}</h5>
       <Grid container justify = "center">
       <div id="ticket-container">
       <LazyImage src={this.state.ticketDetails.ticketImage} className="ticketImage" alt={"Ticket image of the movie"}/>
       </div>
       </Grid>
    </div>
  }
}

export default Cast;
