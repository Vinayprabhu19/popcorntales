import React from "react";
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../css/Detail.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeButton from '@material-ui/icons/Home';
import Synopsis from './Synopsis';
import Review from './Review';
import LazyImage from "../components/LazyImage";
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Cast from './Cast';
import Ticket from './Ticket';
import MailIcon from '@material-ui/icons/Mail';
import SocialMenu from './SocialMenu';
import DetailedRating from './DetailedRating';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Helmet } from 'react-helmet';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

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
            title: "Popcorn Tales",
            genre : [],
            review : {
              synopsis:"",
              pros:[],
              cons:[]
            }
        },
        selectedTab:null,
        loading:true,
        shareUrl:"www.popcorntales.com",
        tags:"#popcorntales #movietime #moviereview #popcorn #letswatch"
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
        result=this.processImageData(result);
        result.review=JSON.parse(result.review);
        result.ticketDetails = JSON.parse(result.ticketDetails);
        this.setState({
            selectedMovie : result,
            selectedTab:0,
            loading:false,
            shareUrl:"www.popcorntales.com/review/"+movieTitle.replace(/ /g, '%20'),
            quote:"I read a review of "+movieTitle+" and I feel that it's worth watching. Read the review and let's watch it together!!"
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
          if(this.state.selectedMovie.review !== undefined)
            return <Review review={this.state.selectedMovie.review} title={this.state.selectedMovie.title}/>
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

hearts = (starCount) => {
  if(starCount == undefined)
    return;
  const value = starCount;
  return (
        <StyledRating name="customized-color" defaultValue={value} precision={0.1} value={value} 
                    icon={<FavoriteIcon fontSize="inherit" />}/>
  );
}
processImageData(data){
  var width,height;
  var width,height;
  if(window.matchMedia("(max-width: 576px)").matches){
    width=150;height=200;
  }
  else if(window.matchMedia("(max-width: 958px)").matches){
    width=200;height=260;
  }
  else if(window.matchMedia("(max-width: 1300px)").matches){
    width=220;height=250;
  }
  else if(window.matchMedia("(max-width: 2000px)").matches){
    width=250;height=300;
  }
  else{
    width=400;height=500;
  }
  data.titleImage=  data.titleImage+"&width="+width+"&height="+height;
  return data;
}

render(){
  const toolbar = this.getToolbar();
  const overallRating = this.hearts(this.state.selectedMovie.rating);
  return (
    <>
       <Helmet>
          <title>{this.state.selectedMovie.title + " - Review"}</title>
          <meta name="description" content={this.state.selectedMovie.review.synopsis}/>
        </Helmet>
    <div>
    <Backdrop open={this.state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
    <div id="container" className={this.state.loading ? 'hidden' : ''}>
        
        <AppBar id="appBar" position="static">
        <Toolbar>
            <a href="/"><HomeButton/></a>
            <h1 id="title">Popcorn Tales</h1>
            <section className="rightToolbar">
            <SocialMenu/>
            </section>
          </Toolbar>
        </AppBar>
        <div className="movie-header">
            <div id="card" >
              <Paper elevation={19}>
              <LazyImage className="card-img" alt={"Popcorn Tales " + this.state.selectedMovie.title + " Review Image"} unloadedSrc={this.state.selectedMovie.titleImage}/>
              </Paper>
              <Hidden smDown>
              <Grid container justify = "center" className="ratingHearts">
                 {overallRating}
                  </Grid>
              </Hidden>
            </div>
            <Hidden mdUp >
                  <div className="topHeader">
                    <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  <DetailedRating selectedMovie={this.state.selectedMovie}/>
                  </Grid>
                  <h3 className="headerLevel2 centerAligned" >{this.state.selectedMovie.language}</h3>
                  <h3 className="headerLevel2 centerAligned">{this.state.selectedMovie.genre.join(",")}</h3>
                  <Grid container justify = "center">
                  {overallRating}
                  </Grid>
                  </div>
            </Hidden>
            <Hidden smDown>
            <div id="movie-description">
                <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned">{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  <DetailedRating selectedMovie={this.state.selectedMovie}/>
                  </Grid>
                <h2 className="headerLevel2">{this.state.selectedMovie.language}</h2>
                <h3 className="headerLevel2">{this.state.selectedMovie.genre.join(",")}</h3>
                <h3 className="headerLevel2">{this.state.selectedMovie.rating}/5</h3>   
                <div className="icon-container">
                <TwitterShareButton url={this.state.shareUrl} quote={this.state.quote} className="social-media-icon"><TwitterIcon size={28} round/></TwitterShareButton>
                <FacebookShareButton url={this.state.shareUrl} title={this.state.quote} hashtag={this.state.tags} className="social-media-icon"><FacebookIcon size={28} round/></FacebookShareButton>
                <WhatsappShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><WhatsappIcon size={28} round/></WhatsappShareButton>
                <TelegramShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TelegramIcon size={28} round/></TelegramShareButton>
                </div>
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
              <Tab value={2} label="Cast & Crew" className="tab"/>
              <Tab value={3} label="Ticket" className="tab"/>
            </Tabs>
          </AppBar>
          <div>
          {toolbar}
          </div>
        </div>
        <footer>
          <div id="footerText"> 
              <Hidden smUp>
                <Grid container justify = "center" className="icon-container">
                  <TwitterShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TwitterIcon size={25} round/></TwitterShareButton>
                  <FacebookShareButton url={this.state.shareUrl} quote={this.state.quote} hashtag={this.state.tags} className="social-media-icon"><FacebookIcon size={25} round/></FacebookShareButton>
                  <WhatsappShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><WhatsappIcon size={25} round/></WhatsappShareButton>
                  <TelegramShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TelegramIcon size={25} round/></TelegramShareButton>
                  </Grid>
              </Hidden>
              <Grid container justify = "center" id="footerText">
              <h6>Need your feedback to improve  
              <a href="mailto:popcorntales19@gmail.com"> <MailIcon/></a>
              </h6>
              </Grid>
          </div>
        </footer>
    </div>
    </div>
    </>
  );
}
}

export default Detail;
