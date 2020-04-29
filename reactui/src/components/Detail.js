import React from "react";
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../css/Detail.css";
import Stars from "./Stars";
import { Button } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeButton from '@material-ui/icons/Home';
import Synopsis from './Synopsis';
import Review from './Review';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedMovie: {
            genre : [],
            genreText :"",
            review : {
              synopsis:"",
              pros:[],
              cons:[]
            }
        },
        selectedTab:null
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
            if(rvs[i].title === movieTitle){
                selectedMovie = rvs[i];
               break;
            }
        }
        if(selectedMovie == null){
          return;
        }
        if(selectedMovie.genre.length>0){
          var str= selectedMovie.genre[0];
          for(i=1;i<selectedMovie.genre.length;i++){
              str = str+"/"+selectedMovie.genre[i];
          }
          selectedMovie.genreText=str;
        }
      
        if(selectedMovie ==null){
            this.props.history.push('/');
        }
        console.log(typeof(selectedMovie.rating))
        this.setState({
            selectedMovie : selectedMovie,
            selectedTab:0
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
        case 0: 
          if(this.state.selectedMovie.review !== undefined)
            return <Synopsis synopsis={this.state.selectedMovie.review.synopsis}/>
        break;
        case 1: 
          if(this.state.selectedMovie.review != undefined)
            return <Review review={this.state.selectedMovie.review}/>
         break;
      case 2: 
          return <p>Cast</p> 
       break;
    case 3: 
          return <p>Ticket</p> 
        break;
        default: {
            return <p></p>
        }
    }   
};

stars = (starCount) => {
  if(starCount == undefined)
    return;
  const value = starCount;
  return (
    <Rating name="disabled" value={value} precision={0.5}  size="large"/>
  );
}


render(){
  const toolbar = this.getToolbar();
  const stars = this.stars(this.state.selectedMovie.rating);
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
              <Paper elevation={19}>
              <img id="card-img" alt="Movie" src={this.state.selectedMovie.titleImage}/>
              </Paper>
              <Hidden smDown>
              <Grid container justify = "center" id="starPhoto">
                  {stars}
                  </Grid>
              
              </Hidden>
            </div>
            <Hidden mdUp >
                  <div className="topHeader">
                  <p className="headerLevel1 centerAligned">{this.state.selectedMovie.title} {this.state.selectedMovie.year}</p>
                  <p className="headerLevel2 centerAligned">{this.state.selectedMovie.genreText}</p>
                  <p className="headerLevel2 centerAligned">{this.state.selectedMovie.language}</p>
                  
                  <Grid container justify = "center">
                  {stars}
                  </Grid>
                  
                  </div>
            </Hidden>
            <Hidden smDown>
            <div id="movie-description">
                <p className="headerLevel1">{this.state.selectedMovie.title}</p>
                <p className="headerLevel2">{this.state.selectedMovie.year}</p>
                <p className="headerLevel2">{this.state.selectedMovie.genreText}</p>
                <p className="headerLevel2">{this.state.selectedMovie.rating}/5</p>   
            </div>
            </Hidden>
            
            <Hidden mdDown>
              <div id="trailer_div">
                  <iframe id="trailer" title={this.state.selectedMovie} src={this.state.selectedMovie.trailer}>
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

export default Detail;
