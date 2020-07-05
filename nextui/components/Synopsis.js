import React, { Component } from 'react';

class Synopisis extends Component {
    constructor(props) {
        super(props);
          this.state={
            synopsis : props.synopsis
          }
        
      }

  render() {
    return <div className="review-component">
       {
            this.state.synopsis.split("\n").map(para =>(
                <p key={para} className="synopsis">{para}</p>
            ))
       } 
    </div>
  }
}

export default Synopisis;
