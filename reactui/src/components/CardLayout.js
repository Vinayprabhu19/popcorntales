import React, { Component } from 'react';
import '../css/component.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class CardLayout extends Component {
  
  render() {
    return <div className="card-container">
      <Card className="card" onClick={()=> this.props.onCardClick()}>
          <CardContent>
              <img id="card-img" alt="Movie" src={this.props.titleImage}/>
          </CardContent>
      </Card>
      <p class="title">{this.props.title}</p>
    </div>
  }
}

export default CardLayout;
