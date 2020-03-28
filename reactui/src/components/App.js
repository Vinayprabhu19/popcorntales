import React, { Component } from 'react';
import movieImg from '../resources/movie.png';
import '../css/App.css';
import { Button } from '@material-ui/core';
import CardLayout from "./CardLayout";
import GridList from '@material-ui/core/GridList';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      reviews: []
     };
  }

  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
          const rvs = result.map(item => {
            return item;
          });
          this.setState({
            reviews: rvs
          });
      });
      
      
  }
render(){
  let images=[1,2,3,4,5,6,7];
  let columns = 3;
  return (
    <div className="App">
      <header className="App-header">
        <p> Popcorn Tales </p>
      </header>
      {this.props.counter}
      <img id="movie-img" src={movieImg} alt="Movie"/>
      <div className="App-Content">
        <GridList className="cardGridList"  >
                      {this.state.reviews.map(image => (
                          <CardLayout key={image.reviewId} onCardClick ={()=> console.log(image)} titleImage ={image.titleImage} title={image.title}/>
                      ))}
        </GridList>
      </div>
    </div>
  );
}
}

export default App;
