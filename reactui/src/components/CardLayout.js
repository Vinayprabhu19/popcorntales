import React, { Component } from 'react';
import '../css/component.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class CardLayout extends Component {
  
  render() {
    return <div className="card-container">
      <a className="card" onClick={()=> this.props.onCardClick()}>
          
              <figure id="card-figure">
                <img id="card-img" alt="Movie" src={this.props.titleImage}/>
              </figure>
              <figcaption id="card-content" >
              <p className="title">{this.props.title}</p>
              </figcaption>
      </a>
      <p className="title">{this.props.title}</p>
    </div>
  }
}

export default CardLayout;
