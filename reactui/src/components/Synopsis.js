import React, { Component } from 'react';
import '../css/review.css';

class Synopisis extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return <div className="review-component">
        {
           
            this.props.synopsis.split("\n").map(pro =>(
                <p key={pro}>{pro}</p>
            ))
        }
    </div>
  }
}

export default Synopisis;
