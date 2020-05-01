import React, { Component } from 'react';
import '../css/review.css';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';

class Review extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state={
            pros : props.review.pros,
            cons : props.review.cons
        }
      }
  render() {
    return <div className="review-component">
        <h4>Pros</h4>
        {
            this.state.pros.map(pro=>(
                <div className="flexbox-container" key={pro}>
                    <div><BeenhereIcon className="checkIcon" /></div>
                    <div >{pro}</div>
                </div>
            ))
        }
        <h4 className="subsection">Cons</h4>
        {
            this.state.cons.map(con=>(
                <div class="flexbox-container" key={con}>
                    <div><CancelIcon className="cancelIcon" /></div>
                    <div >{con}</div>
                </div>
            ))
        }
    </div>
  }
}

export default Review;
