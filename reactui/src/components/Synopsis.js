import React, { Component } from 'react';
import parse from 'html-react-parser';

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
      <div key={para}>{ parse("<p>"+para+"</p>") }</div>
      ))
    }
  </div>
  }

}

export default Synopsis;