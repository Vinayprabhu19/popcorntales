import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazy-load';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import CancelIcon from '@material-ui/icons/Cancel';
import ReactHtmlParser from 'react-html-parser';
class HitAndMiss extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(JSON.stringify(this.props) === JSON.stringify(props) )
    return false;
    return true;
  }
  render() {
    return <div className="review-component">
    <>
        <h4 className="subHeader">What worked well?</h4>
        {
            this.props.pros.map(pro=>(
                <div className="flexbox-container" key={pro}>
                    <div><BeenhereIcon className="checkIcon" /></div>
                    <div className='pointerText'>{ ReactHtmlParser("<p>"+pro+"</p>") }</div>
                </div>
            ))
        }
        <h4 className="subHeader">What didn't work well?</h4>
        {
            this.props.cons.map(con=>(
                <div className="flexbox-container" key={con}>
                    <div><CancelIcon className="cancelIcon" /></div>
                    <div className='pointerText'>{ ReactHtmlParser("<p>"+con+"</p>") }</div>
                </div>
            ))
        }
        </>
        <div className="d-flex justify-content-center">
          <LazyLoad>
            <Paper elevation={10}>
        <img src={this.props.url} className="graphImage" />
        </Paper>
        </LazyLoad>
        </div>
    </div>
  }

}

export default HitAndMiss;