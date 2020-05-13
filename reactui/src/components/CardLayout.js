import React, { Component } from 'react';
import '../css/card.css';
import Star from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
class CardLayout extends Component {
  
  stars = (starCount) => {
    if(starCount == undefined)
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
    return <a className="card-container" href={this.props.review.title}>
      <Paper elevation={19} className="card" onClick={()=> this.props.onCardClick()}>
        <div>
              <figure id="card-figure">
                <img id="card-img" alt="Image for your latest movie review" src={this.props.review.titleImage}/>
              </figure>
              <figcaption id="card-content" >
              {/* <Star id="star"/> */}
              <h3>{this.props.review.rating}/5</h3>
              {stars}
              <div>
                {
                  this.props.review.genre.map(g =>(
                  <h4 key={g}>{g}</h4>
                  ))
                }
              </div>
               
              </figcaption>
          </div>
      </Paper>
      <h5 className="title">{this.props.review.title}</h5>
      <h6 className="language">{this.props.review.language}</h6>
     
    </a>
  }
}

export default CardLayout;
