import React, { Component } from 'react';
import '../css/component.css';
import Star from '@material-ui/icons/Star';


class CardLayout extends Component {
  
  render() {
    return <div className="card-container">
      <a className="card" onClick={()=> this.props.onCardClick()}>
              <figure id="card-figure">
                <img id="card-img" alt="Movie" src={this.props.review.titleImage}/>
              </figure>
              <figcaption id="card-content" >
              <Star class="star"/>
              <p id="ratingText">{this.props.review.rating}/10</p>
              <div>
                {
                  this.props.review.genre.map(g =>(
                  <h2 key={g}>{g}</h2>
                  ))
                }
              </div>
              </figcaption>
      </a>
      <p className="title">{this.props.review.title}</p>
    </div>
  }
}

export default CardLayout;
