import React from "react";
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../css/Detail.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeButton from '@material-ui/icons/Home';
import Synopsis from './Synopsis';
import Review from './Review';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Cast from './Cast';
import Ticket from './Ticket';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedMovie: {
            genre : [],
            review : {
              synopsis:"",
              pros:[],
              cons:[]
            }
        },
        selectedTab:null,
        loading:true
    };
  }

  componentDidMount(){
    var movieTitle = this.props.match.params.movieName;
    fetch('https://api.popcorntales.com/moviereview?movie='+movieTitle,{
        headers : { 
          'Accept': 'application/json'
         }})
    .then(response => response.json())
    .then(result => {
        result.review=JSON.parse(result.review);
        result.ticketDetails = JSON.parse(result.ticketDetails);
        this.setState({
            selectedMovie : result,
            selectedTab:0,
            loading:false
          });
    })
    .catch(error =>{
      console.error(error);
      this.props.history.push('/');
    })  
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
          return <Cast cast={this.state.selectedMovie.cast}/>
       break;
    case 3: 
          return <Ticket ticketDetails={this.state.selectedMovie.ticketDetails}/>
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
    // <Rating name="disabled" value={value} precision={0.25}  size="large"/>

        <StyledRating name="customized-color" defaultValue={value} precision={0.25}
                    icon={<FavoriteIcon fontSize="inherit" />}/>
  );
}


render(){
  const toolbar = this.getToolbar();
  const stars = this.stars(this.state.selectedMovie.rating);
  return (
    <div>
    <Backdrop open={this.state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
    <div id="container" className={this.state.loading ? 'hidden' : ''}>
        
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
                  <p className="headerLevel1 centerAligned">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</p>
                  <p className="headerLevel2 centerAligned" >{this.state.selectedMovie.language}</p>
                  <p className="headerLevel2 centerAligned">{this.state.selectedMovie.genre.join(",")}</p>
                  
                  <Grid container justify = "center">
                  {stars}
                  </Grid>
                  </div>
            </Hidden>
            <Hidden smDown>
            <div id="movie-description">
                <p className="headerLevel1">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</p>
                <p className="headerLevel2">{this.state.selectedMovie.language}</p>
                <p className="headerLevel2">{this.state.selectedMovie.genre.join(",")}</p>
                <p className="headerLevel2">{this.state.selectedMovie.rating}/5</p>   
            </div>
            </Hidden>
            
            <Hidden mdDown>
              <div id="trailer_div">
                  <iframe id="trailer" title={this.state.selectedMovie} src={this.state.selectedMovie.trailer}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
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
    </div>
  );
}
}

export default Detail;
