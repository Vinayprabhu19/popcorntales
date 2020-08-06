import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazy-load';
class CardLayout extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.review.title == nextProps.review.title)
    return false;
    return true;
  }
  render() {
    return <Paper className="card-container" elevation={8}>
    <h4 className="title">{this.props.review.title}</h4>
        <a href={this.props.review.title}>
              <LazyLoad>
              <img className="card-image" alt={"Popcorn Tales - " + this.props.review.title } src={this.props.review.titleImage}/>
              </LazyLoad>
        </a>
    <div className="detail">
        <h3 className="language">{this.props.review.language}</h3>
        <h4 className="rating">{this.props.review.rating}/5</h4>
        </div>
  </Paper>
  }
}

export default CardLayout;
