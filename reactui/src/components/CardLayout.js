import React, { Component, Suspense, lazy} from 'react';
import Paper from '@material-ui/core/Paper';
import Spinner from 'react-bootstrap/Spinner';
class CardLayout extends Component {
  constructor(props){
    super(props);
    this.processImageData = this.processImageData.bind(this);
    props.review.titleImage = this.processImageData(props.review.titleImage);
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
        <Suspense fallback={<Spinner />}>
              <img className="card-image" alt={"Popcorn Tales - " + this.props.review.title } src={this.props.review.titleImage}/>
              </Suspense>
        </a>
    <div className="detail">
        <h3 className="language">{this.props.review.language}</h3>
        <h4 className="rating">{this.props.review.rating}/5</h4>
        </div>
  </Paper>
  }
  processImageData(image){
    var width,height;
    var width,height;
    if(window.matchMedia("(max-width: 576px)").matches){
      width=150;height=200;
    }
    else if(window.matchMedia("(max-width: 958px)").matches){
      width=200;height=260;
    }
    else if(window.matchMedia("(max-width: 1300px)").matches){
      width=220;height=250;
    }
    else if(window.matchMedia("(max-width: 2000px)").matches){
      width=250;height=300;
    }
    else{
      width=400;height=500;
    }
    return image+"&width="+width+"&height="+height;

  }
}

export default CardLayout;