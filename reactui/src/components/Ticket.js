import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazy-load';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class Ticket extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(props) )
    return false;
    return true;
  }
  render() {
    return <div id="ticket-component">
    <h5 className="centerAligned">Date Watched : {this.props.ticketDetails.watchDate}</h5>
    <h5 className="centerAligned">Place Watched : {this.props.ticketDetails.placeWatched}</h5>
    <div className="d-flex justify-content-center">
      <Paper elevation={20} id="ticket-container">
      <LazyLoad>
      <img src={this.props.ticketImage} className="ticketImage" alt={"Ticket"}></img>
      </LazyLoad>
      </Paper>
    </div>
  </div>
  }

}

export default Ticket;