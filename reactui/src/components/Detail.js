import React from "react";
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardLayout from "./CardLayout";
import "../css/Detail.css";
import Stars from "./Stars";
import { Button } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

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

  handleChange(){

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
        <div className="movie-detail">
          <AppBar position="static">
            <Tabs onChange={this.handleChange}  variant="fullWidth" aria-label="simple tabs example">
              <Tab label="Item One" className="tab"/>
              <Tab label="Item Two" className="tab"/>
              <Tab label="Item Three" className="tab"/>
            </Tabs>
          </AppBar>
        </div>
    </div>

  );
}
}

export default Home;
