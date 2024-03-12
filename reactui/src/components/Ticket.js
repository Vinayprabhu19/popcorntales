import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
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
    <h5 className="centerAligned">Date Watched : {this.props.ticketDetails.watchDate}</h5>
    <h5 className="centerAligned">Place Watched : {this.props.ticketDetails.placeWatched}</h5>
    <div className="d-flex justify-content-center">
      <Paper elevation={20} id="ticket-container">
      <img src={this.props.ticketImage} className="ticketImage" alt={"Ticket"}></img>
      </Paper>
    </div>
  </div>
  }

}

export default Ticket;