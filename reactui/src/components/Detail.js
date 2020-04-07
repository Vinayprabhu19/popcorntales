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
import HomeButton from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedMovie: {
            genre : [],
            genreText :""
        },
        selectedTab:0
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
        if(selectedMovie.genre.length>0){
          var str= selectedMovie.genre[0];
          for(var i=1;i<selectedMovie.genre.length;i++){
              str = str+"/"+selectedMovie.genre[i];
          }
          selectedMovie.genreText=str;
        }
      
        if(selectedMovie ==null){
            this.props.history.push('/');
        }
        this.setState({
            selectedMovie : selectedMovie
          });

    });   
  }

  handleChange(v){
    this.setState({
      selectedTab:v
    })
  }

  getToolbar = () => {
    switch(this.state.selectedTab) {
        case 1: {
            return <p>Synopsis</p> 
        }
        case 2: {
          return <p>Movie</p> 
      }
      case 3: {
        return <p>cast</p> 
    }
        default: {
            return <p></p>
        }
    }   
};

render(){
  const toolbar = this.getToolbar();
  return (
    <div id="container">
        <AppBar id="appBar" position="static">
        <Toolbar>
        <div>
            <a href="/"><HomeButton/></a>
            <p id="title">Popcorn Tales</p>
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
                <p id="genre">{this.state.selectedMovie.genreText}</p>
                <div>
                <Button id="instagramBtn" variant="contained" color="primary" href={this.state.selectedMovie.instagramReview}>Instagram</Button>
                </div>
               
            </div>
            <Hidden mdDown>
              <div id="trailer_div">
                  <iframe id="trailer" src={this.state.selectedMovie.trailer}>
                  </iframe>
              </div>
            </Hidden>
            
        </div>
        <div className="movie-detail">
          <AppBar position="static">
            <Tabs onChange={(e,v)=>{this.handleChange(v)}}  value={this.state.selectedTab} variant="fullWidth" aria-label="simple tabs example">
              <Tab value={0} label="Synopsis" className="tab"/>
              <Tab value={1} label="Review" className="tab"/>
              <Tab value={2} label="Cast" className="tab"/>
              <Tab value={3} label="Ticket" className="tab"/>
            </Tabs>
          </AppBar>
          <div>
          {toolbar}
          </div>
        </div>
    </div>

  );
}
}

export default Home;
