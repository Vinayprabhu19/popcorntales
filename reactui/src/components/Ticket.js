import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ImageLoader from './ImageLoader';
class Ticket extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(nextProps) )
    return false;
    return true;
  }
  render() {
    return <div id="ticket-component">
    <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"center"} gutterBottom>Date Watched : {this.props.ticketDetails.watchDate}</Typography>
    <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"center"} gutterBottom>Place Watched : {this.props.ticketDetails.placeWatched}</Typography>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper elevation={20} id="ticket-container">
      <ImageLoader src={this.props.ticketImage} className="ticketImage" alt={"Ticket"}></ImageLoader>
      </Paper>
    </div>
  </div>
  }

}

export default Ticket;