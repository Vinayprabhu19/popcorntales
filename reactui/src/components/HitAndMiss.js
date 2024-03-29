import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CancelIcon from '@mui/icons-material/Cancel';
import parse from 'html-react-parser';
import ImageLoader from './ImageLoader';
class HitAndMiss extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(this.props) )
    return false;
    return true;
  }
  render() {
    return <div className="review-component">
    <>
        <h4 >What worked well?</h4>
        {
            this.props.pros.map(pro=>(
              <div style={{ display: "flex", alignItems: "center" }} key={pro}>
                    <div><BeenhereIcon className="checkIcon" /></div>
                    <div>{ parse("<p>"+pro+"</p>") }</div>
                </div>
            ))
        }
        <h4 >What didn't work well?</h4>
        {
            this.props.cons.map(con=>(
              <div style={{ display: "flex", alignItems: "center" }} key={con}>
                    <div><CancelIcon className="cancelIcon" /></div>
                    <div >{ parse("<p>"+con+"</p>") }</div>
                </div>
            ))
        }
        </>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={10}>
        <ImageLoader src={this.props.url} className="graphImage" alt={"Graph Image"}/>
        </Paper>
        </div>
    </div>
  }

}

export default HitAndMiss;