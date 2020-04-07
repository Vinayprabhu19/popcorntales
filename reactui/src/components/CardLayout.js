import React, { Component } from 'react';
import '../css/component.css';
import Star from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';


class CardLayout extends Component {
  
  render() {
    return <div className="card-container">
      <Paper elevation={4} className="card" onClick={()=> this.props.onCardClick()}>
              <figure id="card-figure">
                <img id="card-img" alt="Movie" src={this.props.review.titleImage}/>
              </figure>
              <figcaption id="card-content" >
              <Star id="star"/>
              <p id="ratingText">{this.props.review.rating}/10</p>
              <div>
                {
                  this.props.review.genre.map(g =>(
                  <p className="genreText" key={g}>{g}</p>
                  ))
                }
              </div>
              </figcaption>
      </Paper>
      <p className="title">{this.props.review.title}</p>
      <p className="language">{this.props.review.language}</p>
    </div>
  }
}

export default CardLayout;
