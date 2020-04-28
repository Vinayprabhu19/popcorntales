import React, { Component } from 'react';
import '../css/review.css';
import BeenhereIcon from '@material-ui/icons/Beenhere';

class Review extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state={
            pros : props.review.pros
        }
      }
  render() {
    return <div className="review-component">
        <h4>Pros</h4>
        {
            this.state.pros.map(pro=>(
                <div class="flexbox-container" key={pro}>
                    <div><BeenhereIcon className="checkIcon" /></div>
                    <div >{pro}</div>
                </div>
            ))
        }
    </div>
  }
}

export default Review;
