import React, { Suspense, lazy,Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../css/Detail.css";
import HomeButton from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import MailIcon from '@material-ui/icons/Mail';
import SocialMenu from './SocialMenu';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazy-load';
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
const DetailTab = lazy(() => import('./DetailTab'));
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
        selectedMovie: {
            title: "Popcorn Tales",
            genre : [],
            review : {
              synopsis:"",
              pros:[],
              cons:[]
            },
            ticketDetails:{ticketImage:"Graph/Popcorn Tales.png"},
            cast:[],
            rating:5
        },
        selectedTab:null,
        loading:true,
        shareUrl:"www.popcorntales.com",
        tags:"#popcorntales #movietime #moviereview #popcorn #letswatch",
        schema:{}
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    if(!nextState.dataLoaded)
      return false;
    if(JSON.stringify(this.state) === JSON.stringify(nextState) )
    return false;
    return true;
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
        var schema = this.getSchema(result);
        result.ticketDetails = JSON.parse(result.ticketDetails);
        this.setState({
            dataLoaded:true,  
            selectedMovie : result,
            selectedTab:0,
            loading:false,
            shareUrl:"www.popcorntales.com/review/"+movieTitle.replace(/ /g, '%20'),
            quote:"I read a review of "+movieTitle+". Let me know what you felt after reading it!!",
            schema:schema
          });
    })
    .catch(error =>{
      console.error(error);
      this.props.history.push('/');
    })  
  }


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
  if (!this.state.dataLoaded) {
    return <Backdrop open={this.state.loading}>
    <CircularProgress color="inherit" />
  </Backdrop>
}
const overallRating = this.hearts(this.state.selectedMovie.rating);
  return ( <>
       <Helmet>
          <title>{this.state.selectedMovie.title + " Movie Review and Analysis"}</title>
          <meta name="description" content={this.state.selectedMovie.review.synopsis}/>
          <script className='structured-data-list' type="application/ld+json">{this.state.schema}</script>
        </Helmet>
    <div id="container" className={this.state.loading ? 'hidden' : ''}>
        
        <AppBar id="appBar" position="static" className="tabbar">
        <Toolbar>
            <a href="/"><HomeButton/></a>
            {(this.state.selectedMovie.title.length < 20) && <h1 id="title">{this.state.selectedMovie.title +" Movie Review"}</h1>}
            {(this.state.selectedMovie.title.length >= 20) && <h1 id="title">{this.state.selectedMovie.title}</h1>}
            <section className="rightToolbar">
            <SocialMenu/>
            </section>
          </Toolbar>
        </AppBar>
        <div className="movie-header">
            <div id="card" >
              <LazyLoad>
              <Paper elevation={19} className="card-img">
              <img className="card-img" alt={this.state.selectedMovie.title} src={this.state.selectedMovie.titleImage}/>
               </Paper>
               </LazyLoad>
              <Hidden smDown>
              <Grid container justify = "center" className="ratingHearts">
                 {overallRating}
                  </Grid>
              </Hidden>
            </div>
            <Hidden mdUp >  
                  <div className="topHeader">
                    <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned" >{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  </Grid>
                  <h3 className="headerLevel2 centerAligned">{this.state.selectedMovie.language}</h3>
                  <h3 className="headerLevel2 centerAligned" >{this.state.selectedMovie.genre.join(",")}</h3>
                  <Grid container justify = "center">
                  {overallRating}
                  </Grid>
                  </div>
            </Hidden>
            <Hidden smDown>
            <div id="movie-description" >
                <Grid container alignItems="center" spacing={0} justify = "center">
                  <h1 className="headerLevel1 centerAligned" >{this.state.selectedMovie.title} ({this.state.selectedMovie.year})</h1>
                  </Grid>
                <h2 className="headerLevel2" >{this.state.selectedMovie.language}</h2>
                <h3 className="headerLevel2" >{this.state.selectedMovie.genre.join(",")}</h3>
                <h3 className="headerLevel2" >{this.state.selectedMovie.rating}/5</h3>   
                <div className="icon-container">
                <TwitterShareButton url={this.state.shareUrl} quote={this.state.quote} className="social-media-icon"><TwitterIcon size={28} round/></TwitterShareButton>
                <FacebookShareButton url={this.state.shareUrl} title={this.state.quote} hashtag={this.state.tags} className="social-media-icon"><FacebookIcon size={28} round/></FacebookShareButton>
                <WhatsappShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><WhatsappIcon size={28} round/></WhatsappShareButton>
                <TelegramShareButton url={this.state.shareUrl} title={this.state.quote} className="social-media-icon"><TelegramIcon size={28} round/></TelegramShareButton>
                </div>
            </div>
            </Hidden>
            <Hidden mdDown>
              <LazyLoad>
                  <iframe id="trailer" title={this.state.selectedMovie} src={this.state.selectedMovie.trailer}
                  allow="accelerometer; autoplay; picture-in-picture" >
                  </iframe>
              </LazyLoad>
            </Hidden>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <DetailTab movie={this.state.selectedMovie} selectedTab={this.state.selectedTab} 	/>
        </Suspense>
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
    </div>
    </>
  );
}

getSchema(movie){
  var ticketDetails = JSON.parse(movie.ticketDetails);
 var jsonbody= {
    "@context" : "http://schema.org",
    "@type" : "Movie",
    "name" : movie.title,
    "image" : movie.titleImage,
    "author": {
      "@type": "Person",
      "name": "Vinay Prabhu"
    },
    "director": {
      "@type": "Person",
      "name": movie.cast[0].split("-")[0].trim()
    },
    "dateCreated": ticketDetails.watchDate,
    "review" : {
      "@type" : "Review",
      "author" : {
        "@type" : "Person",
        "name" : "Vinay Prabhu"
      },
      "reviewRating" : {
        "@type" : "Rating",
        "ratingValue" : movie.rating
      },
      "reviewBody" : movie.review.synopsis
    }
  }
  return JSON.stringify(jsonbody)
}

}

export default Detail;
