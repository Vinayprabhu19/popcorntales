import React, { Component } from 'react';
import '../css/component.css';
import Star from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';


class CardLayout extends Component {
  
  render() {
    return <div className="card-container">
      <Paper elevation={19} className="card" onClick={()=> this.props.onCardClick()}>
              <figure id="card-figure">
                <img id="card-img" alt="Image for your latest movie review" src={this.props.review.titleImage}/>
              </figure>
              <figcaption id="card-content" >
              <Star id="star"/>
              <h3>{this.props.review.rating}/5</h3>
              <div>
                {
                  this.props.review.genre.map(g =>(
                  <h4 key={g}>{g}</h4>
                  ))
                }
              </div>
              </figcaption>
      </Paper>
      <h5 className="title">{this.props.review.title}</h5>
      <h6 className="language">{this.props.review.language}</h6>
    </div>
  }
}

export default CardLayout;
