import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LazyImage from "../components/LazyImage";
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
class CardLayout extends Component {
  
  stars = (starCount) => {
    if(starCount === undefined)
      return;
    const value = starCount;
    return (
      // <Rating name="disabled" value={value} precision={0.25}  size="large"/>
  
          <StyledRating name="customized-color" defaultValue={value} precision={0.25}
                      icon={<FavoriteIcon fontSize="inherit" />}/>
    );
  }
  render() {
    const stars = this.stars(this.props.review.rating);
    return <Paper className="card-container" elevation={8}>
      <h4 className="title">{this.props.review.title}</h4>
      <Paper elevation={0} className="card"  >
          <a href={this.props.review.title}>
              <figure id="card-figure">
                <LazyImage className="card-img" alt={"Popcorn Tales - " + this.props.review.title } unloadedSrc={this.props.review.titleImage}/>
              </figure>
          </a>
      </Paper>
      <div className="detail">
          <h3 className="language">{this.props.review.language}</h3>
          <h4 className="rating">{this.props.review.rating}/5</h4>
          </div>
    </Paper>
  }
}

export default CardLayout;