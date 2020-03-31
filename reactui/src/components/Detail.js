import React from "react";
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import CardLayout from "./CardLayout";
import "../css/Detail.css";
import Stars from "./Stars";
import Theaters from '@material-ui/icons/Theaters';
import { Button } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedMovie: {
            genre : []
        }
    };
  }

  componentDidMount(){
    var movieTitle = this.props.match.params.movieName;
    fetch('../data.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }})
    .then(response => response.json())
    .then(result => {
        const rvs = result.map(item => {
          return item;
        });
        var selectedMovie = null;
        for(var i=0;i< rvs.length ;i++){
            if(rvs[i].title == movieTitle){
                selectedMovie = rvs[i];
               break;
            }
        }
        if(selectedMovie ==null){
            this.props.history.push('/');
        }
        this.setState({
            selectedMovie : selectedMovie
          });

    });   
  }

render(){
  return (
    <div id="container">
        <AppBar id="appBar" position="static">
        <Toolbar>
        <div>
            <a id="title" href="/">Popcorn Tales</a>
          </div>
          </Toolbar>
        </AppBar>
        
        <div className="movie-header">
            <div id="card" >
            <CardLayout review={this.state.selectedMovie} onCardClick={()=>{}}/>
            </div>
            <div id="movie-description">
                <p id="movieTitle">{this.state.selectedMovie.title}</p>
                <p id="movieYear">{this.state.selectedMovie.year}</p>
                <Stars stars={this.state.selectedMovie.rating}/>
                <div>
                <Button id="instagramBtn" variant="contained" color="primary" href={this.state.selectedMovie.instagramReview}>Instagram</Button>
                </div>
               
            </div>
            <div id="trailer_div">
                <iframe id="trailer" src={this.state.selectedMovie.trailer}>
                </iframe>
            </div>
        </div>
          
    </div>

  );
}
}

export default Home;
