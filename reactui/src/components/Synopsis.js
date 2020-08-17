import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
class Synopsis extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(this.props) )
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