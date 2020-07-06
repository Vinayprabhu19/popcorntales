import React, { Component } from 'react';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LazyImage from "../components/LazyImage";
class Review extends Component {
    constructor(props) {
        super(props);
        this.state={
            pros : props.review.pros,
            cons : props.review.cons,
            url : "https://api.popcorntales.com/image?object=Graph/"+props.title+".png&width=500&height=500"
        }
      }
  render() {
    return <div className="review-component">
        <h4 className="subsection">What worked well?</h4>
        {
            this.state.pros.map(pro=>(
                <div className="flexbox-container" key={pro}>
                    <div><BeenhereIcon className="checkIcon" /></div>
                    <p className="pointerText">{pro}</p>
                </div>
            ))
        }
        <h4 className="subsection">What didn't work well?</h4>
        {
            this.state.cons.map(con=>(
                <div className="flexbox-container" key={con}>
                    <div><CancelIcon className="cancelIcon" /></div>
                    <p className="pointerText">{con}</p>
                </div>
            ))
        }
        <Grid container justify = "center" className="graphContainer">
        <Paper elevation={10}>
        <LazyImage src={this.state.url} className="graphImage" alt={"Popcorn Tales " + this.props.title}/>
        </Paper>
        </Grid>
    </div>
  }
}

export default Review;
