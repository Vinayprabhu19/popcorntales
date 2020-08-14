import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazy-load';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';

import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class Synopsis extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(props) )
    return false;
    return true;
  }
  render() {
    return  <div >
    { this.props.synopsis.split("\n").map(para =>(
      <div key={para}>{ ReactHtmlParser("<p>"+para+"</p>") }</div>
      ))
    }
  </div>
  }

}

export default Synopsis;